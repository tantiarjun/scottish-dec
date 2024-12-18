import React from "react";
import ImageGrid from "./ImageGrid ";
import Button from '@mui/material/Button';

const PlantingSeeds = () => {
    return (

        <>
            <div className="xl:mx-52 m-8 flex flex-col-reverse md:flex-row">

                <div className="text-container md:w-3/5 ">

                    <div className="mb-6">
                        <div className="flex items-center">
                            <p className="font-montserrat text-base font-semibold text-[rgba(37,42,52,1)]">Through The Decades</p>
                            <hr className="w-20 ml-3  mt-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }} />
                        </div>
                        <h1 className="font-playfair text-3xl font-bold text-[rgba(37,42,52,1)]">The Planting Of Seeds</h1>
                    </div>

                    <div className="planting-seeds-section font-nunito text-xs lg:text-sm xl:text-sm font-normal">

                        <p>
                            The period between the 1920’s and 1990’s witnessed

                            a significant development in the presence of Hindus in

                            Scotland. The immigration of Indians, particularly from

                            Punjab and Gujarat, brought a diverse range of Hindu

                            communities to the country. Initially, these immigrants faced

                            challenges in maintaining their religious practices and

                            integrating into Scottish society. However, determined to

                            preserve their traditions, they established community

                            organizations and places of worship.
                        </p>

                        <p>
                            By the 1950’s, Hindu community associations began to emerge, providing a sense of belonging and support. The 1960’s and 1970’s saw a rise in professionals and students migrating to Scotland, further expanding the Hindu community. Temples and cultural associations were established, serving as hubs for religious activities, social gatherings, and language classes
                        </p>

                        <p>
                            In the 1980’s, the Hindu community began actively

                            participating in interfaith dialogues and engaging in social

                            initiatives, fostering stronger connections with the wider

                            Scottish society. Hindu festivals like Diwali and Navaratri

                            became widely celebrated, gaining recognition and

                            appreciation throughout Scotland.
                        </p>

                        <p>
                            By the 1990’s, Hindus had established a vibrant presence in

                            Scotland, contributing to various fields such as business

                            academia, and the arts. The Hindu community’s growth and

                            integration during this period laid a solid foundation for the

                            diverse and thriving Hindu diaspora that exists in Scotland

                            Today.
                        </p>


                        <button className="bg-[#F4911F] text-[#fff] px-8 py-2 rounded-md mt-5 text-sm font-inter">Explore More</button>


                    </div>

                </div>


                <ImageGrid />

            </div>

            <img src="/Images/journey-so-far/location.svg" alt="" className="w-44 ml-28 md:-translate-y-20 hidden xl:block" />

            <div className="xl:mx-52 m-8  md:flex md:justify-center xl:-translate-y-36">
                <div className="mb-10 md:mb-0 md:mr-10">
                    <h1 className="font-montserrat text-1xl font-bold text-center mb-2 md:text-start md:ml-2">Glasgow</h1>
                    <p className="md:w-80 text-xs md:text-sm font-nunito font-normal bg-[rgba(254,242,228,0.41)] , text-[rgba(38,50,56,1)] p-5">A small Community has grown, developed and integrated itself into the fabric of Glasgow. Starting worship and weekly meet ups in people home a journey which culinated in the establishment of a Hindu Mandir at LaBelle Place.
                    </p>
                </div>

                <div>
                    <h1 className="font-montserrat text-1xl font-bold text-center mb-2 md:text-start md:ml-2">Lesmahagow</h1>
                    <p className="md:w-96  text-xs md:text-sm font-nunito font-normal bg-[rgba(254,242,228,0.41)] , text-[rgba(38,50,56,1)] p-5">ISKCON Scotland is the Scottish Branch ISCKON (International Society for Krishna Consciousness) also Known as the Hare Krishna Movement. ISKCON has established in the west in 1966. It has its roots in India from a very respected ancient spiritual Vaishnava Tradition also known as Bhakti Yoga.
                    </p>
                </div>
            </div>

        </>
    )
}

export default PlantingSeeds;