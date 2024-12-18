import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Events.module.css';


const Events = () => {
    const navigate = useNavigate();
    const [eventsData, setEventsData] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const upcomingEventsRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // const response = await axios.get('http://localhost:5000/api/events');
                const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/events`);
                setEventsData(response.data);
            } catch (error) {
                console.error('Error fetching events', error);
            }
        };
        fetchEvents();
    }, []);

    const handleEditClick = (eventId) => {
        navigate(`/admin-events/upload/${eventId}`);
    };

    const handleDeleteClick = async (eventId) => {
        try {
            // await axios.delete(`http://localhost:5000/api/events/${eventId}`);
            const response = await axios.delete(`${import.meta.env.VITE_REACT_API_URL}/events/${eventId}`);
            setEventsData(eventsData.filter(event => event._id !== eventId));
        } catch (error) {
            console.error('Error deleting event', error);
        }
    };

    const handleDeleteAll = async () => {
        try {
            if (selectedEvents.length > 0) {
                const deletePromises = selectedEvents.map(eventId =>
                    // axios.delete(`http://localhost:5000/api/events/${eventId}`)
                    axios.delete(`${import.meta.env.VITE_REACT_API_URL}/events/${eventId}`)
                );
                await Promise.all(deletePromises);
                setEventsData(eventsData.filter(event => !selectedEvents.includes(event._id)));
                setSelectedEvents([]);
            } else {
                // await axios.delete('http://localhost:5000/api/events');
                await axios.delete(`${import.meta.env.VITE_REACT_API_URL}/events`)
                setEventsData([]);
                setSelectedEvents([]);
            }
        } catch (error) {
            console.error('Error deleting events', error);
        }
    };

    const handleCheckboxChange = (eventId) => {
        setSelectedEvents(prevSelected => {
            if (prevSelected.includes(eventId)) {
                return prevSelected.filter(id => id !== eventId);
            } else {
                return [...prevSelected, eventId];
            }
        });
    };

    const handleViewAll = () => {
        console.log("View All clicked");
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - upcomingEventsRef.current.offsetLeft);
        setScrollLeft(upcomingEventsRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - upcomingEventsRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        upcomingEventsRef.current.scrollLeft = scrollLeft - walk;
    };

    const upcomingEvents = [
        {
            id: 1,
            title: "SamastVishw Mahaaarti",
            date: "24th Apr, 2024",
            time: "8:40-9:10 AM",
            location: "Calvert Street, Glasgow",
            image: "/Images/arti.png"
        },
        {
            id: 2,
            title: "Punyadaan Diwali",
            date: "24th Apr, 2024",
            time: "8:40-9:10 AM",
            location: "Calvert Street, Glasgow",
            image: "/Images/raksha.png"
        },
        {
            id: 3,
            title: "Holi",
            date: "25th Apr, 2024",
            time: "10:00-11:30 AM",
            location: "Calvert Street, Glasgow",
            image: "/Images/holi.png"
        }
    ];

    return (
        <div className={styles.eventPageContainer}>
            <div className={styles.imagesContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.imageHeading}>Present Layout</h1>
                    <button className={styles.manageButton}>Manage</button>
                </div>
                <div className={styles.imagesWrapper}>
                    {eventsData.slice(0, 3).map((event) => (
                        <div key={event._id} className={styles.imageWrapper}>
                            <img src={event.eventImageUrl} alt={event.eventTitle} className={styles.image} />
                            <button className={styles.bookNowButton}>Book Now</button>
                            <div className={styles.eventDetails}>
                                <div className={styles.eventTitle}>
                                    <h2 className={styles.eventName}>{event.eventTitle}</h2>
                                    <p className={styles.dateTimeLocation}>
                                        <span className={styles.dateTime}>{event.eventDate} | {event.startTime} - {event.endTime}</span>
                                        <br />
                                        <span className={styles.location}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.eventLocation}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.listingContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.listingHeading}>Event Listing</h1>
                    <button className={styles.viewShopButton}>View Shop</button>
                </div>
                <div className={styles.listingBox}>
                    <button className={styles.deleteAllButton} onClick={handleDeleteAll}>Delete all</button>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.eventTable}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Text</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventsData.map((event) => (
                                <tr key={event._id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className={styles.checkbox}
                                            onChange={() => handleCheckboxChange(event._id)}
                                            checked={selectedEvents.includes(event._id)}
                                        />
                                    </td>
                                    <td>
                                        <img src={event.eventImageUrl} alt={event.eventTitle} className={styles.listImage} />
                                    </td>
                                    <td>
                                        <h3 className={styles.eventName}>{event.eventTitle}</h3>
                                        <p className={styles.dateTime}>
                                            {event.eventDate} | {event.startTime} - {event.endTime}
                                        </p>
                                        <p className={styles.location}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.eventLocation}
                                        </p>
                                    </td>
                                    <td className={styles.type}>{event.isPaid ? 'Paid' : 'Free'}</td>
                                    <td className={styles.actionsContainer}>
                                        <img
                                            src="/Images/pen.png"
                                            alt="Edit"
                                            className={styles.actionIcon}
                                            onClick={() => handleEditClick(event._id)}
                                        />
                                        <img
                                            src="/Images/delete.png"
                                            alt="Delete"
                                            className={styles.actionIconDel}
                                            onClick={() => handleDeleteClick(event._id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.viewAllButtonContainer}>
                    <button className={styles.viewAllButton} onClick={handleViewAll}>View All</button>
                </div>
            </div>

            <div className={styles.upcomingEventsContainer}>
                <h2 className={styles.upcomingEventsHeading}>Upcoming events</h2>
                <div
                    className={styles.upcomingEventsScrollContainer}
                    ref={upcomingEventsRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.upcomingEventsWrapper}>
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className={styles.upcomingEventCard}>
                                <img src={event.image} alt={event.title} className={styles.upcomingEventImage} />
                                <div className={styles.upcomingEventInfo}>
                                    <h3 className={styles.upcomingEventTitle}>{event.title}</h3>
                                    <p className={styles.upcomingEventDateTime}>{event.date} | {event.time}</p>
                                    <p className={styles.upcomingEventLocation}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;