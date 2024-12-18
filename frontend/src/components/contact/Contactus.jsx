import { useState, useRef } from "react";
import React from "react";
import Button from "./Button";
import styles from "./Contactus.module.css";
import Map from "./Map";
import Form1 from "./Form1";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const Contactus = () => {
    const templeList = [
        "Hindu Mandir Glasgow", "Aberdeen Hindu Temple", "Edinburgh Hindu Mandir & Cultural Centre",
        "Tayside Hindu Cultural Community Centre", "Mother Earth Hindu Temple",
        "Sri Mangala Vinayagar Hindu Temple &..", "Pashupati Nath Temple", "ISKCON Karuna Bhavan Temple"
    ];

    const [activeItems, setActiveItems] = useState("Hindu Mandir Glasgow");

    // Create a ref for the scroll container
    const scrollContainerRef = useRef(null);

    const handleButton = (item) => setActiveItems(item);

    // Function to scroll the container to the left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200, // Adjust this value to determine how much to scroll
                behavior: 'smooth',
            });
        }
    };

    // Function to scroll the container to the right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200, // Adjust this value to determine how much to scroll
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.ContactUsContainer}>
            <Form1 />

            <h1 className={styles.tepleinscotland}>Temples In Scotland</h1>
            <h1 className={`mb-5 ${styles.ouraddress}`}>Our Address</h1>

            <div className="all-temple-name-container relative">
                <button
                    className="absolute left-6  top-5 z-10"

                    onClick={scrollLeft}
                    style={{ fontSize: "30px", color: "#F4911F" }}
                >
                    <FaCircleChevronLeft />
                </button>

                <div className={`${styles.buttonContainer} overflow-hidden`} ref={scrollContainerRef}>
                    <div className="flex whitespace-nowrap">
                        {templeList.map(item => (
                            <Button
                                key={item}
                                templeName={item}
                                handleButton={() => handleButton(item)}
                                isActive={activeItems === item}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className="absolute right-5 top-5 z-10"
                    onClick={scrollRight}
                    style={{ fontSize: "30px", color: "#F4911F" }}
                >
                    <FaCircleChevronRight />
                </button>
            </div>

            <div className={styles.addresName}>
                <div className="flex">
                    <p className={styles.bar}></p>
                    <p className={styles.templeName}>{activeItems}</p>
                </div>
                <p className={styles.templeAddress}>1 La Belle Pl, Glasgow G3 7LH</p>
                <p className={styles.templeNo}>0141 332 0482</p>
            </div>

            <Map mapName={activeItems} />
        </div>
    );
}

export default Contactus;
