import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Herosection from '../herosection/Herosection';

const InternationalYogaDaySuccess = () => {
    const navigate = useNavigate();

    const addToGoogleCalendar = () => {
        const event = {
            text: 'Your Booking',
            dates: '20240724/20240725',
            details: 'Your booking details here',
            location: 'Booking location',
        };

        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;

        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Herosection
                imageUrl="/Images/Herosection/events.png"
                heading="Events"
                description="Home / Events"
            />

            <main className="flex-grow flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-2xl flex flex-col justify-center items-center">
                    <img src="/Images/success.gif" alt="Success" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mb-4 sm:mb-6" />
                    <img src="/Images/word.png" alt="Success text" className="w-32 sm:w-40 md:w-48 mb-2 sm:mb-4" />
                    <p className="text-black text-center font-semibold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
                        Your booking has been confirmed
                    </p>
                    <button
                        onClick={addToGoogleCalendar}
                        className="bg-orange-500 text-white px-10 sm:px-16 lg:px-20 py-2 sm:py-3 rounded font-semibold text-sm sm:text-lg flex items-center"
                    >
                        📅 Download Calendar
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InternationalYogaDaySuccess;