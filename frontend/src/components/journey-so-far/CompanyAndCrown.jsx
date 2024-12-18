import React from "react";

const CompanyAndCrown = () => {
    return (
        <>
            <div className="xl:mx-52 m-8">

                <div className="my-8">
                    <div className="flex items-center">
                        <p className="font-montserrat text-base font-semibold text-[rgba(37,42,52,1)]">The Journey</p>
                        <hr className="w-20 ml-3  mt-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }} />
                    </div>
                    <h1 className="font-playfair text-3xl font-bold text-[rgba(37,42,52,1)]">Hindus In Scotland </h1>
                </div>

                <div className="mb-5 mt-16 flex  justify-center">
                    <div className="md:ml-16">
                        <h1 className=" text-center  font-bold text-[rgba(244,145,31,1)] font-montserrat text-xl">The Company And The Crown</h1>
                        <p className=" text-center max-w-sm font-nunito text-sm mt-3 text-[rgba(37,42,52,0.5)] "
                        >The Connection between Hindus and Scotland is older than is often appreciated. Two of the earliest records of Scots in India belong to Colonel John Baillie and Dr. Neil Edmonstone.</p>
                    </div>
                </div>


                <div className="flex flex-col mt-20 w-full">

                    <div className="md:flex md:self-start justify-center mb-20 md:mb-0">
                        <img src="/Images/journey-so-far/colonel-jhon.png" alt="image" className="md:w-52 w-full" />
                        <div className="self-center  justify-center md:ml-10 ml-5">
                            <h1 className="font-montserrat font-bold mt-5 md:mt-0 mb-2">Colonel John Baillie (1772-1833)</h1>
                            <p className="max-w-72 text-[rgba(68,68,68,1)] text-sm">Colonel John Baillie, a British soldier, was stationed in India during the same period. He had a keen interest in Indian history, culture, and religion. Baillie’s interactions with Hindus and his travels throughout The Indian subcontinent sparked a fascination with Hinduism.</p>
                        </div>
                    </div>

                    <div className="md:flex md:self-end justify-center">
                        <img src="/Images/journey-so-far/dr. Niel.jpg" alt="image" className="md:w-52 md:order-2 w-full" />
                        <div className="self-center md:order-1 md:mr-10 ml-5 md:ml-0">
                            <h1 className="font-montserrat font-bold mt-8 md:mt-0 mb-2">Dr.Neil Edmonstone (1765-1841)</h1>
                            <p className="max-w-72 text-[rgba(68,68,68,1)] text-sm">Neil Benjamin Edmonstone, a Scottish surgeon, ventured to India in the early 19th century. He served in the Bengal Medical Service and worked extensively in Bengal and Assam.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className=" bg-[#6F58A5] p-8 mb-20 mt-10 rounded-md">
                <div className="md:flex md:items-center xl:mx-52 ">
                    <div className="flex justify-center">
                        <img className="md:w-96 w-56 md:ml-0 " src="/Images/journey-so-far/shf-flag.png" alt="image" />
                    </div>
                    <div className="mt-5 md:mt-0 text-[#FFFFFF] md:ml-16 md:text-center font-nunito text-sm font-normal">
                        <p className="">The Battle of Assaye (1803) saw Scottish regiments, like the 78th Highlanders and 74th Highlanders, clash with the Marathas in India. </p>

                        <p>
                            Led by Major-General Arthur Wellesley (later Duke of Wellington), the Marathas displayed remarkable bravery and resilience, however the Scots won the day to achieve a close victory.
                        </p>

                        <p> The victory is marked by Memorial to the men of the 74th Highlanders in St Giles Cathedral, Edinburgh, erected 1886.
                        </p>
                    </div>

                </div>
            </div>

        </>


    )
}

export default CompanyAndCrown;