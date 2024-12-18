import styles from "./Dashboard.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import RevenueChart from "./revenueChart/RevenueChart";
import MantraOfTheMonthDashboard from "./mantra-of-the-month/MantraOfTheMonthDashboard";



const Dashboard = () => {

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the current month index (0-11)
    let currentMonthIndex = new Date().getMonth();

    // Get the current month name
    let currentMonthName = monthNames[currentMonthIndex];


    return (


        <div className={styles.dashboardContainer}>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${styles.galleryRevenueContainer}`}>

                <div className={`  ${styles.galleryContainer} `}>

                    <div className={styles.galleryEditContainer}>
                        <p className={styles.textGallery}>Gallery</p>
                        <Link to="/admin-gallery">
                            <button className={styles.editButton}>Edit</button>
                        </Link>
                    </div>

                    <div className={styles.imageContainer}>

                        <img src="./Images/admin/dashboard/gallery/admin-g-1 (1).png" alt="" className={styles.image} />
                        <img src="./Images/admin/dashboard/gallery/admin-g-1 (2).png" alt="" className={styles.image} />
                        <img src="./Images/admin/dashboard/gallery/admin-g-1 (3).png" alt="" className={styles.image} />

                    </div>

                </div>

                <div className={styles.revenueContainer}>

                    {/* <div className={styles.galleryEditContainer}>
                        <p className={styles.textGallery}>Revenue</p>
                        
                        <select name="" id="" className={styles.daysButton}>
                            <option value="Last 7 days" defaultValue>Last 7 days</option>
                            <option value="Last Month">Last Month</option>
                            <option value="Last 6 Month">Last 6 Month</option>
                        </select>
                    </div>

                    <div className={styles.pieChatContainer}>
                        <img src="./Images/admin/dashboard/pie-chart/Group 6812.jpg" alt="" className={styles.pieImage} />

                        <div className={styles.differentIncomeSection}>

                            <div className={styles.colortextContainer}>
                                <div className={styles.incomeSymbol}></div>
                                <p className={styles.revenueName}>Total Income, 50%</p>
                            </div>

                            <div className={styles.colortextContainer}>
                                <div className={styles.expenseSymbol}></div>
                                <p className={styles.revenueName}>Total Expenses, 25%</p>
                            </div>

                            <div className={styles.colortextContainer}>
                                <div className={styles.deductionSymbol}></div>
                                <p className={styles.revenueName}>Total Deductions, 25%</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.reloadButtonContainer}>
                        <button className={styles.reloadButton}>Reload <AiOutlineReload className="ml-3" /></button>
                    </div> */}

                    {/* <RevenueChart /> */}


                </div>

            </div>



            <div className={`grid grid-cols-1 md:grid-cols-2 ${styles.galleryRevenueContainer}`}>

                <div className={`  ${styles.galleryContainer} `}>

                    <div className={styles.galleryEditContainer}>
                        <p className={styles.textGallery}>Donations</p>

                        <div className={styles.revenueDonationsContainer}>
                            <div className={styles.pointRevenue}>
                                <p className={styles.RevenuePoint}></p>
                                <p className={styles.Revenuetext}>Revenue</p>
                            </div>

                            <div className={styles.pointRevenue}>
                                <p className={styles.donationPoint}></p>
                                <p className={styles.donationtext}>Donations</p>
                            </div>


                            {/* <button className={styles.daysButton}>Last 7 days <IoMdArrowDropdown /></button> */}
                            <select name="" id="" className={styles.daysButton}>
                                <option value="Last 7 days" defaultValue>Last 7 days</option>
                                <option value="Last Month">Last Month</option>
                                <option value="Last 6 Month">Last 6 Month</option>
                            </select>
                        </div>

                    </div>

                    <div className={styles.imageContainer}>

                        <img src="./Images/admin/graph.jpg" alt="" className={styles.graphimage} />


                    </div>

                </div>

                <div className={styles.revenueContainer}>

                    <div className={styles.galleryEditContainer}>
                        <p className={styles.textGallery}>Events</p>
                        {/* <button className={styles.daysButton}>Last 7 days <IoMdArrowDropdown /></button> */}
                        <select name="" id="" className={styles.daysButton}>
                            <option value="Last 7 days" defaultValue>Last 7 days</option>
                            <option value="Last Month">Last Month</option>
                            <option value="Last 6 Month">Last 6 Month</option>
                        </select>
                    </div>

                    <div className="all-event-card-container mt-3">

                        <div className={styles.eventcardContainer}>
                            <img src="./Images/admin/dashboard/events/event-img-1.jpg" alt="" className={styles.eventimage} />
                            <div className="ml-5">
                                <h1 className={styles.eventheading}>International Yoga Day</h1>
                                <p className={styles.eventdate}>Glasgow  | 02 December 2022</p>
                            </div>
                        </div>

                        <div className={styles.eventcardContainer}>
                            <img src="./Images/admin/dashboard/events/janamstami.jpg" alt="" className={styles.eventimage} />
                            <div className="ml-5">
                                <h1 className={styles.eventheading}>Sri Krishna Janmashtami</h1>
                                <p className={styles.eventdate}>Glasgow  | 02 December 2022</p>
                            </div>
                        </div>

                        <div className={styles.eventcardContainer}>
                            <img src="./Images/admin/dashboard/events/radharani.jpg" alt="" className={styles.eventimage} />
                            <div className="ml-5">
                                <h1 className={styles.eventheading}>Radherani mahotsav</h1>
                                <p className={styles.eventdate}>Glasgow  | 02 December 2022</p>
                            </div>
                        </div>

                        <div className={styles.eventcardContainer}>
                            <img src="./Images/admin/dashboard/events/mahayagan.jpg" alt="" className={styles.eventimage} />
                            <div className="ml-5">
                                <h1 className={styles.eventheading}>Rajashree Mahayagna</h1>
                                <p className={styles.eventdate}>Glasgow  | 02 December 2022</p>
                            </div>
                        </div>

                    </div>



                    <div className={styles.reloadButtonContainer}>
                        <button className={` mt-4 ${styles.reloadButton}`}> Edit </button>
                    </div>


                </div>

            </div>



            {/* <div className={styles.mantraSection}>

                <div className={styles.galleryEditContainer}>

                    <div className="flex">
                        <p className={`mr-5 ${styles.textevents}`}>Events</p>

                        <select name="" id="" className={styles.daysButton}>
                            <option value="January" >January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    <Link to="/mantra-of-the-month">
                        <button className={styles.editButton}>Edit</button>
                    </Link>

                </div>

                <div className={styles.imageAndMantra}>
                    <img src="./Images/admin/dashboard/mantra/mantra.jpg" alt="" />
                    <p className="ml-5 text-center mt-5 md:mt-0">“You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.” ― Bhagavad Gita</p>
                </div>


            </div> */}

            <MantraOfTheMonthDashboard />


        </div>
    )
}

export default Dashboard;