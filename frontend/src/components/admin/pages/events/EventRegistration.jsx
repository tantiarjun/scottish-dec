import React, { useState } from 'react';
import styles from "./EventRegistration.module.css";
import { useNavigate } from 'react-router-dom';

const EventRegistration = () => {
    const [selectedMonth, setSelectedMonth] = useState('All');
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/admin-events/eventrecord');
    };

    const handleEventClick = () => {
        navigate('/admin-events/eventrecord');
    };

    const eventData = [
        { event: 'International Yoga Day', date: '24th Apr, 2024', time: '8:40-9:10 AM', location: 'Calvert Street, Glasgow', registrations: 3000, attendees: 2000 },
        { event: 'Another Event', date: '25th Apr, 2024', time: '10:00-11:00 AM', location: 'Main Street, London', registrations: 2500, attendees: 1800 },

    ];

    return (
        <div className={styles.listingContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.listingHeading}>Event Registration records</h1>
                <select className={styles.monthDropdown} value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)}>
                    <option value="All">All</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
            <div className={styles.newListingBox}>
                <div className={styles.listItem}>Event</div>
                <div className={styles.listItem}>Date</div>
                <div className={styles.listItem}>Time</div>
                <div className={styles.listItem}>Location</div>
                <div className={styles.listItem}>Registrations</div>
                <div className={styles.listItem}>Attendees</div>
            </div>
            <div className={styles.listingData}>
                {eventData.map((event, index) => (
                    <div key={index} className={styles.listingRow}>
                        <div className={styles.listItemEvent} onClick={handleEventClick}>{event.event}</div>
                        <div className={styles.listItemData}>{event.date}</div>
                        <div className={styles.listItemData}>{event.time}</div>
                        <div className={styles.listItemData}>{event.location}</div>
                        <div className={styles.listItemData}>{event.registrations}</div>
                        <div className={styles.listItemData}>{event.attendees}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventRegistration;
