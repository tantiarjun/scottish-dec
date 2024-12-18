import React, { useState } from 'react';
import styles from "./EventRecords.module.css";

const EventRecords = () => {
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [eventData, setEventData] = useState([
        { person: 'Ricki Pointing', date: '24th Apr, 2024 ,8:40-9:10 AM', address: 'Calvert Street, Glasgow', cost: '$125', status: 'Confirmed' },
        { person: 'Ricki Pointing', date: '24th Apr, 2024 ,8:40-9:10 AM', address: 'Calvert Street, Glasgow', cost: '$125', status: 'Pending' },

    ]);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleStatusChange = (event, index) => {
        const newEventData = [...eventData];
        newEventData[index].status = event.target.value;
        setEventData(newEventData);
    };

    return (
        <div className={styles.listingContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.listingHeading}>Transaction Records</h1>
                <select className={styles.monthDropdown} value={selectedMonth} onChange={handleMonthChange}>
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
                <div className={styles.listItem}>Person's name</div>
                <div className={styles.listItem}>Date & Time</div>
                <div className={styles.listItem}>Address</div>
                <div className={styles.listItem}>Event Cost</div>
                <div className={styles.listItem}>Booking Status</div>
            </div>
            <div className={styles.listingData}>
                {eventData.map((event, index) => (
                    <div key={index} className={styles.listingRow}>
                        <div className={styles.listItemEvent}>{event.person}</div>
                        <div className={styles.listItemData}>{event.date}</div>
                        <div className={styles.listItemData}>{event.address}</div>
                        <div className={styles.listItemData}>{event.cost}</div>
                        <div className={styles.listItemData}>
                            <select
                                className={styles.statusDropdown}
                                value={event.status}
                                onChange={(e) => handleStatusChange(e, index)}
                            >
                                <option value="Confirmed">Confirmed</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventRecords;
