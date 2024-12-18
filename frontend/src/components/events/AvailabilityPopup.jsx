import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPaymentPopup from './CardPaymentPopup';
import PayPalPaymentPopup from './PayPalPaymentPopup';
import EChequePopup from './EChequePopup';
import SuccessPopup from './SuccessPopup';

const AvailabilityPopup = ({ event, onClose, onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [isPersonalInfoConfirmed, setIsPersonalInfoConfirmed] = useState(false);
    const [showCardPayment, setShowCardPayment] = useState(false);
    const [showPayPalPayment, setShowPayPalPayment] = useState(false);
    const [showEChequePayment, setShowEChequePayment] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = (e) => {
        e.preventDefault();
        setIsPersonalInfoConfirmed(true);
        if (!event.isPaid) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const bookingDetails = { name, phone, email, people, paymentMethod, currency };
        console.log('Submitting booking details:', bookingDetails);
        onConfirm(bookingDetails);
        setShowSuccessPopup(true);
    };

    const handlePaymentMethodClick = (method) => {
        console.log('Payment method selected:', method);
        setPaymentMethod(method);

        if (method === 'Visa') {
            setShowCardPayment(true);
            setShowPayPalPayment(false);
            setShowEChequePayment(false);
        } else if (method === 'PayPal') {
            setShowPayPalPayment(true);
            setShowCardPayment(false);
            setShowEChequePayment(false);
        } else if (method === 'E-cheque') {
            setShowEChequePayment(true);
            setShowCardPayment(false);
            setShowPayPalPayment(false);
        }
    };

    const handleCardPaymentSubmit = (cardDetails) => {
        console.log('Card payment details submitted:', cardDetails);
        handleSubmit();
        setShowCardPayment(false);
    };

    const handlePayPalPaymentSubmit = (payPalDetails) => {
        console.log('PayPal payment details submitted:', payPalDetails);
        handleSubmit();
        setShowPayPalPayment(false);
    };

    const handleEChequePaymentSubmit = (eChequeDetails) => {
        console.log('E-Cheque payment details submitted:', eChequeDetails);
        handleSubmit();
        setShowEChequePayment(false);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 p-4" onClick={onClose}>
                <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-3xl h-full sm:h-auto max-h-[80vh] relative z-10 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">{event.isPaid ? 'Payment Details' : 'Booking Details'}</h2>
                    <div className="flex flex-col sm:flex-row h-full">
                        <form onSubmit={handleConfirm} className="flex-1 sm:mr-8">
                            {/* Personal Info Section */}
                            <h1 className="text-orange-400 font-bold mb-4 text-lg">Personal Info</h1>
                            <input
                                type="text"
                                placeholder="Enter Your Name*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
                                required
                                disabled={isPersonalInfoConfirmed}
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number*"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
                                required
                                disabled={isPersonalInfoConfirmed}
                            />
                            <input
                                type="email"
                                placeholder="Email Address*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
                                required
                                disabled={isPersonalInfoConfirmed}
                            />
                            <input
                                type="number"
                                placeholder="Number of People"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
                                disabled={isPersonalInfoConfirmed}
                            />

                            <button
                                type="submit"
                                className="w-full bg-orange-400 text-white p-3 rounded font-semibold mb-4 text-sm sm:text-base"
                                disabled={isPersonalInfoConfirmed}
                            >
                                {event.isPaid ? 'Confirm' : 'Submit'}
                            </button>

                            {event.isPaid && (
                                <div className="mt-4">
                                    <h2 className="text-orange-400 font-bold text-lg sm:text-2xl mb-2">Payment Method</h2>
                                    <p className="mb-4 font-bold">Choose Your Payment Method</p>
                                    <div className="space-y-4 mb-6">
                                        {['Visa', 'PayPal', 'E-cheque'].map((method) => (
                                            <div
                                                key={method}
                                                className={`border p-4 rounded-md flex items-center justify-center cursor-pointer ${paymentMethod === method ? 'border-orange-500' : 'border-gray-300 hover:border-orange-500'}`}
                                                onClick={() => handlePaymentMethodClick(method)}
                                            >
                                                {method === 'Visa' && <img src="/Images/Visalogo.png" alt="Visa" className="h-6 mr-2" />}
                                                {method === 'PayPal' && <img src="/Images/Paypallogo.png" alt="PayPal" className="h-6 mr-2" />}
                                                {method === 'E-cheque' && <span className="font-bold text-gray-700">E-cheque</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center border border-orange-400 rounded">
                                        <div className="bg-orange-400 text-white p-2 rounded-l-md flex items-center">
                                            <span className="font-bold">Payment Total</span>
                                        </div>
                                        <div className="bg-white text-gray-700 flex-grow flex justify-between items-center">
                                            <span className="font-bold text-lg">${event.price ? event.price.toFixed(2) : '0.00'}</span>
                                            <select
                                                value={currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                                className="p-2 bg-orange-400 text-white rounded border-none"
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
                                        className="bg-orange-400 text-white p-4 rounded font-semibold mt-6 mx-auto block text-sm sm:text-base"
                                        style={{ width: '200px' }}
                                        disabled={!isPersonalInfoConfirmed}
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </form>
                        <div className="hidden sm:block w-32">
                            <img src="/Images/seat.png" alt="Seat illustration" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            {showCardPayment && (
                <CardPaymentPopup
                    onClose={() => setShowCardPayment(false)}
                    onSubmit={handleCardPaymentSubmit}
                />
            )}
            {showPayPalPayment && (
                <PayPalPaymentPopup
                    onClose={() => setShowPayPalPayment(false)}
                    onSubmit={handlePayPalPaymentSubmit}
                />
            )}
            {showEChequePayment && (
                <EChequePopup
                    onClose={() => setShowEChequePayment(false)}
                    onSubmit={handleEChequePaymentSubmit}
                />
            )}
            {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}
        </>
    );
};

export default AvailabilityPopup;
