

import React, { useState } from 'react';
import styles from "./TransactionRecord.module.css";
import { useNavigate } from 'react-router-dom';

const TransactionRecord = () => {
    const [selectedMonth, setSelectedMonth] = useState('All');
    const navigate = useNavigate();


    const eventData = [
        { category: 'Donation for Food', date: '24th Apr, 2024', time: '8:40-9:10 AM', name: 'Ricki Ponting', amount: '$124' },
        { category: 'Donation for Education', date: '25th Apr, 2024', time: '10:00-11:00 AM', name: 'Gloria Picket', amount: '$124' },

    ];

    return (
        <div className={styles.listingContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.listingHeading}>Transaction Records</h1>
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
                <div className={styles.listItem}>Category</div>
                <div className={styles.listItem}>Date</div>
                <div className={styles.listItem}>Time</div>
                <div className={styles.listItem}>Donar's name</div>
                <div className={styles.listItem}>Amount Donated</div>

            </div>
            <div className={styles.listingData}>
                {eventData.map((event, index) => (
                    <div key={index} className={styles.listingRow}>
                        <div className={styles.listItemEvent} >{event.category}</div>
                        <div className={styles.listItemData}>{event.date}</div>
                        <div className={styles.listItemData}>{event.time}</div>
                        <div className={styles.listItemData}>{event.name}</div>
                        <div className={styles.listItemData}>{event.amount}</div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionRecord;
