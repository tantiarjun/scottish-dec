import React from 'react';

const CardPaymentPopup = ({ onClose, onSubmit }) => {
    const handleSubmit = () => {

        onSubmit();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-xl sm:text-2xl text-shfOrange font-montserrat font-medium mb-6 sm:mb-10">
                    Enter Card Details
                </h1>

                <div className="w-full font-inter flex flex-col space-y-4 sm:space-y-6 text-base">
                    <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-4">
                        <div className="flex flex-col w-full md:w-2/3 mb-4 md:mb-0">
                            <label htmlFor="name" className="text-base sm:text-lg">Name</label>
                            <input
                                id="name"
                                className="border py-2 px-3 text-sm sm:text-base font-medium mt-2 rounded-sm"
                                type="text"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label htmlFor="expirationdate" className="text-base sm:text-lg">Expiration Date</label>
                            <input
                                id="expirationdate"
                                className="border py-2 px-3 text-sm sm:text-base font-medium mt-2 rounded-sm"
                                type="text"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-4">
                        <div className="flex flex-col w-full md:w-2/3 mb-4 md:mb-0">
                            <label htmlFor="cardnumber" className="text-base sm:text-lg">Card Number</label>
                            <input
                                id="cardnumber"
                                className="border py-2 px-3 text-sm sm:text-base font-medium mt-2 rounded-sm"
                                type="text"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label htmlFor="cvv" className="text-base sm:text-lg">CVV</label>
                            <input
                                id="cvv"
                                className="border py-2 px-3 text-sm sm:text-base font-medium mt-2 rounded-sm"
                                type="text"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 mt-6 sm:mt-8">
                        <button
                            className="text-shfOrange bg-white border hover:bg-gray-200 border-shfOrange rounded-xl px-8 sm:px-16 py-3 text-sm sm:text-lg font-medium"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-shfOrange text-white hover:bg-shfPurple rounded-xl px-8 sm:px-16 py-3 text-sm sm:text-lg font-medium"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPaymentPopup;
