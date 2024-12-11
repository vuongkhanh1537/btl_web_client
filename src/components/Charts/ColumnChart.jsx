import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatCurrency } from '../../utils/formatCurrency';

const ColumnChart = ({data}) => {
    const categories = data.map(item => item.month); 
    const series = data.map(item => parseFloat(item.revenue)); 
  
  // Chart data and configuration
  const chartOptions = {
    chart: {
      type: 'bar', // Set chart type to 'bar' for column chart
    },
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
      },
    },
    xaxis: {
      categories: categories, // X-axis labels
    },
    title: {
      text: 'Monthly Sales',
      align: 'center',
    },
    fill: {
        type: 'solid', // Set fill type to 'solid'
        colors: ['#00e396'], // Solid green color for columns
      },
    dataLabels: {
      enabled: false, // Show data labels inside the bars
      formatter: (val) => formatCurrency (val), // Format data labels as currency
    },
    tooltip: {
        y: {
            formatter: (val) => formatCurrency (val), // Format tooltip values as currency
        },
      },
  };

  const chartData = [
    {
      name: 'Sales', // Series name
      data: series, // Y-axis data points
    },
  ];

  return (
    <div>
      <h2>Column Chart Example</h2>
      <ReactApexChart
        options={chartOptions} // Pass chart options
        series={chartData} // Pass chart data
        type="bar" // Chart type
        height={350} // Chart height
      />
    </div>
  );
};

export default ColumnChart;
