import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Function to get current month
const getCurrentMonth = () => {
    const date = new Date();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[date.getMonth()];
};

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:3000/api/contactusdata');
                const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/contactusdata`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const currentMonth = getCurrentMonth();

    const handleEmailClick = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl);
    };

    return (
        <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm" style={{ color: '#FA7C0B', fontWeight: '500' }}>People who contacted</h2>
                <select style={{ fontSize: '0.8rem' }} className="border border-gray-300 rounded-md p-2" defaultValue={currentMonth}>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full  bg-white border border-gray-200">
                    <thead style={{ backgroundColor: '#D9D9D9' }}>
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left">Person's name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Location</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                                <td
                                    className="border border-gray-200 px-4 py-2 text-blue-500 cursor-pointer" style={{ target: '_blank' }}
                                    onClick={() => handleEmailClick(item.email)}
                                >
                                    {item.email}
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{item.location}</td>
                                <td className="border border-gray-200 px-4 py-2">{item.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                View all
            </button>
        </div>
    );
};

export default Table;
