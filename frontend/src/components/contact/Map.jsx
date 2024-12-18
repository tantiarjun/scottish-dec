import React from "react";
import styles from "./Map.module.css";

const Map = ({ mapName }) => {

    return (

        <div className={styles.mapContainer}>
            <div className={` ${styles.dNone} ${mapName === "Hindu Mandir Glasgow" && styles.dBlock}
            `}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147421.9784531193!2d-6.64622424375!3d55.826942999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888412e922fd525%3A0xd137151601030b42!2sThe%20Hindu%20Temple%20of%20Scotland!5e0!3m2!1sen!2sin!4v1715772235752!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone}  ${mapName === "Aberdeen Hindu Temple" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.3333222097845!2d-2.18155292349447!3d57.1826409809653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488413ba39f6cb99%3A0x95fbc70d504254fd!2sAberdeen%20Hindu%20Temple!5e0!3m2!1sen!2sin!4v1715863297241!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Edinburgh Hindu Mandir & Cultural Centre" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.772418116061!2d-3.1718659235776827!3d55.970645975191616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b80f03d39825%3A0x5500a9d5f8dd704e!2sEdinburgh%20Hindu%20Mandir%20and%20Cultural%20Centre!5e0!3m2!1sen!2sin!4v1715864068103!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Sri Mangala Vinayagar Hindu Temple &.." && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.7991323629567!2d-4.254731323583598!3d55.883498881917454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488844152264333b%3A0x5c5ce0813fd823e!2sSri%20Mangala%20Vinayagar%20Hindu%20temple%20%26%20Community%20Centre!5e0!3m2!1sen!2sin!4v1715930606861!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={`${styles.dNone} ${mapName === "Pashupati Nath Temple" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636106.2589533387!2d-1.1268568218749897!3d51.4803675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a8d31cd83c6d%3A0xae2c3dee01586c92!2sPashupatinath%20Temple!5e0!3m2!1sen!2sin!4v1715931060630!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={`${styles.dNone} ${mapName === "ISKCON Karuna Bhavan Temple" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144125.92485157834!2d-4.2008946054687515!3d55.637378200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48881191f461a07b%3A0x2e26641b5895f0a9!2sISKCON%20Karuna%20Bhavan%20Temple!5e0!3m2!1sen!2sin!4v1715931496975!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </div>




    )
}

export default Map;