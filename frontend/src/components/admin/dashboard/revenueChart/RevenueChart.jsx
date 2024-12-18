// RevenueChart.js
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import './RevenueChart.css';

const RevenueChart = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Total Income', 'Total Expenses', 'Total Deductions'],
                datasets: [{
                    data: [50, 25, 25],
                    backgroundColor: ['#4d4d4d', '#ff8c00', '#d3d3d3'],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        return () => {
            chartInstanceRef.current.destroy();
        };
    }, []);

    const reloadChart = () => {
        chartInstanceRef.current.destroy();
        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Total Income', 'Total Expenses', 'Total Deductions'],
                datasets: [{
                    data: [50, 25, 25],
                    backgroundColor: ['#4d4d4d', '#ff8c00', '#d3d3d3'],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    };

    return (
        <div className="container">
            <div className="header">
                <h2>Revenue</h2>
                <select id="time-range">
                    <option value="7days">Last 7 days</option>
                    {/* Add more options if needed */}
                </select>
            </div>
            <div className="chart-container">
                <canvas ref={chartRef}></canvas>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#4d4d4d' }}></span>
                        <span>Total Income, 50%</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#ff8c00' }}></span>
                        <span>Total Expenses, 25%</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#d3d3d3' }}></span>
                        <span>Total Deductions, 25%</span>
                    </div>
                </div>
            </div>
            <button className="reload-btn" onClick={reloadChart}>Reload &#x21bb;</button>
        </div>
    );
};

export default RevenueChart;
