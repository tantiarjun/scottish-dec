import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import CompanyAndCrown from "./CompanyAndCrown";
import PlantingSeeds from "./planting-seeds/PlantingSeeds";
import FutureBlossom from "./FutureBlossom";

const JourneySoFar = () => {
    return <>
        <Header />
        <Herosection
            imageUrl="/Images/journey-so-far/journey-so-far-banner.jpg"
            heading="Journey So Far"
            description="Home / Journey So Far"
        />
        <CompanyAndCrown />
        <PlantingSeeds />
        <FutureBlossom />

        <Footer />
    </>

}

export default JourneySoFar; 
