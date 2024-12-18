import React, { useState, useEffect } from "react";
import UpcomingCard from './UpcomingCard'
import axios from "axios";

const UpcomingEvents = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/api/upcomingevents');
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/upcomingevents`);
        const reversedEvents = response.data.reverse();
        setEvents(reversedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <>
      <div className="container-body my-20">
        <div className="px-4 py-3 mt-10 sm:mx-10 lg:mx-32 md:my-6">
          <div className="textpart mb-6">
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-md font-semibold font-montserrat text-sm">
                Get Ready For
              </p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold font-playfair">Our Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 md:gap-x-8">
            {events.map((event, index) => (
              <UpcomingCard
                key={index}
                image={event.eventImageUrl}
                title={event.eventTitle}
                date={event.eventDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
