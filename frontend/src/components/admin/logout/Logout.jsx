import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logout.module.css';

const Logout = () => {
    return (
        <div className={styles.eventPageContainer}>
            <div className={styles.imagesContainer}>
                <img src="./Images/logout.png" alt="Logout" className={styles.image} />
                <p className={styles.text}>Oh no! you're leaving, are you sure?</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>No, back</button>
                    <Link to="/logout/out" className={styles.buttonPrimary}>
                        Yes, log me out
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Logout;
