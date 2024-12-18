import styles from "./DailyActivities.module.css";

const DailyActivities = () => {
    return (
        <div className="ml-5">

            <form>

                <div className={styles.titleConatiner}>
                    <label htmlFor="title" className="ml-1">Title</label>
                    <input type="text" id="title" className={`${styles.inputField}`} />
                </div>

                <div className={styles.titleConatiner}>
                    <label htmlFor="title" className="ml-1">Description</label>
                    <textarea id="title" cols="5" rows="5" className={styles.inputField}>

                    </textarea>
                </div>

                <div className={styles.submitBtnContainer}>
                    <button className={styles.submitBtn}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default DailyActivities;