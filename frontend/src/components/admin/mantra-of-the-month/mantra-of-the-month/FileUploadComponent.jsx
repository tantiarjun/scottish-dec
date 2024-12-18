// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import styles from './FileUploadComponent.module.css';
// import { FaCircleCheck } from 'react-icons/fa6';
// import { AiOutlineClose } from 'react-icons/ai';
// import Tippy from '@tippyjs/react';
// import { BiSolidError } from 'react-icons/bi';

// const FileUploadComponent = ({ selectedMonth, modifiedDate }) => {
//     const [photo, setPhoto] = useState(null);
//     const [textFile, setTextFile] = useState(null);
//     const [fileError, setFileError] = useState(null);
//     const [fileContent, setFileContent] = useState('');
//     const [photoTextErr, setPhotoTextErr] = useState('');
//     const [successMsg, setSuccessMsg] = useState('');

//     // Create refs for file inputs
//     const photoInputRef = useRef(null);
//     const textInputRef = useRef(null);

//     const handlePhotoChange = (e) => {
//         const file = e.target.files[0];
//         if (file && file.size > 2 * 1024 * 1024) { // 2 MB in bytes
//             setFileError('File size should not exceed 2 MB');
//             setPhoto(null);
//         } else {
//             setFileError(null);
//             setPhoto(file);
//         }
//     };

//     const handleTextFileChange = (e) => {
//         const file = e.target.files[0];
//         setTextFile(file);

//         const reader = new FileReader();

//         reader.onload = (e) => {
//             setFileContent(e.target.result);
//         };

//         if (file) {
//             reader.readAsText(file);
//         }
//     };

//     const handleCloseMessage = () => {
//         setSuccessMsg(null);
//         setPhotoTextErr(null);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!photo || !textFile) {
//             setPhotoTextErr('Please upload both a photo and a text file.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('month', selectedMonth);
//         formData.append('photo', photo);
//         formData.append('textContent', fileContent);

//         try {
//             const response = await axios.post('http://localhost:3000/api/mantra', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             setSuccessMsg("Changes Successfully ");
//             setPhoto(null);
//             setTextFile(null);

//             // Clear the input fields using refs
//             if (photoInputRef.current) photoInputRef.current.value = "";
//             if (textInputRef.current) textInputRef.current.value = "";

//         } catch (error) {
//             console.error('Error:', error);
//             setFileError('An error occurred while uploading the files.');
//         }

//     };

//     return (
//         <div className={styles.container}>

//             <form className={styles.formdata} onSubmit={handleSubmit}>

//                 {successMsg && (
//                     <div className={styles.successMsgContainer}>
//                         <p className={styles.sucsessMsgIcon}><FaCircleCheck className={styles.checkIcon} />{successMsg}</p>
//                         <Tippy content="Close" className='mr-2'>
//                             <p><AiOutlineClose className={styles.successCloseIcon} onClick={handleCloseMessage} /></p>
//                         </Tippy>
//                     </div>
//                 )}

//                 {photoTextErr && (
//                     <div className={styles.errMsgContainer}>
//                         <p className={styles.errMsgIcon}><BiSolidError className={styles.errIcon} /> {photoTextErr}</p>
//                         <Tippy content="Close" className='ml-3'>
//                             <p><AiOutlineClose className={styles.errCloseIcon} onClick={handleCloseMessage} /></p>
//                         </Tippy>
//                     </div>
//                 )}

//                 <div className={styles.uploadSection}>
//                     <label className={styles.label}>Change Photo:</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handlePhotoChange}
//                         className={styles.fileInput}
//                         ref={photoInputRef}  // Attach ref to photo input
//                     />
//                     <span>{fileError && <p style={{ fontSize: '12px', color: '#FF0101', marginTop: '5px' }}>{fileError}</p>}</span>
//                 </div>

//                 <div className={styles.textandSubmitContainer}>

//                     <div className={styles.uploadSection}>
//                         <label className={styles.label}>Change Text:</label>
//                         <input
//                             type="file"
//                             accept=".txt"
//                             onChange={handleTextFileChange}
//                             className={styles.fileInput}
//                             ref={textInputRef}  // Attach ref to text input
//                         />
//                         <span>{textFile && <p style={{ fontSize: '12px', color: 'green', marginTop: '5px' }}>12 texts selected, file 2024</p>}</span>
//                     </div>

//                     <div className="mt-6">
//                         <button type="submit" className={styles.submitButton}>Submit</button>
//                     </div>
//                 </div>

//             </form>

//             <div className={styles.info}>
//                 <p>Change on: Month ending</p>
//                 <p className="mt-2">Last Modified: {modifiedDate}</p>
//             </div>


//         </div>
//     );
// };

// export default FileUploadComponent;


