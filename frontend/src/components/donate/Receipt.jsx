import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const DonationReceipt = () => {
    const [sendEmail, setSendEmail] = useState(false);
    const [downloadReceipt, setDownloadReceipt] = useState(false);
    const receiptRef = useRef(null);

    const handleDownload = () => {
        if (receiptRef.current) {
            const element = receiptRef.current;
            const opt = {
                margin: 10,
                filename: 'donation_receipt.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(element).save();
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow">
                    <Herosection
                        imageUrl="/Images/Herosection/donation.png"
                        heading="Donate"
                        description="Home/ Donate"
                    />

                    {/* Receipt Section */}
                    <div className="flex-grow container mx-auto px-4 py-8">
                        <h2 className="text-2xl font-bold mb-6 text-left ">Receipt</h2>
                        <div className="w-full max-w-4xl mx-auto">
                            <div ref={receiptRef} className="bg-white shadow-md rounded-md p-4 sm:p-6 md:p-10 border border-black">
                                {/* Header with Logo and Title */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                                    <img
                                        src="/Images/donate/logo1.png"
                                        alt="Scottish Hindu Foundation Logo"
                                        className="w-32 h-16 sm:w-40 sm:h-20 mb-4 sm:mb-0 sm:mr-4"
                                    />
                                    <div className="text-center flex-grow">
                                        <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
                                            Scottish Hindu Foundation
                                        </h1>
                                        <h3 className="text-lg sm:text-xl mt-2">
                                            Donation Receipt
                                        </h3>
                                    </div>
                                </div>

                                {/* Centered Form Content */}
                                <div className="space-y-4 sm:space-y-6 mt-4 text-left w-full sm:w-3/4 mx-auto">
                                    <div className="flex flex-col sm:flex-row">
                                        <span className="w-full sm:w-1/3 pl-0 sm:pl-8 mb-2 sm:mb-0">Date Of Donation</span>
                                        <div className="w-full sm:w-2/3 border-b border-gray-300" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <span className="w-full sm:w-1/3 pl-0 sm:pl-8 mb-2 sm:mb-0">Donor's Name</span>
                                        <div className="w-full sm:w-2/3 border-b border-gray-300" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <span className="w-full sm:w-1/3 pl-0 sm:pl-8 mb-2 sm:mb-0">Email</span>
                                        <div className="w-full sm:w-2/3 border-b border-gray-300" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <span className="w-full sm:w-1/3 pl-0 sm:pl-8 mb-2 sm:mb-0">Amount Donated</span>
                                        <div className="w-full sm:w-2/3 border-b border-gray-300" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <span className="w-full sm:w-1/3 pl-0 sm:pl-8 mb-2 sm:mb-0">Donation Mode</span>
                                        <div className="w-full sm:w-2/3 border-b border-gray-300" />
                                    </div>
                                </div>

                                {/* Appreciation Text and Second Logo */}
                                <div className="text-center text-orange-500 font-semibold mt-10 sm:mt-20 text-xl sm:text-2xl px-4">
                                    We Really Appreciate Your Good Work! May God Bless You
                                </div>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/Images/donate/logo2.png"
                                        alt="Scottish Hindu Foundation Logo"
                                        className="w-24 h-28 sm:w-28 sm:h-32 mt-4"
                                    />
                                </div>
                                <div className="text-center text-xs sm:text-sm font-bold mt-2 px-4">
                                    Unit 3 Morris Park 37 Rosyth Road Glasgow G5 0YE
                                </div>
                            </div>
                        </div>
                        <div className="mt-4  space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={sendEmail}
                                    onChange={(e) => setSendEmail(e.target.checked)}
                                />
                                Send receipt to Email
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={downloadReceipt}
                                    onChange={(e) => {
                                        setDownloadReceipt(e.target.checked);
                                        if (e.target.checked) {
                                            handleDownload();
                                        }
                                    }}
                                />
                                Download receipt
                            </label>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default DonationReceipt;