import React, { useState, useEffect } from 'react';
import { FaThLarge, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './ShopSidebar.css';

const ShopSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsListOpen(false);
    };

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    };

    const handleItemClick = (itemIndex) => {
        setActiveItem(itemIndex);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.sidebar') && isListOpen) {
                setIsListOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isListOpen]);

    return (
        <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
            <div className={`hamburger-icon ${isMobile ? 'mobile' : ''}`} onClick={toggleSidebar}>
                <FaBars />
            </div>

            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="close-icon" onClick={toggleSidebar}>
                        <FaTimes />
                    </div>

                    <div className="icon-wrapper">
                        <div className="grid-icon" onClick={toggleList}>
                            <FaThLarge />
                        </div>
                        <div className="cart-icon">
                            <FaShoppingCart />
                        </div>
                    </div>

                    {isListOpen && (
                        <div className="dropdown-list">
                            <ul>
                                {['Durga Puja', 'Janmashtami', 'Lohri', 'International Yoga Day', 'International Dance Day'].map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            className={`dropdown-item ${activeItem === index ? 'active' : ''}`}
                                            onClick={() => handleItemClick(index)}
                                        >
                                            <span className="item-icon">››</span>
                                            <span className="item-name">{item}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShopSidebar;