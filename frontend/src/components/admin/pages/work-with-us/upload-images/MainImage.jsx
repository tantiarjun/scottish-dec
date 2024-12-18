import React, { useState } from 'react';
import './MainImage.css'; // Assuming you have some basic CSS for styling
import { FiUpload } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

const MainImage = ({ onFileSelect }) => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState(''); // New state for file name
    const [hover, setHover] = useState(false);
    const [ErrMessage, setErrMessage] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) {
            setImage(URL.createObjectURL(file));
            setFileName(file.name); // Set the file name
            onFileSelect(file); // Pass the file to the parent component
        } else {
            setErrMessage('Error: File size exceeds 2MB');
        }
    };

    const handleCloseMessage = () => {
        setErrMessage('');
    };

    return (
        <div>
            <div
                className="upload-main-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {image ? (
                    <>
                        <img src={image} alt="Uploaded" className="uploaded-main-image" />
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
                            <span className='mt-5'>Max file size should not exceed 2 MB</span>
                        </div>
                    </label>
                )}
            </div>

            <div className="file-name mt-0 ">{fileName}</div> {/*Display file name*/}

            {ErrMessage && (
                <div className="errmessage">
                    {ErrMessage}
                    <AiOutlineClose className="close-icon" onClick={handleCloseMessage} />
                </div>
            )}


        </div>
    );
};

export default MainImage;



