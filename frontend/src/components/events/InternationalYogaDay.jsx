
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Herosection from '../herosection/Herosection';

const InternationalYogaDay = () => {
    const navigate = useNavigate();

    const handleCheckAvailability = () => {
        navigate('/international-yoga-day-booking');
    };

    const handleBookCoverClick = () => {
        navigate('/pdf-flip-book');
    };

    const handleEmailClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@scottishhindufoundation.com', '_blank');
    };

    return (
        <div className="relative">
            <Header />
            <Herosection
                imageUrl="/Images/Herosection/events.png"
                heading="Events"
                description="Home / Events"
            />

            <div className="container-body px-4 py-3 mt-10 md:px-32 md:py-6">
                <h1 className="text-4xl font-bold mb-8 font-playfair">International Yoga Day</h1>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <img
                            src="/Images/events/yoga.png"
                            alt="International Yoga Day"
                            className="w-full h-auto rounded-lg shadow-lg mb-8"
                        />
                        <h2 className="text-2xl font-bold mb-4 font-nunito ">Event Description</h2>
                        <p className="mb-6 text-gray-600">
                            Join us in celebrating International Yoga Day, a global event dedicated to promoting physical, mental,
                            and spiritual well-being. Whether you're a seasoned practitioner or a beginner, this event offers sessions
                            suitable for all levels. Experience the transformative power of yoga through guided sessions, breathing exercises,
                            and meditation. Don't miss this opportunity to connect with like-minded individuals and embrace a healthier lifestyle.
                            Reserve your spot today and be part of a worldwide movement towards wellness and harmony.
                        </p>
                        <div className="mb-6 space-y-1">
                            <p><span className="font-bold w-20 inline-block">Date</span>
                                <span className="font-bold">:  </span>24th April, 2024</p>
                            <p><span className="font-bold w-20 inline-block">Time</span>
                                <span className="font-bold">:  </span>8:40-9:10 A.M.</p>
                            <p><span className="font-bold w-20 inline-block">Location</span>
                                <span className="font-bold">:  </span>Calvert Street, Glasgow</p>
                            <p><span className="font-bold w-20 inline-block">Price</span>
                                <span className="font-bold">:  </span>$50 per person</p>
                        </div>
                        <button
                            onClick={handleCheckAvailability}
                            className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition duration-300"
                        >
                            Check Availability
                        </button>

                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-4 font-nunito">Have A Glimpse</h3>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img
                                    src="/Images/events/bookcover.png"
                                    alt="Scotland's International Yoga Day"
                                    className="w-1/3 mx-auto cursor-pointer"
                                    onClick={handleBookCoverClick}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/Images/events/mail.png"
                                alt="Contact Us"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="bg-white rounded-full p-2 cursor-pointer" onClick={handleEmailClick}>
                                    <img
                                        src="/Images/events/email.png"
                                        alt="Email"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <p className="text-center mt-2 text-sm text-white font-semibold">
                                    Contact Us and get latest news and upcoming events
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default InternationalYogaDay;