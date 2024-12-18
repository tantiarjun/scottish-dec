import React, { useState } from 'react';
import styles from './WorkWithUs.module.css';
import Table from './Table';
import axios from 'axios';
import MainImage from './upload-images/MainImage';
import Image1 from './upload-images/Image1';
import Image2 from './upload-images/Image2';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCircleCheck } from 'react-icons/fa6';
import Tippy from '@tippyjs/react';
import { BiSolidError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const WorkWithUs = () => {

    const [mainImage, setMainImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [message, setMessage] = useState(null);
    const [errMessage, setErrMessage] = useState(null);

    const handleFileSelect = (file) => {
        setMainImage(file);
    };

    const handleFileSelect1 = (file) => {
        setImage1(file);
    }

    const handleFileSelect2 = (file) => {
        setImage2(file);
    }

    const handleCloseMessage = () => {
        setMessage('');
        setErrMessage('');
    }

    const handleUploadClick = () => {
        if (mainImage && image1 && image2) {
            const formData = new FormData();
            formData.append('images', mainImage);
            formData.append('images', image1);
            formData.append('images', image2);

            axios.post(`${import.meta.env.VITE_REACT_API_URL}/teamimage`, formData)
                .then(response => {
                    setMessage('Photo uploaded successfully');
                    setErrMessage('');
                })
                .catch(error => {
                    setErrMessage('Error uploading photo');
                    setMessage('');
                });
        } else {

            setErrMessage('No file selected');
        }
    };

    return (

        <div className={styles.contactusContainer}>

            <div className={styles.teamAndGovernanceButton}>
                <h1 className='contact-us-information-text'>Come join our team</h1>
                <Link to="/admin-our-governance">
                    <button className={styles.governanceButton}>Our Governance</button>
                </Link>

            </div>



            {message && (
                <div className={styles.successMsgContainer}>
                    <p className={styles.successIconAndMsg}><FaCircleCheck className={styles.checkIcon} />{message}</p>
                    <Tippy content="Close" className='mr-2'>
                        <p><AiOutlineClose className={styles.successCloseIcon} onClick={handleCloseMessage} /></p>
                    </Tippy>
                </div>
            )}


            {errMessage && (
                <div className={styles.errMsgContainer}>
                    <p className={styles.errIconAndMsg}><BiSolidError className={styles.errIcon} /> {errMessage}</p>
                    <Tippy content="Close" className='ml-3'>
                        <p><AiOutlineClose className={styles.errCloseIcon} onClick={handleCloseMessage} /></p>
                    </Tippy>
                </div>
            )}


            <div className={styles.uploadAndSubmitBtnContainer}>
                <div className={styles.uploadContainer}>

                    <MainImage onFileSelect={handleFileSelect} />

                    <div className={styles.smallUploadContainer}>
                        <Image1 onFileSelect1={handleFileSelect1} />
                        <Image2 onFileSelect2={handleFileSelect2} />
                    </div>

                </div>
                <button onClick={handleUploadClick} className={styles.submitBtn}>Submit</button>
            </div>


            <div className={styles.contactusPhotoSection}>
                <Table />
            </div>


        </div>
    );
};

export default WorkWithUs;
