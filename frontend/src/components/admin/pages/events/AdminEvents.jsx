import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./AdminEvents.module.css";
import AdminHeader from "../../header/AdminHeader";
import Sidebar from "../../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Events from "./Events";
import EventUpload from "./EventUpload";
import EventRegistration from "./EventRegistration";
import EventRecords from "./EventRecords";

const AdminEvents = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [heading, setHeading] = useState("Events");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = (e) => {
        setIsSidebarOpen(false);
        let navName = e.target.textContent;
        setHeading(navName);
    };

    return (
        <div className={styles.sidebarAndRightbarContainer}>
            <div className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.showSidebar : ""}`}>
                {isSidebarOpen && (
                    <AiOutlineClose className={styles.closeIcon} onClick={toggleSidebar} />
                )}
                <Sidebar onNavItemClick={closeSidebar} navName={heading} className={styles.sidebarmain} />
            </div>
            <div className={styles.rightBar}>
                <div className={styles.logoNavbarContainer}>
                    <img src="/Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>
                <AdminHeader navName={heading} />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Events />} />
                        <Route path="upload" element={<EventUpload />} />
                        <Route path="eventregistration" element={<EventRegistration />} />
                        <Route path="eventrecord" element={<EventRecords />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminEvents;