import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './FileUploadComponent.module.css';
import { FaCircleCheck } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import Tippy from '@tippyjs/react';
import { BiSolidError } from 'react-icons/bi';
import ConfirmationModal from './ConfirmationModal';

const FileUploadComponent = ({ selectedMonth, modifiedDate }) => {

    const [photo, setPhoto] = useState(null);
    const [textFile, setTextFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [fileContent, setFileContent] = useState('');
    const [photoTextErr, setPhotoTextErr] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitPending, setSubmitPending] = useState(false);

    const photoInputRef = useRef(null);
    const textInputRef = useRef(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) { // 2 MB in bytes
            setFileError('File size should not exceed 2 MB');
            setPhoto(null);
        } else {
            setFileError(null);
            setPhoto(file);
        }
    };

    const handleTextFileChange = (e) => {
        const file = e.target.files[0];
        setTextFile(file);

        const reader = new FileReader();

        reader.onload = (e) => {
            setFileContent(e.target.result);
        };

        if (file) {
            reader.readAsText(file);
        }
    };

    const handleCloseMessage = () => {
        setSuccessMsg(null);
        setPhotoTextErr(null);
    };

    const checkIfMantraExists = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/mantra`, {
                params: { month: selectedMonth },
            });

            // Assuming the API returns { exists: true } if mantra exists
            // return response.data.exists;
            return (response.data !== "");

        } catch (error) {
            console.error('Error checking mantra:', error);
            setFileError('An error occurred while checking the mantra.');
            return false;
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!photo || !textFile) {
            setPhotoTextErr('Please upload both a photo and a text file.');
            return;
        }

        // Check if mantra exists
        const mantraExists = await checkIfMantraExists();

        if (mantraExists) {
            setIsModalOpen(true); // Open modal if mantra exists
            setSubmitPending(true); // Mark submit as pending
        } else {
            await submitForm(); // Directly submit if mantra does not exist
        }
    };

    const submitForm = async () => {
        const formData = new FormData();
        formData.append('month', selectedMonth);
        formData.append('photo', photo);
        formData.append('textContent', fileContent);

        try {
            const response = await axios.post('http://localhost:5000/api/mantra', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessMsg(`Mantra for the ${selectedMonth} month updated successfully`);
            setPhoto(null);
            setTextFile(null);

            // Clear the input fields using refs
            if (photoInputRef.current) photoInputRef.current.value = '';
            if (textInputRef.current) textInputRef.current.value = '';

        } catch (error) {
            console.error('Error:', error);
            setFileError('An error occurred while uploading the files.');
        }
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        if (submitPending) {
            submitForm(); // Proceed with form submission
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSubmitPending(false); // Reset the pending state
    };

    // console.log(photo)

    return (
        <div className={`${styles.container} md:ml-10`}>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleCancel}
                onConfirm={handleConfirm}
            />

            <form className={styles.formdata} onSubmit={handleSubmit}>

                {successMsg && (
                    <div className={styles.successMsgContainer}>
                        <p className={styles.sucsessMsgIcon}><FaCircleCheck className={styles.checkIcon} />{successMsg}</p>
                        <Tippy content="Close" className='mr-2'>
                            <p><AiOutlineClose className={styles.successCloseIcon} onClick={handleCloseMessage} /></p>
                        </Tippy>
                    </div>
                )}

                {photoTextErr && (
                    <div className={styles.errMsgContainer}>
                        <p className={styles.errMsgIcon}><BiSolidError className={styles.errIcon} /> {photoTextErr}</p>
                        <Tippy content="Close" className='ml-3'>
                            <p><AiOutlineClose className={styles.errCloseIcon} onClick={handleCloseMessage} /></p>
                        </Tippy>
                    </div>
                )}

                <div className={styles.uploadSection}>
                    <label className={styles.label}>Change Photo:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className={styles.fileInput}
                        ref={photoInputRef}  // Attach ref to photo input
                    />
                    <span>{fileError && <p style={{ fontSize: '12px', color: '#FF0101', marginTop: '5px' }}>{fileError}</p>}</span>
                </div>

                <div className={styles.textandSubmitContainer}>

                    <div className={styles.uploadSection}>
                        <label className={styles.label}>Change Text:</label>
                        <input
                            type="file"
                            accept=".txt"
                            onChange={handleTextFileChange}
                            className={styles.fileInput}
                            ref={textInputRef}  // Attach ref to text input
                        />
                        <span>{textFile && <p style={{ fontSize: '12px', color: 'green', marginTop: '5px' }}>12 texts selected, file 2024</p>}</span>
                    </div>


                </div>
                <div className="mt-0">
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </div>

            </form>

            <div className={styles.info}>
                <p>Change on: Month ending</p>
                <p className="mt-2">Last Modified: {modifiedDate}</p>
            </div>

        </div>
    );
};

export default FileUploadComponent;
