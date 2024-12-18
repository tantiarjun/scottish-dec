import React from 'react';
import styles from './Out.module.css';

const Out = () => {
    return (
        <div className={styles.eventPageContainer}>
            <div className={styles.imagesContainer}>
                <img src="/Images/successtick.gif" alt="Success" className={styles.image} />
                <img src="/Images/word.png" alt="Word" className={styles.imagetext} />
                <p className={styles.text}>You have been logged out</p>
            </div>
        </div>
    );
};

export default Out;
