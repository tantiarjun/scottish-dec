import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Select from 'react-select';
import './DonationChart.css';

const DonationChart = () => {
    const allData = {
        year: [
            ['Month', 'Revenue', 'Donations'],
            ['Jan', 400, 500],
            ['Feb', 450, 600],
            ['Mar', 300, 400],
            ['Apr', 500, 700],
            ['May', 600, 550],
            ['Jun', 550, 650],
            ['Jul', 700, 600],
            ['Aug', 650, 550],
            ['Sep', 600, 600],
            ['Oct', 500, 500],
            ['Nov', 550, 550],
            ['Dec', 600, 600],
        ],
        last7Days: [
            ['Day', 'Revenue', 'Donations'],
            ['Day 1', 100, 150],
            ['Day 2', 110, 140],
            ['Day 3', 120, 130],
            ['Day 4', 130, 120],
            ['Day 5', 140, 110],
            ['Day 6', 150, 100],
            ['Day 7', 160, 90],
        ],
        lastMonth: [
            ['Day', 'Revenue', 'Donations'],
            ['Day 1', 100, 150],
            ['Day 5', 120, 130],
            ['Day 10', 130, 120],
            ['Day 15', 140, 110],
            ['Day 20', 150, 100],
            ['Day 25', 160, 90],
            ['Day 30', 170, 80],
        ],
        last6Months: [
            ['Month', 'Revenue', 'Donations'],
            ['Month 1', 400, 450],
            ['Month 2', 450, 400],
            ['Month 3', 500, 350],
            ['Month 4', 550, 300],
            ['Month 5', 600, 250],
            ['Month 6', 650, 200],
        ],
    };

    const [selectedRange, setSelectedRange] = useState('year');
    const ranges = [
        { value: 'last7Days', label: 'Last 7 Days' },
        { value: 'lastMonth', label: 'Last Month' },
        { value: 'last6Months', label: 'Last 6 Months' },
        { value: 'year', label: 'Year' },
    ];

    const options = {
        title: 'Donations',
        curveType: 'function',
        legend: { position: 'top' },
        hAxis: { title: selectedRange === 'year' ? 'Month' : 'Day', slantedText: true, slantedTextAngle: 45 },
        vAxis: { title: 'Amount' },
        series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1, color: 'orange' },
        },
        vAxes: {
            0: { title: 'Revenue' },
            1: { title: 'Donations' },
        },
        pointSize: 5,
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 4.0,
        },
        chartArea: { width: '80%', height: '70%' },
    };

    const chartWidth = selectedRange === 'year' ? '1800px' : '100%';

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Select
                options={ranges}
                defaultValue={ranges.find(range => range.value === 'year')}
                onChange={option => setSelectedRange(option.value)}
                className='selected-dropdown'
            />
            <div style={{ overflowX: 'scroll', width: '100%' }}>
                <div style={{ width: chartWidth }}>
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart...</div>}
                        data={allData[selectedRange]}
                        options={options}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DonationChart;
