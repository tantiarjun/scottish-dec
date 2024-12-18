import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Herosection from '../herosection/Herosection';
import CardPaymentPopup from './CardPaymentPopup';
import PayPalPaymentPopup from './PayPalPaymentPopup';
import EChequePopup from './EChequePopup';

const InternationalYogaDayBooking = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState('1');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [isPersonalInfoConfirmed, setIsPersonalInfoConfirmed] = useState(false);
    const [showCardPayment, setShowCardPayment] = useState(false);
    const [showPayPalPayment, setShowPayPalPayment] = useState(false);
    const [showEChequePayment, setShowEChequePayment] = useState(false);
    const navigate = useNavigate();

    const event = {
        price: 50,
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        setIsPersonalInfoConfirmed(true);
    };

    const handleSubmit = () => {
        const bookingDetails = { name, phone, email, people, paymentMethod, currency };
        console.log('Submitting booking details:', bookingDetails);
        // Simulate an API call or processing time
        setTimeout(() => {
            navigate('/international-yoga-day-success');
        }, 1000);
    };

    const handlePaymentMethodClick = (method) => {
        setPaymentMethod(method);
        setShowCardPayment(method === 'Visa');
        setShowPayPalPayment(method === 'PayPal');
        setShowEChequePayment(method === 'E-cheque');
    };

    const handlePaymentSubmit = (paymentDetails) => {
        console.log('Payment details submitted:', paymentDetails);
        handleSubmit();
    };

    return (
        <div className="relative">
            <Header />
            <Herosection
                imageUrl="/Images/Herosection/events.png"
                heading="Events"
                description="Home / Events"
            />

            <div className="container mx-auto px-4 py-12 mt-8">
                <h2 className="text-2xl font-bold font-serif mb-6 text-center">Booking Details</h2>
                <div className="flex flex-col lg:flex-row items-start justify-center">
                    <form onSubmit={handleConfirm} className="flex-1 lg:mr-8 lg:max-w-lg">
                        <h1 className="text-orange-400 font-bold mb-6 text-lg text-left">Personal Info</h1>
                        <input
                            type="text"
                            placeholder="Enter Your Name*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2.5 mb-4 bg-gray-100 rounded text-base border border-gray-300"
                            required
                            disabled={isPersonalInfoConfirmed}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-2.5 mb-4 bg-gray-100 rounded text-base border border-gray-300"
                            required
                            disabled={isPersonalInfoConfirmed}
                        />
                        <input
                            type="email"
                            placeholder="Email Address*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2.5 mb-4 bg-gray-100 rounded text-base border border-gray-300"
                            required
                            disabled={isPersonalInfoConfirmed}
                        />
                        <input
                            type="number"
                            placeholder="Number of People"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            className="w-full p-2.5 mb-6 bg-gray-100 rounded text-base border border-gray-300"
                            min="1"
                            disabled={isPersonalInfoConfirmed}
                        />

                        <button
                            type="submit"
                            className="w-full bg-orange-400 text-white py-3 rounded font-semibold mb-6 text-base"
                            disabled={isPersonalInfoConfirmed}
                        >
                            Confirm
                        </button>

                        {isPersonalInfoConfirmed && (
                            <div className="mt-6">
                                <h2 className="text-orange-400 font-bold text-lg sm:text-2xl mb-4 text-left">Payment Method</h2>
                                <p className="mb-4 font-bold text-left">Choose Your Payment Method</p>
                                <div className="space-y-4 mb-8">
                                    {['Visa', 'PayPal', 'E-cheque'].map((method) => (
                                        <div
                                            key={method}
                                            className={`w-full border p-3 rounded-md flex items-center justify-center cursor-pointer ${paymentMethod === method ? 'border-orange-500' : 'border-gray-300 hover:border-orange-500'}`}
                                            onClick={() => handlePaymentMethodClick(method)}
                                        >
                                            {method === 'Visa' && <img src="/Images/Visalogo.png" alt="Visa" className="h-6 mr-2" />}
                                            {method === 'PayPal' && <img src="/Images/Paypallogo.png" alt="PayPal" className="h-6 mr-2" />}
                                            {method === 'E-cheque' && <span className="font-bold text-gray-700">E-cheque</span>}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center rounded-md border-2 border-orange-400 overflow-hidden mb-8">
                                    <div className="bg-orange-400 p-4 text-white font-bold border-orange-400 text-base flex items-center justify-center">
                                        Payment Total
                                    </div>
                                    <div className="flex-1 p-4 bg-white text-left text-lg font-semibold border-orange-400">
                                        ${event.price * parseInt(people)}
                                    </div>
                                    <div className="bg-orange-400 p-4 border-orange-400">
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="bg-transparent text-white font-bold focus:outline-none"
                                        >
                                            <option value="USD">$</option>
                                            <option value="EUR">€</option>
                                            <option value="GBP">£</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-orange-400 text-white py-3 px-6 rounded-s font-semibold mt-6 mx-auto block text-sm sm:text-base"
                                    style={{ width: '200px' }}
                                    disabled={!paymentMethod}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        )}
                    </form>
                    <div className="mt-8 lg:mt-0 lg:ml-12">
                        <img src="/Images/seat.png" alt="Seat illustration" className="w-48 h-auto block mx-auto" />

                    </div>
                </div>
            </div>

            {showCardPayment && (
                <CardPaymentPopup
                    onClose={() => setShowCardPayment(false)}
                    onSubmit={handlePaymentSubmit}
                />
            )}
            {showPayPalPayment && (
                <PayPalPaymentPopup
                    onClose={() => setShowPayPalPayment(false)}
                    onSubmit={handlePaymentSubmit}
                />
            )}
            {showEChequePayment && (
                <EChequePopup
                    onClose={() => setShowEChequePayment(false)}
                    onSubmit={handlePaymentSubmit}
                />
            )}

            <Footer />
        </div>
    );
};

export default InternationalYogaDayBooking;
