import React from "react";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Footer from "../footer/Footer";
import ReportForm from "./ReportForm";
const ReportAnIssue = () => {
    return (
        <>

            <Header />
            <Herosection
                imageUrl="/Images/report-an-issue/banner-img.jpg"
                heading="Report An Issue"
                description="Home / Report an issue"
            />

            < ReportForm />
            <Footer />
        </>
    )
}

export default ReportAnIssue;