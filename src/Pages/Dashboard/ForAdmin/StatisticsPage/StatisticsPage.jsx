import React, { useState } from 'react';
import ComingSoon from '../../../../Components/ComingSoon/ComingSoon';
import ReactApexChart from 'react-apexcharts';






const StatisticsPage = () => {

    const [chartData, setChartData] = useState({
        series: [
            {
                name:'Delivery Booked',
                data: [44, 55, 41, 64, 22, 10],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 430,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                },
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff'],
                },
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff'],
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            xaxis: {
                categories: [ 'July', 'August', 'September', 'October', 'November', 'December'],
            },
        },
    });

    
    return (
        // <div>
        //     <ComingSoon></ComingSoon>
        // </div>
        <div className='mx-auto px-3 md:px-8 lg:px-12 my-12'>
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={430} />
            </div>
        </div>
    );
};

export default StatisticsPage;