import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './UserVisitChart.module.css';

const data = [
    ['Day', 'User Visits'],
    ['M', 500],
    ['T', 1500],
    ['W', 500],
    ['T', 5000],
    ['F', 2000],
    ['S', 800],
    ['S', 600]
];

const options = {
    title: 'User Visits',
    titleTextStyle: { color: '#FFA500', fontSize: 16 },
    hAxis: { title: '', textStyle: { color: '#B0B0B0' } },
    vAxis: { title: '', textStyle: { color: '#B0B0B0' } },
    legend: 'none',
    colors: ['#FFA500'],
    areaOpacity: 0.8,
    lineWidth: 2,
    pointSize: 5,
    tooltip: { isHtml: true }
};

const UserVisitChart = () => {
    return (
        <div className={`grid sm:grid-cols-1 md:grid-cols-2 ${styles.container}`}>

            <div className={styles.chart}>
                <Chart
                    chartType="AreaChart"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>

            <div className={styles.info}>
                <div>
                    <p><span className={styles.dot}></span> <span style={{ color: 'green' }}>+4.6%</span> since last month</p>
                    <p><span className={styles.dot}></span> Maximum visits on free events</p>
                    <p><span className={styles.dot}></span> <span style={{ color: 'red' }}>-3.2%</span> visitors on paid events</p>
                    <p><span className={styles.dot}></span> Moderate level visitors on donations</p>
                    <p><span className={styles.dot}></span> <span style={{ color: 'red' }}>-5.3%</span> visitors on work with us</p>
                </div>
            </div>

        </div>
    );
};

export default UserVisitChart;
