import styles from "./Visibility.module.css"
import { Link } from "react-router-dom";
import React from "react";

const Visibilty = () => {
    return (
        <div className={styles.bgContainer}>
            <div className={` grid grid-cols-1 md:grid-cols-2 ${styles.mainContainer}`}>

                <div className={styles.imageConatiner}>
                    <img className={styles.toplinebarsvg} src="/Images/work-with-us-2/1-line.svg" alt="" />

                    <img className={styles.image} src="/Images/work-with-us-2/v-1.png" alt="" />



                    <img className={styles.image2} src="/Images/work-with-us-2/v-2.png" alt="" />
                    <img className={styles.image} src="/Images/work-with-us-2/v-3.png" alt="" />

                    <img className={styles.bottomlinebarsvg} src="/Images/work-with-us-2/3-line.svg" alt="" />


                </div>

                <div className={styles.texContainer}>
                    <h1 className={styles.heading}>Gain Greater Visibility</h1>
                    <p className={styles.paragraph}>Partner with the Scottish Hindu Foundation to increase your visibility within the community. Showcase your support for cultural diversity and reach a wider audience through our events and programs. Let's work together to create a lasting impact and build strong community connections. </p>

                    <Link to="/workwithus"><button className={styles.joinBtn}>Join Now</button></Link>


                </div>

            </div>
        </div>
    )
}

export default Visibilty;