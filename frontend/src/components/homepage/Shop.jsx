import React from "react";
import { Link } from "react-router-dom";



const Shop = () => {


    return (
        <div className="flex flex-col md:flex-row mx-4 my-12 lg:mx-36 justify-center items-center mt-20 mb-32">

            <div className="md:w-1/4 relative m-6">
                <img className="w-56 lg:w-full mt-[1px]" src="/Images/homepage/t-shirt.jpg" alt="t-shirt" />
                <img className="absolute -top-5 -left-7 -z-10 w-52 lg:w-[17rem]" src="/Images/homepage/bg-image.png" alt="" />
            </div>


            <div className="md:w-2/4 mt-10 md:mt-0 ml-7 md:ml-0">
                <h1 className="font-montserrat text-sm font-bold text-[#252A34] mb-2">We Have A Shop</h1>
                <h1 className="font-playfair text-3xl font-bold text-[#252A34] mb-3">Shopping Made Easy</h1>
                <p className="font-nunito text-[rgba(37,42,52,0.5)] text-xs lg:text-sm">Discover a range of stylish T-shirts and unique souvenirs that celebrate our spirit. Whether you're looking for a keepsake or a gift, our collection makes shopping effortless and enjoyable.Our collection is carefully curated to offer high-quality, unique items that represent our community and values. Start browsing now and find something special!.</p>
                <Link to="/shop">
                    <button className=" mt-4 px-10 py-2 rounded-md bg-[#F4911F] text-white">
                        Shop Now
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Shop;