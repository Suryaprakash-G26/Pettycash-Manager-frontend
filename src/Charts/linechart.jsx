/* eslint-disable react/prop-types */
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import 'chartjs-adapter-date-fns';

const LineChart = ({ info }) => {
    const chartRef = useRef();
    console.log('info ::', info);

    useEffect(() => {
        // Merge data for the same date
        const mergedData = info.reduce((acc, data) => {
            const existingData = acc.find(item => item.date === data.date);

            if (existingData) {
                existingData.price += data.price;
            } else {
                acc.push({ ...data });
            }

            return acc;
        }, []);

        // Extract date and prices from merged data
        const dates = mergedData.map(data => new Date(data.date));
        const prices = mergedData.map(data => data.price);

        // Check if the chartRef is available
        if (chartRef.current) {
            // Create the chart
            const myChart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: 'Price',
                            data: prices,
                            fill: false,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                            },
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            // Clean up the chart on component unmount
            return () => {
                myChart.destroy();
            };
        }
    }, [info]);

    return <canvas className="w-4/5 mx-auto" style={{ maxWidth: '80%' }} ref={chartRef} />;
};

export default LineChart;
