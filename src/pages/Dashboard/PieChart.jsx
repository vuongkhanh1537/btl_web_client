import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  // Chart configuration
  const options = {
    labels: ["Men", "Women", "Sport", "Casual", "Formal"],
    legend: {
      position: "bottom",
      horizontalAlign: "center", // Center-align the legend horizontally
      
      fontSize: "14px", // Set font size for legend text
      markers: {
        width: 10, // Width of the legend markers
        height: 10, // Height of the legend markers
      },
      itemMargin: {
        // horizontal: 10, // Space between legend items horizontally
        vertical: 5, // Space between legend items vertically
      },
    },
    title: {
        text: "Sales by Category", // Chart title
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
  };

  // Data for the pie chart
  const series = [44, 55, 13, 43, 22]; // Data corresponding to labels

  return (
    <div>
      <Chart options={options} series={series} type="pie" width="390" />
    </div>
  );
};

export default PieChart;
