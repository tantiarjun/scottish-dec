import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import FeaturedProducts from "./FeaturedProducts";
import ShopSidebar from './ShopSidebar';

const Shop = () => {
    return (
        <div>
            <Header />
            <Herosection
                imageUrl="/Images/Herosection/shop.png"
                heading="Shop"
                description="Home / Shop"
            />
            <ShopSidebar />
            <FeaturedProducts />

            <Footer />
        </div>
    );
};

export default Shop;