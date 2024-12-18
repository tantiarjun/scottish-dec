import styles from "./Card.module.css"
import React from "react";
const Card = ({ logo, title, para }) => {
    return (

        <div className={styles.cardcontainer}>
            <div className={styles.cardname}>
                <img className={styles.cardlogo} src={logo} alt="" />
                <p className={styles.cardheading}>{title}</p>
            </div>
            <p className={styles.cardpara}>{para}</p>
        </div>
    )
}

export default Card;