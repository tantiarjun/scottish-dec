
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './EventUpload.module.css';

const EventUpload = () => {
    const { eventId } = useParams(); // Get the eventId from the URL
    const [eventType, setEventType] = useState('paid');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [charge, setCharge] = useState('');
    const [location, setLocation] = useState('Glasgow');
    const [slots, setSlots] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [imageName, setImageName] = useState(''); // to store the selected image name
    const [pdfFile, setPdfFile] = useState(null); // state for PDF file
    const [paidEvent, setPaidEvent] = useState('yes'); // state for paid/free event

    useEffect(() => {
        if (eventId) {
            const fetchEvent = async () => {
                try {
                    // const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
                    const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/events/${eventId}`);
                    const event = response.data;
                    setTitle(event.eventTitle);
                    setDescription(event.eventDescription);
                    setEventType(event.isPaid ? 'paid' : 'free');
                    setCharge(event.amount);
                    setSlots(event.slots);
                    setLocation(event.eventLocation);
                    setDate(event.eventDate);
                    setTime(event.startTime);
                    setDuration(event.endTime);
                    setImageName(event.eventImageUrl); // Set the image name to display
                } catch (error) {
                    console.error('Error fetching event:', error);
                }
            };
            fetchEvent();
        }
    }, [eventId]);

    const scottishLocations = [
        'Aberdeen', 'Dundee', 'Edinburgh', 'Glasgow', 'Inverness', 'Perth', 'Stirling',
        'St Andrews', 'Fort William', 'Oban', 'Pitlochry', 'Aviemore', 'Dumfries',
        'Ayr', 'Dunfermline', 'Falkirk', 'Paisley', 'Kirkcaldy', 'Livingston'
    ];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) { // Check if file size is <= 2 MB
            setEventImage(file);
            setImageName(file.name); // set the image name
        } else {
            alert('File size should not exceed 2 MB');
        }
    };
    const handlePdfChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file); // set the PDF file
        } else {
            alert('Please upload a valid PDF file.');
        }
    };
    const handleImageSubmit = async (e) => {
        e.preventDefault();
        if (!eventImage) {
            alert('Please choose an image to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('eventImage', eventImage);


        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/events/uploadImage`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!eventImage) {
            alert('Please upload an image first.');
            return;
        }
        const formData = new FormData();
        formData.append('eventTitle', title);
        formData.append('eventDescription', description);
        formData.append('isPaid', eventType === 'paid');
        formData.append('amount', charge);
        formData.append('slots', slots);
        formData.append('eventLocation', location);
        formData.append('eventDate', date);
        formData.append('startTime', time);
        formData.append('endTime', duration);
        formData.append('eventImage', eventImage); // append the image
        formData.append('paidEvent', paidEvent);
        if (pdfFile) formData.append('eventPdf', pdfFile); // append the PDF if present
        formData.append('paidEvent', paidEvent);


        try {
            const url = eventId
                ? `${import.meta.env.VITE_REACT_API_URL}/events/${eventId}`
                : `${import.meta.env.VITE_REACT_API_URL}/events`;
            const method = eventId ? 'put' : 'post';

            const response = await axios({
                method,
                url,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Event uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading event:', error);
        }
    };

    return (
        <div className={styles.uploadPageContainer}>
            <div className={styles.imagesContainer}>
                <h1 className={styles.imageHeading}>{eventId ? 'Edit Event' : 'Create Event'}</h1>
                <form className={styles.form} onSubmit={handleImageSubmit}>
                    <label htmlFor="eventImage" className={styles.uploadBox}>
                        <img src="/Images/upload.png" alt="Upload" className={styles.uploadIcon} />
                        <div className={styles.uploadtext}>Upload</div>
                        <div className={styles.uploadHint}>Max file size should not exceed 2 mb</div>
                    </label>
                    <input
                        type="file"
                        id="eventImage"
                        className={styles.hiddenInput}
                        onChange={handleImageChange}
                    />
                    {imageName && <div className={styles.imageName}>{imageName}</div>}
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="paidEvent">Paid Event</label>
                            <select
                                id="paidEvent"
                                value={paidEvent}
                                onChange={(e) => setpaidEvent(e.target.value)}
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {eventType === 'paid' && (
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="charge">Charge amount for paid event</label>
                                <input
                                    type="text"
                                    id="charge"
                                    value={charge}
                                    onChange={(e) => setCharge(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="location">Location</label>
                                <select
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    {scottishLocations.map((loc, index) => (
                                        <option key={index} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="slots">Number of Slots available</label>
                            <input
                                type="text"
                                id="slots"
                                value={slots}
                                onChange={(e) => setSlots(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="text"
                                id="duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="eventType">Event Type</label>
                            <select
                                id="eventType"
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                            >
                                <option value="event">Event</option>
                                <option value="fixed event">Fixed event</option>
                                <option value="upcoming event">Upcoming event</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="upload">Upload PDF</label>

                            <input
                                type="file"
                                id="eventPdf"
                                accept="application/pdf"
                                onChange={handlePdfChange}

                            />
                        </div>
                    </div>
                    <div className={`${styles.formGroup} ${styles.description}`}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            className={styles.box}
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn2}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EventUpload;