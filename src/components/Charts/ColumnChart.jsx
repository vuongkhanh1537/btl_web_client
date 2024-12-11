import { colors } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatCurrency } from '../../utils/formatCurrency';
import { fetchRevenueMonthly } from '../../services/DashboardService';

const ColumnChart = () => {
  const [year, setYear] = useState('2024'); // Default year is 2024
  const [revenueByMonth, setRevenueByMonth] = useState([]);
  useEffect(() => {
    async function fetchRevenueByMonth(){
      const response = await fetchRevenueMonthly(year);
      setRevenueByMonth(response);
    }
    fetchRevenueByMonth();
    
  },[year]);

  const categories = revenueByMonth.map(item => item.month); 
  const series = revenueByMonth.map(item => parseFloat(item.revenue)); 
  
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
    // <div>
    //   <
    //   <ReactApexChart
    //     options={chartOptions} // Pass chart options
    //     series={chartData} // Pass chart data
    //     type="bar" // Chart type
    //     height={350} // Chart height
    //   />
    // </div>
    <div >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-700">Monthly Sales</h2>
      <select
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        
        
      </select>
    </div>
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="bar"
      height={350}
    />
  </div>
  );
};

export default ColumnChart;
