import React, { useState } from "react";
import styles from "./AdminMantraOfTheMonth.module.css";
import AdminHeader from "../header/AdminHeader";
import Sidebar from "../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import MantraOfTheMonth from "./MantraOfTheMonth";


const AdminMantraOfTheMonth = () => {

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
                <Sidebar navName={"Mantra of the month"} className={styles.sidebarmain} />
            </div>

            <div className={styles.rightBar}>

                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={"Mantra of the month"} />
                <MantraOfTheMonth />
            </div>
        </div>
    );
};

export default AdminMantraOfTheMonth;
