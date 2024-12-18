import styles from "./Reports.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserVisitChart from "./user-Visit-Chart/UserVisitChart";
import DonationChart from "./donationChart/DonationChart ";
import RevenueChart from "./revenueChart/RevenueChart ";

const Reports = () => {
    return (

        <div className={styles.dashboardContainer}>

            <div className={`${styles.galleryRevenueContainer}`}>

                <div className={`  ${styles.galleryContainer} `}>

                    <div className={styles.report_page_last_7days_container}>

                        <select name="" id="" className={styles.daysButton}>
                            <option value="Last 7 days" selected>Last 7 days</option>
                            <option value="Last Month" >Last Month</option>
                            <option value="Last 6 Month">Last 6 Month</option>
                        </select>

                    </div>

                    <div className={`grid sm:grid-cols-2 md:grid-cols-1${styles.all_report_card_container}`}>

                        <div className="grid grid-cols-2">
                            <div className={styles.revenue_card_container}>
                                <p> Total Revenue</p>
                                <h1> Rs 52.6K</h1>
                            </div>

                            <div className={styles.revenue_card_container}>
                                <p> Gross Profit</p>
                                <h1>Rs 32K</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className={styles.revenue_card_container}>
                                <p> Total Loss</p>
                                <h1> Rs 52.6K</h1>
                            </div>

                            <div className={styles.revenue_card_container}>
                                <p> Today Revenue</p>
                                <h1>Rs 52.6K</h1>
                            </div>

                        </div>



                    </div>

                </div>



            </div>



            <div className={`grid grid-cols-1 md:grid-cols-2 ${styles.galleryRevenueContainer}`}>

                <div className={`  ${styles.galleryContainer} `}>
                    {/* <DonationChart /> */}
                </div>

                <div className={styles.revenueContainer}>
                    <RevenueChart />
                </div>

            </div>



            <div className={styles.userVisitSection}>

                <UserVisitChart />

            </div>


        </div>
    )
}

export default Reports;