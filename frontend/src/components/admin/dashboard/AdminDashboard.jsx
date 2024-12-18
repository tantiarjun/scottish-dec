import React, { useState } from "react";
import styles from "./AdminDashboard.module.css";
import AdminHeader from "../header/AdminHeader";
import Dashboard from "./Dashboard";
import Sidebar from "../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const AdminDashboard = () => {
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
                <Sidebar navName={"Dashboard"} />
            </div>

            <div className={styles.rightBar}>

                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={"Dashboard"} />
                <Dashboard />
            </div>
        </div>
    );
};

export default AdminDashboard;
