import { useRef } from "react";
import styles from "./Form.module.css";
import axios from "axios";
import swal from "sweetalert2";
import React from 'react';

const Form = () => {


    const nameEl = useRef();
    const emailEl = useRef();
    const phoneEl = useRef();
    const genderEl = useRef();
    const addressEl = useRef();

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);

    const showAlert = (title, text, icon) => {
        swal.fire({
            title,
            text,
            icon,
            didOpen: () => {
                const confirmButton = document.querySelector('.swal2-confirm');
                if (confirmButton) {
                    confirmButton.style.backgroundColor = 'rgba(244, 145, 31, 1)';
                    confirmButton.style.color = '#fff';
                    confirmButton.style.borderRadius = '5px';
                    confirmButton.style.boxShadow = 'none';
                }
            }
        });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        const name = nameEl.current.value;
        const email = emailEl.current.value;
        const phone = phoneEl.current.value;
        const gender = genderEl.current.value;
        const address = addressEl.current.value;

        if (!name || !validateName(name)) {
            showAlert("Error", "Please enter a valid name (letters and spaces only).", "info");
            return;
        }

        if (!email || !validateEmail(email)) {
            showAlert("Error", "Please enter a valid email address in the format 'example@domain.com'.", "info");
            return;
        }

        if (!phone || !validatePhone(phone)) {
            showAlert("Error", "Please enter a valid phone number.", "info");
            return;
        }

        if (!address) {
            showAlert("Error", "Please enter your valid address.", "info");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/registrationform`, { name, email, phone, gender, address });

            console.log(response.data.message); // Log the success message from backend
            showAlert("Thank you for Registration!", "Congratulations, you are now a member of the Scottish Hindu Foundation.", "success");

            // Clear form fields after successful registration
            nameEl.current.value = "";
            emailEl.current.value = "";
            phoneEl.current.value = "";
            addressEl.current.value = "";

        } catch (err) {
            if (err.response && err.response.status === 400 && err.response.data.message === "Email already exists") {
                showAlert("Error", "Email already exists. Please use a different email address.", "info");
            } else {
                console.log(err);
            }
        }
    };

    return (
        <>
            <div className={styles.registerSection}>
                <h1 className={styles.heading}>Register With Us</h1>
                <p className={styles.para}>Submit the form to become a member of the Scottish Hindu Foundation</p>
            </div>

            <form className={styles.formContainer} onSubmit={handleRegistration}>
                <div className={styles.innerFormContainer}>

                    <div className={styles.nameInputContainer}>
                        <div className={`mt-7 ${styles.nameContainer}`}>
                            <img className={styles.nameLogo} src="/Images/contact-us/name.svg" alt="icon" />
                            <label htmlFor="name" className={styles.fieldName}>Name</label>
                        </div>
                        <input ref={nameEl} type="text" id="name" className={styles.nameInput} />
                    </div>

                    <div className={styles.nameInputContainer}>
                        <div className={`mt-7 ${styles.nameContainer}`}>
                            <img className={styles.emailLogo} src="/Images/contact-us/email.svg" alt="icon" />
                            <label htmlFor="email" className={styles.fieldName}>Email Address</label>
                        </div>
                        <input ref={emailEl} type="text" id="email" className={styles.nameInput} />
                    </div>

                    <div className={styles.nameInputContainer}>
                        <div className={`mt-7 ${styles.nameContainer}`}>
                            <img className={styles.nameLogo} src="/Images/contact-us/phone.svg" alt="icon" />
                            <label htmlFor="phone" className={styles.fieldName}>Phone number</label>
                        </div>
                        <input ref={phoneEl} type="text" id="phone" className={styles.nameInput} />
                    </div>

                    <div className={styles.nameInputContainer}>
                        <div className={`mt-7 ${styles.nameContainer}`}>
                            <img className={styles.nameLogo} src="/Images/work-with-us/gender.svg" alt="icon" />
                            <label htmlFor="gender" className={styles.fieldName}>Gender</label>
                        </div>
                        <select ref={genderEl} name="gender" id="gender" className={styles.nameInput}>
                            <option value="" disabled selected hidden>
                                Select
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.nameInputContainer}>
                        <div className={`mt-7 ${styles.nameContainer}`}>
                            <img className={styles.nameLogo} src="/Images/work-with-us/address-iocn.svg" alt="icon" />
                            <label htmlFor="address" className={styles.fieldName}>Address</label>
                        </div>
                        <textarea ref={addressEl} name="address" id="address" cols="10" rows="5" className={styles.nameInput}></textarea>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.submitBtn} type="submit">Become SHF Member</button>
                    </div>

                </div>
            </form>
        </>
    );
};

export default Form;
