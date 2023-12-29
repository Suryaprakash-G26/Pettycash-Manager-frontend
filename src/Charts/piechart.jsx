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

    // Calculate the total
    const total = prices.reduce((acc, price) => acc + price, 0);

    // Calculate percentages
    const percentages = prices.map((price) =>
      ((price / total) * 100).toFixed(2)
    );

    // Define fixed and distinct colors
    const fixedColors = [
      "#FF5733",
      "#33A1FF",
      "#FF33A1",
      "#33FF57",
      "#A1FF33",
      "#5733FF",
    ];

    // Assign colors to categories
    const categoryColors = category.reduce((acc, _, index) => {
      acc[category[index]] = fixedColors[index % fixedColors.length];
      return acc;
    }, {});

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
              backgroundColor: category.map((cat) => categoryColors[cat]),
              borderColor: category.map((cat) =>
                categoryColors[cat].replace("0.2", "1")
              ),
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = context.parsed;
                  return `${label}: ${value}`;
                },
                afterLabel: (context) => {
                  const index = context.dataIndex;
                  return `Percentage: ${percentages[index]}%`;
                },
              },
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
      style={{ maxWidth: "400px", maxHeight: "400px" }}
      ref={chartRef}
    />
  );
};

export default PieChart;
