import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./AdminDonation.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Donation from "./Donation";
import Sidebar from "../../sidebar/Sidebar";
import AdminHeader from "../../header/AdminHeader";
import TransactionRecord from "./TransactionRecord";
import DonationCategory from "./DonationCategory";


const AdminDonation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={styles.sidebarAndRightbarContainer}>

            <div className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.showSidebar : ""}`}>
                {isSidebarOpen && (
                    <AiOutlineClose className={styles.closeIcon} onClick={toggleSidebar} />
                )}
                <Sidebar navName={"Pages-Donation"} />
            </div>

            <div className={styles.rightBar}>

                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={"Pages-Donation"} />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Donation />} />
                        <Route path="transactionrecord" element={<TransactionRecord />} />
                        <Route path="donation" element={<DonationCategory />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminDonation;

