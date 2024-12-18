import { Link } from "react-router-dom";
import styles from "./Join.module.css"
import React from 'react';
const Join = () => {
    return (
        <div className={styles.bgContainer}>


            <div className={`grid  grid-cols-1 md:grid-cols-2 mt-10 ${styles.mainContainer}`}>

                <div className={styles.textContainer}>

                    <div className={styles.membertext}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p className={styles.member}>Want To Become A Member?</p>
                            <hr className="md:w-16  w-12 b  ml-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }} />
                        </div>
                        <h1 className={styles.work}>Work With Us</h1>
                    </div>

                    <div>
                        <h1 className={styles.heading} >Come Join our team </h1>
                        <img className={styles.teamDesign} src="/Images/work-with-us/Group 3524.png" alt="" />
                        <p className={styles.paragraph}>Join the Scottish Hindu Foundation and make a difference! We're looking for passionate individuals to help us celebrate and share Hindu culture in Scotland. Be part of a vibrant team and contribute to our community's growth and unity. Your skills and enthusiasm are welcome!</p>
                        <Link to="/workwithus2"><button className={styles.viewBtn}>View</button></Link>
                    </div>

                </div>

                <div className={styles.imageContainer}>
                    <img className={styles.image} src="/Images/work-with-us/Group 3508.png" alt="image" />
                    <img className={styles.topImg} src="/Images/work-with-us/Group 3525.png" alt="image" />

                    <img className={styles.houseImg1} src="/Images/work-with-us/Ellipse 382.png" alt="image" />
                    <img className={styles.houseImg2} src="/Images/work-with-us/Ellipse 383.png" alt="image" />

                    <img className={styles.bottomImg} src="/Images/work-with-us/Group 3523.png" alt="image" />

                </div>


            </div>

        </div>

    )
}

export default Join;