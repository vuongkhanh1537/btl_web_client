import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  // Chart data and configuration
  const options = {
    labels: ["Nike", "Adidas", "Puma", "Reebok", "Others"], // Shoe brands
    legend: {
      position: "bottom", // Place legend below the chart
      horizontalAlign: "center",
    },
    title: {
      text: "Sales by Shoe Brand", // Chart title
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    dataLabels: {
      enabled: true, // Show data labels inside the chart
      formatter: (val) => `${val.toFixed(1)}%`, // Format as percentage
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}%`, // Format tooltip values as sales in 'K'
      },
    },
  };

  const series = [40, 30, 15, 10, 5]; // Sales in 'K' (e.g., 40K for Nike)

  return (
    <div>
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default DonutChart;
