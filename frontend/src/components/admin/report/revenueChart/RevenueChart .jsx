// src/RevenueChart.js
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Select from 'react-select';
import './RevenueChart.css';
import { FaArrowRotateRight } from "react-icons/fa6";


const data = [
    ['Category', 'Percentage'],
    ['Total Income', 50],
    ['Total Expenses', 25],
    ['Total Deductions', 25],
];

const options = {
    pieHole: 0.3,
    legend: 'none',
    pieSliceText: 'none',
    slices: {
        0: { color: '#4d4d4d' }, // Total Income
        1: { color: '#f6a400' }, // Total Expenses
        2: { color: '#c5c5c5' }, // Total Deductions
    },
};

const timeframeOptions = [
    { value: '7days', label: 'Last 7 days' },
    { value: '1month', label: 'Last month' },
    { value: '6months', label: 'Last 6 months' },
];

const RevenueChart = () => {
    const [selectedOption, setSelectedOption] = useState(timeframeOptions[0]);

    const handleTimeframeChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div >

            <div className="revenue-and-dropdown-container">
                <h1 className="revenue-text">Revenue</h1>
                <div className="chart-timeframe">
                    <Select
                        value={selectedOption}
                        onChange={handleTimeframeChange}
                        options={timeframeOptions}
                        className="select-dropdown"
                        classNamePrefix="select"
                    />
                </div>
            </div>


            <div className="chart-stats mt-3">
                <p className="stat-positive">+4.6% since last month</p>
                <p>47% more event attendees</p>
            </div>


            <div className="chart-and-indication-container">
                <Chart
                    chartType="PieChart"
                    height="250px"
                    data={data}
                    options={options}

                />

                <div className="chart-legend">
                    <div><span className="legend-color" style={{ backgroundColor: '#4d4d4d' }}></span>Total Income, 50%</div>
                    <div><span className="legend-color" style={{ backgroundColor: '#f6a400' }}></span>Total Expenses, 25%</div>
                    <div><span className="legend-color" style={{ backgroundColor: '#c5c5c5' }}></span>Total Deductions, 25%</div>
                </div>

            </div>

            <div className="reload-button-container">
                <button className="reload-button">Reload <FaArrowRotateRight className='ml-3' /></button>

            </div>






        </div>



        // <div className="chart-container">
        //     <div className="chart-header">
        //         <h1>Revenue</h1>
        //         <div className="chart-timeframe">
        //             <Select
        //                 value={selectedOption}
        //                 onChange={handleTimeframeChange}
        //                 options={timeframeOptions}
        //                 className="select-dropdown"
        //                 classNamePrefix="select"
        //             />
        //         </div>
        //     </div>

        //     <div className="chart-stats">
        //         <p className="stat-positive">+4.6% since last month</p>
        //         <p>47% more event attendees</p>
        //     </div>
        //     <Chart
        //         chartType="PieChart"
        //         data={data}
        //         options={options}
        //         width={'100%'}
        //         height={'300px'}
        //     />
        //     <div className="chart-legend">
        //         <div><span className="legend-color" style={{ backgroundColor: '#4d4d4d' }}></span>Total Income, 50%</div>
        //         <div><span className="legend-color" style={{ backgroundColor: '#f6a400' }}></span>Total Expenses, 25%</div>
        //         <div><span className="legend-color" style={{ backgroundColor: '#c5c5c5' }}></span>Total Deductions, 25%</div>
        //     </div>

        //     <button className="reload-button">Reload</button>
        // </div>
    )
};

export default RevenueChart;
