import React from 'react';

const EChequePopup = ({ onClose, onSubmit }) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-4 sm:px-6 lg:px-10">
            <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-lg lg:max-w-2xl h-auto max-h-[80vh] relative z-10 overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-medium mb-4 text-shfOrange text-center">E-Cheque</h2>
                <p className="mb-6 text-gray-700 font-normal text-center text-sm sm:text-lg">
                    To pay by electronic cheque, please fill out the fields below:
                </p>

                {/* FORM */}
                <form onSubmit={onSubmit} className="font-inter font-medium flex flex-col justify-center items-center mx-2 lg:mx-16">
                    <div className="mb-4 w-full flex flex-col sm:flex-row justify-between items-center">
                        <label
                            className="block text-gray-700 text-base mb-2 sm:mb-0 sm:mr-2"
                            htmlFor="nameOnAccount"
                        >
                            Name on Account:
                        </label>
                        <input
                            type="text"
                            id="nameOnAccount"
                            className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className="mb-4 w-full flex flex-col sm:flex-row justify-between items-center">
                        <label
                            className="block text-gray-700 text-base mb-2 sm:mb-0 sm:mr-2"
                            htmlFor="nameOfBank"
                        >
                            Name of Bank:
                        </label>
                        <input
                            type="text"
                            id="nameOfBank"
                            className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className="mb-4 w-full flex flex-col sm:flex-row justify-between items-center relative">
                        <label
                            className="block text-gray-700 text-base mb-2 sm:mb-0 sm:mr-2"
                            htmlFor="typeOfAccount"
                        >
                            Type of Account:
                        </label>
                        <select
                            id="typeOfAccount"
                            className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
                            required
                        >
                            <option value="" disabled selected hidden></option>
                            <option value="Savings">Savings</option>
                            <option value="Checking">Checking</option>
                        </select>
                        <svg
                            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    <div className="mb-4 w-full flex flex-col sm:flex-row justify-between items-center">
                        <label
                            className="block text-gray-700 text-base mb-2 sm:mb-0 sm:mr-2"
                            htmlFor="chequeNumber"
                        >
                            Cheque Number:
                        </label>
                        <input
                            type="text"
                            id="chequeNumber"
                            className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                        <div className="mb-4 w-full flex flex-col justify-between items-start sm:items-center">
                            <label
                                className="block text-gray-700 text-base mb-2 sm:mb-0"
                                htmlFor="routingNumber"
                            >
                                Routing Number
                            </label>
                            <input
                                type="text"
                                id="routingNumber"
                                className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder=""
                                required
                            />
                        </div>

                        <div className="mb-4 w-full flex flex-col justify-between items-start sm:items-center">
                            <label
                                className="block text-gray-700 text-base mb-2 sm:mb-0"
                                htmlFor="accountNumber"
                            >
                                Account Number
                            </label>
                            <input
                                type="text"
                                id="accountNumber"
                                className="shadow appearance-none text-sm border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-shfOrange hover:bg-shfPurple text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        >
                            Continue
                        </button>
                    </div>
                </form>

                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EChequePopup;
