

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Donation.module.css';

const Donation = () => {
    const navigate = useNavigate();
    const [donations, setDonations] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchDonations();

    }, []);

    const fetchDonations = async () => {
        try {
            // const response = await axios.get('http://localhost:5000/api/donations');
            const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/donations`);
            setDonations(response.data);
        } catch (error) {
            console.error('Error fetching donations:', error);
        }
    };

    const paymentMethods = [
        { method: 'Visa or MasterCard', percentage: '40%', image1: '/Images/visa.png', image2: '/Images/master.png' },
        { method: 'PayPal', percentage: '50%', image: '/Images/paypal.png' },
        { method: 'Alipay', percentage: '10%', image: '/Images/cheque.png' },
    ];

    const staticTransactions = [
        { name: 'Ricki Ponting', message: 'Donated for food', amount: '$124', time: 'Just now', image: '/Images/ric.png' },
        { name: 'Sabrina Greene', message: 'Donated for food', amount: '$124', time: 'Just now', image: '/Images/sab.png' },
        { name: 'Dua Lipa', message: 'Donated for food', amount: '$124', time: '1 min ago', image: '/Images/dua.png' },
        { name: 'Ricki Ponting', message: 'Donated for food', amount: '$124', time: '2 mins ago', image: '/Images/ric.png' },
        { name: 'Ricki Ponting', message: 'Donated for food', amount: '$124', time: '2 mins ago', image: '/Images/ric.png' },
    ];

    return (
        <div className={styles.eventPageContainer}>
            <h1 className={styles.imageHeading}>Quick overview</h1>
            <div className={styles.container}>
                <div className={styles.quickOverview}>
                    <div className={styles.realTimeTransactions}>
                        <div className={styles.headingContainer}>
                            <h2>Real time transactions</h2>
                            <button className={styles.viewButton}>View all</button>
                        </div>
                        <div className={styles.transactions}>
                            {staticTransactions.map((transaction, index) => (
                                <div key={index} className={styles.transaction}>
                                    <img src={transaction.image} alt={transaction.name} className={styles.transactionImage} />
                                    <div className={styles.transactionDetails}>
                                        <p className={styles.name}>{transaction.name}</p>
                                        <p className={styles.message}>{transaction.message}</p>
                                    </div>
                                    <p className={styles.amount}>{transaction.amount}</p>
                                    <p className={styles.time}>{transaction.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.activatedCampaigns}>
                        <div className={styles.headingContainer}>
                            <h2>Activated Campaigns</h2>
                            <button className={styles.viewButton}>View all</button>
                        </div>
                        <div className={styles.campaigns}>
                            {donations.map((campaign, index) => (
                                <div key={index} className={styles.campaign}>
                                    <img src={campaign.image_url} alt={campaign.title} className={styles.campaignImage} />
                                    <div className={styles.campaignInfo}>
                                        <p className={styles.createdOn}>Created on {new Date(campaign.created_on).toLocaleDateString()}</p>
                                        <p className={styles.campaignTitle}>{campaign.title}</p>
                                        <p className={styles.daysLeft}>Remaining {Math.ceil((new Date(campaign.end_date) - new Date()) / (1000 * 60 * 60 * 24))} days</p>
                                        <div className={styles.progressContainer}>
                                            <div className={styles.progress}>
                                                <div
                                                    className={styles.progressFill}
                                                    style={{ width: `${(campaign.raised / campaign.goal_amount) * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className={styles.progressInfo}>
                                                <span className={styles.raised}>${campaign.raised ? campaign.raised.toLocaleString() : 0}</span>/
                                                <span className={styles.goal}>${campaign.goal_amount.toLocaleString()}</span>
                                                <span className={styles.percent}>
                                                    {Math.round((campaign.raised / campaign.goal_amount) * 100)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.topPaymentMethod}>
                        <h2>Top Payment Method</h2>
                        {paymentMethods.map((payment, index) => (
                            <div key={index} className={styles.paymentMethod}>
                                <div className={styles.paymentImages}>
                                    <img src={payment.image1 || payment.image} alt={payment.method} />
                                    {payment.image2 && (
                                        <>
                                            <span className={styles.orText}>or</span>
                                            <img src={payment.image2} alt={payment.method} />
                                        </>
                                    )}
                                </div>
                                <div className={styles.progressBar2}>
                                    <p className={styles.percentage}>{payment.percentage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.controls}>
                        <h2>Controls</h2>
                        <button className={styles.controlButton} onClick={() => navigate('/admin-donation/donation')}>
                            + Create new Donation categories
                        </button>
                        <button className={styles.controlButton} onClick={() => navigate('/admin-donation/transactionrecord')}>
                            View Donation records
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;