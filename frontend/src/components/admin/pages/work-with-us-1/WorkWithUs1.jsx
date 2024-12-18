import React from 'react';
import styles from './WorkWithUs1.module.css';
import UploadImage from './our-governance/UploadImage';
import DailyActivities from './daily-activities/DailyActivities';
import GainGreaterVisibilty from './gain-greater-visibility/GainGreaterVisibility';


const WorkWithUs1 = () => {

    return (

        <div className={styles.workWithusContainer}>

            <div className={styles.workWithusPhotoSection}>


                <div className={styles.uploadImageConatiner}>
                    <h1 className={`md:ml-5 ${styles.ourGovernanceText}`}> Our Governance</h1>
                    <UploadImage />
                </div>



                <h1 className={`md:ml-5 ${styles.dailyActivitesText}`}>Daily Activites</h1>
                <div className="grid md:grid-cols-3">
                    <DailyActivities />
                    <DailyActivities />
                    <DailyActivities />
                </div>


                <GainGreaterVisibilty />



            </div>

        </div>
    );
};

export default WorkWithUs1;
