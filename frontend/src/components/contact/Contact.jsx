import React from "react";
import Contactus from "./Contactus";
import Header from "../header/Header"
import Herosection from "../herosection/Herosection"
import Footer from "../footer/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="/Images/contact-us/contact-banner.jpg"
                heading="Contact Us"
                description="Home / Contact us"
            />
            <Contactus />
            <Footer />
        </>



    )
}

export default Contact;