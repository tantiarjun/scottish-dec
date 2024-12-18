import DailyActivities from "../daily-activities/DailyActivities";
import UploadImageVisibility from "./upload-image/UploadImageVisibility"

const GainGreaterVisibilty = () => {

    return (

        <>
            <h1 style={{ color: "#FA7C0B", marginTop: "120px", marginLeft: "15px", marginBottom: "15px", fontWeight: "600" }}>Gain Greater Visibility</h1>

            <div className="grid md:grid-cols-2">

                <div style={{ display: 'flex', overflowX: 'auto' }}>
                    <div><UploadImageVisibility /></div>
                    <div><UploadImageVisibility /></div>
                    <div><UploadImageVisibility /></div>
                </div>

                <div className="title-description-section">

                    <DailyActivities />
                </div>

            </div>


        </>
    )
}

export default GainGreaterVisibilty; 