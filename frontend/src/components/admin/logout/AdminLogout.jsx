import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./AdminLogout.module.css";
import AdminHeader from "../header/AdminHeader";
import Sidebar from "../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logout from "./Logout";
import Out from "./Out";

const AdminLogout = () => {

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
                <Sidebar navName={"Logout"} className={styles.sidebarmain} />
            </div>

            <div className={styles.rightBar}>

                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={"Log out"} />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Logout />} />
                        <Route path="out" element={<Out />} />

                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default AdminLogout;
