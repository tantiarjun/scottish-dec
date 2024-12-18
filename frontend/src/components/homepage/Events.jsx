
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import EventCard from '../events/EventCard';
import PopupEvent from '../events/PopupEvent';
import SuccessPopup from '../events/SuccessPopup';
import AvailabilityPopup from '../events/AvailabilityPopup';


const Events = () => {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([]);
    const [majorEvents, setMajorEvents] = useState([]);
    const [showAvailability, setShowAvailability] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // const response = await axios.get('http://localhost:5000/api/events');
                const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/events`);
                const reversedEvents = response.data.reverse();
                setEvents(reversedEvents);
                categorizeEvents(reversedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const categorizeEvents = (events) => {
        const major = events.slice(0, 3);
        setMajorEvents(major);
    };

    const handleCheckAvailability = (event) => {
        if (event.eventTitle === 'International Yoga Day') {
            navigate('/international-yoga-day');
        } else {
            setShowAvailability(true);
        }
    };

    const handleConfirmBooking = (bookingDetails) => {
        console.log('Booking confirmed:', bookingDetails);
        setShowAvailability(false);
        setShowSuccess(true);
    };

    const handleEventClick = (event) => {
        if (event.eventTitle === 'International Yoga Day') {
            navigate('/international-yoga-day');
        } else {
            setSelectedEvent(event);
        }
    };

    return (
        <div className="relative">

            <div className="container-body mt-20">
                <div className="px-4 py-3 mt-10 sm:mx-10 lg:mx-32 md:my-6">
                    <div className="textpart mb-6">
                        <div className="inline-flex gap-2 justify-center items-center">
                            <p className="text-gray-700 text-md font-semibold font-montserrat text-sm">
                                Explore
                            </p>
                            <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
                        </div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-bold font-playfair">Our Major Events</h2>
                            <Link to="/events">
                                <button className='md:mr-6  text-[#F4911F] font-nunito font-bold md:text-lg text-xs'>See All</button>
                            </Link>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 md:gap-x-8">
                        {majorEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                image={event.eventImageUrl}
                                title={event.eventTitle}
                                description={event.eventDescription}
                                time={event.startTime || event.eventTime}
                                date={event.eventDate}
                                location={event.eventLocation}
                                isPaid={event.eventTitle === 'International Yoga Day' || event.isPaid}
                                amount={event.amount}
                                slots={event.slots}
                                status="Available"
                                onClick={() => handleEventClick(event)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <PopupEvent
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    onCheckAvailability={() => handleCheckAvailability(selectedEvent)}
                />
            )}

            {showAvailability && selectedEvent && (
                <AvailabilityPopup
                    event={selectedEvent}
                    onClose={() => setShowAvailability(false)}
                    onConfirm={handleConfirmBooking}
                />
            )}

            {showSuccess && (
                <SuccessPopup
                    onClose={() => {
                        setShowSuccess(false);
                        setSelectedEvent(null);
                    }}
                />
            )}


        </div>
    );
};

export default Events;
