/* eslint-disable react/prop-types */
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const BarChart = ({ info }) => {
    const chartRef = useRef();

    useEffect(() => {
        // Merge data for the same type
        const mergedData = info.reduce((acc, data) => {
            const existingData = acc.find(item => item.category === data.category);

            if (existingData) {
                existingData.price += data.price;
            } else {
                acc.push({ ...data });
            }

            return acc;
        }, []);

        // Extract unique types and prices from merged data
        const uniqueTypes = mergedData.map(data => data.category);
        const prices = mergedData.map(data => data.price);

        // Define fixed and distinct colors
        const fixedColors = [
            "#FF5733",
            "#33FF57",
            "#5733FF",
            "#FF33A1",
            "#33A1FF",
            "#A1FF33",
        ];

        // Assign colors to categories consistently
        const categoryColors = uniqueTypes.reduce((acc, _, index) => {
            acc[uniqueTypes[index]] = fixedColors[index % fixedColors.length];
            return acc;
        }, {});

        // Check if the chartRef is available
        if (chartRef.current) {
            // Create the chart
            const myChart = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: uniqueTypes,
                    datasets: [
                        {
                            data: prices,
                            backgroundColor: uniqueTypes.map(type => categoryColors[type]),
                            borderColor: uniqueTypes.map(type => categoryColors[type]),
                            borderWidth: 1,
                            label: 'Categories', // Legend label
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
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

    return (
        <canvas
          className="w-full h-full"
          style={{ maxWidth: '400px', maxHeight: '400px' }}
          ref={chartRef}
        />
    );
};

export default BarChart;
