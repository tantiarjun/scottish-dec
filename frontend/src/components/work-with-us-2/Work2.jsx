
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Dailyactivites from "./Dailyactivites";
import Governance from "./Governance";
import Visibilty from "./Visibility";
import React from "react";


const Work2 = () => {
    return <>
        <Header />
        <Herosection
            imageUrl="/Images/work-with-us/work-with-us.jpg"
            heading="Work With Us"
            description="Home / Work with us"
        />
        <Governance />
        <Dailyactivites />
        <Visibilty />
        <Footer />
    </>

}

export default Work2; 
