import React, { useState } from "react";
import styles from "./AdminReport.module.css";
import AdminHeader from "../header/AdminHeader";
import Sidebar from "../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Reports from "./Reports";


const AdminReport = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [heading, setheading] = useState("Report");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = (e) => {
        setIsSidebarOpen(false);
        let navName = (e.target.textContent);
        setheading(navName);
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
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={heading} />
                <Reports />
            </div>
        </div>
    );
};

export default AdminReport;
