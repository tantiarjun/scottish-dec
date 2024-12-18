import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const [activeDropdownItem, setActiveDropdownItem] = useState("");
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setActiveItem(path.includes("/admin") ? "/pages" : path);
        if (path.includes("/admin")) {
            setActiveDropdownItem(path);
        } else {
            setActiveDropdownItem("");
        }
    }, [location]);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
        setActiveItem("/pages");
    };

    const handleItemClick = (path) => {
        setActiveItem(path);
        setIsDropdownOpen(false); // Close dropdown when a page is selected
        setActiveDropdownItem(""); // Reset dropdown item
    };

    const handleDropdownItemClick = (path) => {
        setActiveDropdownItem(path);
        setActiveItem("/pages");
    };

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.imagetextContainer}>
                <div className={styles.adminImage}>
                    <img src="./Images/admin/Picture.svg" alt="" className={styles.bgImage} />
                    <img src="./Images/admin/Ellipse 1908.png" alt="" className={styles.mainImage} />
                </div>
                <h1 className={styles.admintext}>Admin</h1>
            </div>

            <div className={styles.allNavItem}>
                <Link to="/dashboard">
                    <div className={`${styles.sidebarItemContainer} ${activeItem === '/dashboard' ? styles.active : ''}`} onClick={() => handleItemClick('/dashboard')}>
                        <div className={styles.dashItem}>
                            <img src="./Images/admin/dash-Icon.svg" alt="" className={styles.dashIcon} />
                            <h1 className={styles.dashboardtext}>Dashboard</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/mantra-of-the-month">
                    <div className={`${styles.sidebarItemContainer} ${activeItem === '/mantra-of-the-month' ? styles.active : ''}`} onClick={() => handleItemClick('/mantra-of-the-month')}>
                        <div className={styles.dashItem}>
                            <img src="./Images/admin/mantra-icon.svg" alt="" className={styles.dashIcon} />
                            <h1 className={styles.dashboardtext}>Mantra of the month</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/report">
                    <div className={`${styles.sidebarItemContainer} ${activeItem === '/report' ? styles.active : ''}`} onClick={() => handleItemClick('/report')}>
                        <div className={styles.dashItem}>
                            <img src="./Images/admin/report-icon.svg" alt="" className={styles.dashIcon} />
                            <h1 className={styles.dashboardtext}>Report</h1>
                        </div>
                    </div>
                </Link>

                <div className={`${styles.pageItem} ${activeItem === '/pages' ? styles.active : ''}`}>
                    <div className={styles.iconPageContainer} onClick={handleDropdownToggle}>
                        <img src="./Images/admin/Pages.svg" alt="" className={styles.dashIcon} />
                        <h1 className={styles.dashboardtext}>Pages</h1>
                    </div>
                    <div onClick={handleDropdownToggle} className={`${styles.arrowIcon} ${isDropdownOpen ? styles.open : ''}`}>
                        {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
                    </div>
                </div>

                <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
                    {/* <Link to="/admin-pages-home">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-pages-home' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-pages-home')}>
                            <h1 className={styles.dashboardtext}>Home</h1>
                        </div>
                    </Link>
                    <Link to="/admin-about-us">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-about-us' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-about-us')}>
                            <h1 className={styles.dashboardtext}>About us</h1>
                        </div>
                    </Link> */}
                    <Link to="/admin-gallery">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-gallery' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-gallery')}>
                            <h1 className={styles.dashboardtext}>Gallery</h1>
                        </div>
                    </Link>
                    <Link to="/admin-events">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-events' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-events')}>
                            <h1 className={styles.dashboardtext}>Events</h1>
                        </div>
                    </Link>
                    <Link to="/admin-donation">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-donation' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-donation')}>
                            <h1 className={styles.dashboardtext}>Donation</h1>
                        </div>
                    </Link>
                    {/* <Link to="/admin-contact-us">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-contact-us' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-contact-us')}>
                            <h1 className={styles.dashboardtext}>Contact us</h1>
                        </div>
                    </Link>
                    <Link to="/admin-work-with-us">
                        <div className={`${styles.dropdownItem} ${activeDropdownItem === '/admin-work-with-us' ? styles.pageactive : ''}`} onClick={() => handleDropdownItemClick('/admin-work-with-us')}>
                            <h1 className={styles.dashboardtext}>Work with us</h1>
                        </div>
                    </Link> */}
                </div>

                <Link to="/help">
                    <div className={`${styles.sidebarItemContainer} ${activeItem === '/help' ? styles.active : ''}`} onClick={() => handleItemClick('/help')}>
                        <div className={styles.dashItem}>
                            <img src="./Images/admin/help.svg" alt="" className={styles.dashIcon} />
                            <h1 className={styles.dashboardtext}>Help</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/logout">
                    <div className={`${styles.sidebarItemContainer} ${activeItem === '/logout' ? styles.active : ''}`} onClick={() => handleItemClick('/logout')}>
                        <div className={styles.dashItem}>
                            <img src="./Images/admin/logout.svg" alt="" className={styles.dashIcon} />
                            <h1 className={styles.dashboardtext}>Log out</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
