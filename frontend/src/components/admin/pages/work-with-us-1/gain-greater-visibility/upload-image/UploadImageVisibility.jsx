import React, { useState } from 'react';
import axios from 'axios';
import './UploadImageVisibility.css'; // Assuming you have some basic CSS for styling
import { FiUpload } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon
import { BiSolidError } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';// optional

const UploadImageVisibility = () => {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null); // New state for the file
    const [fileName, setFileName] = useState(''); // New state for file name
    const [hover, setHover] = useState(false);
    const [message, setMessage] = useState('');
    const [ErrMessage, setErrMessage] = useState('');

    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
            setImage(URL.createObjectURL(selectedFile));
            setFile(selectedFile); // Set the file
            setFileName(selectedFile.name); // Set the file name
        } else {
            setErrMessage('Error: File size exceeds 2MB');
        }
    };

    const uploadToServer = (file) => {
        const formData = new FormData();
        formData.append('photo', file);

        axios.post('http://localhost:3000/api/contactusimage', formData)
            .then(response => {
                setMessage('Photo uploaded successfully');
            })
            .catch(error => {
                setErrMessage('Error uploading photo');
            });
    };

    const handleSubmit = () => {
        if (file) {
            uploadToServer(file);
        } else {
            setErrMessage('Error: No file selected');
        }
    };

    const handleCloseMessage = () => {
        setMessage('');
        setErrMessage('');
    };

    return (
        <>

            {message && (
                <div className="contact-us-succes-message">
                    <p className='success-icon-message'><FaCircleCheck className='check-icon' />{message}</p>
                    <Tippy content="Close" className='mr-2'>
                        <p><AiOutlineClose className="succes-close-icon" onClick={handleCloseMessage} /></p>
                    </Tippy>
                </div>
            )}


            {ErrMessage && (
                <div className="contact-us-errmessage">
                    <p className='err-icon-message'><BiSolidError className='err-icon' /> {ErrMessage}</p>
                    <Tippy content="Close" className='ml-3'>
                        <p><AiOutlineClose className="contact-us-close-icon" onClick={handleCloseMessage} /></p>
                    </Tippy>
                </div>
            )}


            <div className='upload-box-and-submit-button'>
                <div
                    className="visibility-upload-container"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {image ? (
                        <>
                            <img src={image} alt="Uploaded" className="uploaded-image" />
                            {hover && (
                                <div className="upload-overlay">
                                    <label className="upload-label">
                                        <input
                                            type="file"
                                            onChange={handleImageUpload}
                                            className="upload-input"
                                            accept="image/*"
                                        />
                                        <div className='uploadiconAndText'>
                                            <FiUpload className="mb-1 mr-2 uploadIconHover " />
                                            <span className="upoloadtextHover">Upload</span>
                                        </div>
                                    </label>
                                </div>
                            )}

                        </>
                    ) : (
                        <label className="upload-label">
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="upload-input"
                                accept="image/*"
                            />
                            <div className="upload-placeholder">
                                <div className='uploadiconAndText'>
                                    <FiUpload className="mb-1 mr-2 uploadIcon" />
                                    <span className="upoloadtext">Upload</span>
                                </div>

                            </div>
                        </label>
                    )}

                </div>

                {/* <button className='contact-us-submit-button' onClick={handleSubmit}>Submit</button> */}


            </div>



            <div className="contact-us-file-name ">{fileName}</div> {/* Display file name */}



        </>
    );
};

export default UploadImageVisibility;
