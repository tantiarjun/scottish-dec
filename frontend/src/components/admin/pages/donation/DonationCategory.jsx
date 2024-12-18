import React, { useState } from 'react';
import styles from './DonationCategory.module.css';

const DonationCategory = () => {
    const [formData, setFormData] = useState({
        title: '',
        dateOfCreation: '',
        endDate: '',
        donationType: '',
        goal: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles.uploadPageContainer}>
            <div className={styles.imagesContainer}>
                <div className={styles.donationCategory}>
                    <h1 className={styles.imageHeading}>Create new donation categories</h1>

                    <div className={styles.uploadBox}>
                        <img src="/Images/upload.png" alt="Upload" className={styles.uploadIcon} />
                        <div className={styles.uploadtext}>Upload</div>
                        <div className={styles.uploadHint}>Max file size should not exceed 2 mb</div>
                    </div>
                    <button className={styles.submitBtn}>Submit</button>

                    <form>
                        <div className={styles.formRow}>
                            <div className={styles.leftColumn}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder=""
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="donationType">Donation Type</label>
                                    <input
                                        type="text"
                                        id="donationType"
                                        name="donationType"
                                        value={formData.donationType}
                                        onChange={handleInputChange}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className={styles.rightColumn}>
                                <div className={styles.formGroupRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="dateOfCreation">Date of Creation</label>
                                        <input
                                            type="date"
                                            id="dateOfCreation"
                                            name="dateOfCreation"
                                            value={formData.dateOfCreation}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="endDate">End Date</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="goal">Goal</label>
                                    <input
                                        type="text"
                                        id="goal"
                                        name="goal"
                                        value={formData.goal}
                                        onChange={handleInputChange}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.formGroupDes}>
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder=""
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn2}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonationCategory;
