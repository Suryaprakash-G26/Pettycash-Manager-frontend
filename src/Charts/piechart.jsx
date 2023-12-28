/* eslint-disable react/prop-types */
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const PieChart = ({ info }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Merge data for the same category
    const mergedData = info.reduce((acc, data) => {
      const existingData = acc.find((item) => item.category === data.category);

      if (existingData) {
        existingData.price += data.price;
      } else {
        acc.push({ ...data });
      }

      return acc;
    }, []);

    // Extract category and prices from merged data
    const category = mergedData.map((data) => data.category);
    const prices = mergedData.map((data) => data.price);

    // Check if the chartRef is available
    if (chartRef.current) {
      // Create the chart
      const myChart = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: category,
          datasets: [
            {
                data: prices,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(50, 205, 50, 0.2)',  
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(50, 205, 50, 1)',  
                ],
                borderWidth: 1,
                
            },
          ],
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
      className="w-2/5 mx-auto"
      style={{ maxWidth: "30%" }}
      ref={chartRef}
    />
  );
};

export default PieChart;
