import styles from "./AdminHeader.module.css"
import { MdOutlineArrowRight } from "react-icons/md";

const AdminHeader = ({ navName }) => {
    return (
        <div className=" md:mr-3 ">
            <div className={styles.mainContainer}>

                <div className={styles.settingDash}>

                    <div className={styles.settingContainer}>
                        <img src="./Images/admin/header/android-expand.svg" alt="" className={styles.svg} />
                        <img src="./Images/admin/header/Group.svg" alt="" className={styles.svg} />
                        <img src="./Images/admin/header/setting.svg" alt="" className={styles.svg} />
                    </div>

                    <div className={styles.searchNotificationContainer}>
                        <img src="./Images/admin/header/search.svg" alt="" className={styles.svg} />
                        <img src="./Images/admin/header/Notification.svg" alt="" className={styles.svg} />
                        <img src="./Images/admin/header/Group 1171275206.png" alt="" className={styles.svg} />

                    </div>


                </div>


                <div className={styles.searchLayout}>

                    <h1 className={styles.dashboardtext}>{navName}</h1>

                    <div className={styles.layout}>
                        <p className={styles.layoutname}>App</p>
                        <MdOutlineArrowRight />
                        <p className={styles.layoutname}>Layout</p>
                        <MdOutlineArrowRight />
                        <p className={styles.layoutname}>Grid Layout</p>
                    </div>

                </div>


            </div>
        </div>
    )
};

export default AdminHeader;