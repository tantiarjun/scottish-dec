import React, { useState } from "react";
import styles from "./AdminGallery.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Gallery from "./Gallery";
import Sidebar from "../../sidebar/Sidebar";
import AdminHeader from "../../header/AdminHeader";



const AdminGallery = () => {
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
                <Sidebar navName={"Pages-Gallery"} />
            </div>

            <div className={styles.rightBar}>

                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName={"Pages-Gallery"} />
                <Gallery />

            </div>
        </div>
    );
};

export default AdminGallery;


