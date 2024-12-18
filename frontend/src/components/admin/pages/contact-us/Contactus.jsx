import React from 'react';
import styles from './Contactus.module.css';
import Table from './Table';
import UploadImageComponent from './UploadImage';

const Contactus = () => {

    return (

        <div className={styles.contactusContainer}>

            <div className={styles.contactusPhotoSection}>
                <UploadImageComponent />
                <Table />
            </div>

        </div>
    );
};

export default Contactus;
