import React, { useState } from 'react';
import './Image1.css'; // Assuming you have some basic CSS for styling
import { FiUpload } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

const Image2 = ({ onFileSelect2 }) => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState(''); // New state for file name
    const [hover, setHover] = useState(false);
    const [ErrMessage, setErrMessage] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) {
            setImage(URL.createObjectURL(file));
            setFileName(file.name); // Set the file name
            onFileSelect2(file); // Pass the file to the parent component
        } else {
            setErrMessage('File size exceeds 2MB');
        }
    };

    const handleCloseMessage = () => {
        setErrMessage('');
    };

    return (
        <div>

            <div
                className="upload-container-small"
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

            <div className="file-name mt-2 ml-2">{fileName}</div> {/*Display file name*/}

            {ErrMessage && (
                <div className="errmessageSmall">
                    {ErrMessage}
                    <AiOutlineClose className="closeIconSmall" onClick={handleCloseMessage} />
                </div>
            )}


        </div>
    );
};

export default Image2;



