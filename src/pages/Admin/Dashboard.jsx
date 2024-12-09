// import { AiOutlineDollar } from "react-icons/ai";
// import PageLayout from "../../Layouts/PageLayout";
// import { IoBagOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import PieChart from "./PieChart";
// import DonutChart from "./DonutChart";
// import { useState } from "react";

// function Dashboard() {
//   const totalRevenue = 5500;
//   const totalOrders = 50;
//   const netProfits = 50;
//   const numofCustomers = 100;
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const handleFilter = () => {
//     console.log("Filtering from", startDate, "to", endDate);
//     // Add your filtering logic here
//   };

//   const bestSellingProducts = [
//     {
//       product_id: 1,
//       name_: "Product 1",
//       price: 100,
//       sales: 50,
//       quantity: 10,
//       amount: 5000,
//     },
//     {
//       product_id: 2,
//       name_: "Product 2",
//       price: 75,
//       sales: 30,
//       quantity: 5,
//       amount: 3750,
//     },
//     {
//       product_id: 3,
//       name_: "Product 3",
//       price: 80,
//       sales: 40,
//       quantity: 8,
//       amount: 4000,
//     },
//     {
//       product_id: 4,
//       name_: "Product 4",
//       price: 90,
//       sales: 45,
//       quantity: 12,
//       amount: 4500,
//     },
//   ];
//   return (

// <PageLayout pageTitle="Dashboard">
// {/* <!-- Metrics Cards --> */}

// <div className="flex flex-wrap mb-10 justify-between">
//     <h5 className="text-lg font-semibold">Good morning, Admin </h5>
//         <div className="flex items-center space-x-4 justify-end">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Start Date
//             </label>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               End Date
//             </label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//           <button
//             onClick={handleFilter}
//             className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
//           >
//             Apply Filters
//           </button>
//         </div>
//       </div>
// <div className="flex flex-wrap -mx-4 mb-10">
//   {/* Card 1: Total Revenue */}
//   <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
//     <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
//       <p className="uppercase text-sm font-medium text-gray-500">
//         Total Revenue
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <h4 className="text-2xl font-semibold text-gray-800">${totalRevenue}</h4>
//         <span className="bg-blue-100 text-blue-500 rounded p-2">
//           <AiOutlineDollar size={20} />
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Card 2: Net Profit */}
//   <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
//     <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
//       <p className="uppercase text-sm font-medium text-gray-500">
//         Net Profit
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <h4 className="text-2xl font-semibold text-gray-800">${numofCustomers}</h4>
//         <span className="bg-green-100 text-green-500 rounded p-2">
//           <AiOutlineDollar size={20} />
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Card 3: Total Orders */}
//   <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
//     <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
//       <p className="uppercase text-sm font-medium text-gray-500">
//         Total Orders
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <h4 className="text-2xl font-semibold text-gray-800">{totalOrders}</h4>
//         <span className="bg-teal-100 text-teal-500 rounded p-2">
//           <IoBagOutline size={20} />
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Card 4: Customers */}
//   <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
//     <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
//       <p className="uppercase text-sm font-medium text-gray-500">
//         Customers
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <h4 className="text-2xl font-semibold text-gray-800">${numofCustomers}</h4>
//         <span className="bg-yellow-100 text-yellow-500 rounded p-2">
//           <FaRegUser size={20} />
//         </span>
//       </div>
//     </div>
//   </div>
// </div>

// {/* <!-- Revenue by Month Card --> */}
// <div className="bg-white shadow rounded-lg p-6 mb-6">
//   <div className="flex items-center mb-4">
//     <h5 className="flex-grow text-gray-500">Revenue by Month</h5>
//   </div>
//   {/* Add your Revenue by Month content here */}

// </div>

// {/* <!-- Sales Charts Card --> */}
// <div className="bg-white shadow rounded-lg p-6 mb-6">
//   <div className="flex items-center mb-4">
//     <h5 className="flex-grow text-gray-500">Sales</h5>
//   </div>
//   <div className="flex flex-wrap -mx-4">
//     <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
//       <PieChart />
//     </div>
//     <div className="w-full lg:w-1/2 px-4">
//       <DonutChart />
//     </div>
//   </div>
// </div>

// {/* <!-- Top Selling Products Card --> */}
// <div className="bg-white shadow rounded-lg p-6">
//   <div className="flex items-center mb-4">
//     <h5 className="flex-grow text-gray-500">Top Selling Products</h5>
//   </div>
//   <div className="overflow-x-auto">
//     <table className="min-w-full divide-y divide-gray-200">
//       <thead className="bg-gray-50">
//         <tr>
//           <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//             Product ID
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//             Product Name
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//             Sales
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//             Quantity
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//             Amount
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200">
//         {bestSellingProducts.map((product) => (
//           <tr key={product.product_id}>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//               {product.product_id}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//               {product.name_}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//               {product.sales}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//               {product.quantity}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//               ${product.amount}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
// </PageLayout>
//   );
// }

// export default Dashboard;

import { AiOutlineDollar } from "react-icons/ai";
import PageLayout from "../../Layouts/PageLayout";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import PieChart from "../../components/Charts/PieChart";
import DonutChart from "../../components/Charts/DonutChart";
import { useEffect, useState } from "react";
import { get_total_revenue } from "../../services/RevenueService";

async function fetchTotalRevenue(start_date, end_date) {
  try {
    const response = await get_total_revenue(start_date, end_date);

    return response.data.total_revenue;
  } catch (error) {
    console.error("Error fetching total revenue:", error);
    return 0;
  }
}
function Dashboard() {
  const [totalRevenue, setTotalRevenue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const revenue = await fetchTotalRevenue("2023-11-01", "2024-11-01");
      setTotalRevenue(revenue); // Update state to trigger re-render
    }

    fetchData();
  }, []); // Dependency array ensures it runs only once

  console.log(totalRevenue);
  const totalOrders = 50;
  const netProfits = 50;
  const numofCustomers = 100;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    console.log("Filtering from", startDate, "to", endDate);
    // Add your filtering logic here
  };

  const bestSellingProducts = [
    {
      product_id: 1,
      name_: "Product 1",
      price: 100,
      sales: 50,
      quantity: 10,
      amount: 5000,
    },
    {
      product_id: 2,
      name_: "Product 2",
      price: 75,
      sales: 30,
      quantity: 5,
      amount: 3750,
    },
    {
      product_id: 3,
      name_: "Product 3",
      price: 80,
      sales: 40,
      quantity: 8,
      amount: 4000,
    },
    {
      product_id: 4,
      name_: "Product 4",
      price: 90,
      sales: 45,
      quantity: 12,
      amount: 4500,
    },
  ];

  return (
    <PageLayout pageTitle="Dashboard">
      {/* Date Filters Section */}

      <div className="flex flex-col lg:flex-row items-center justify-between mb-10 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg">
        <h5 className="text-xl font-semibold mb-4 lg:mb-0">
          Good morning, Admin
        </h5>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-6 lg:space-y-0 w-full lg:w-auto">
          <div className="w-full lg:w-1/3">
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-800 w-full"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-800 w-full"
            />
          </div>
          <div className="w-full mt-4 xl:mt-4">
            <label className="block text-sm font-medium invisible">
              filter
            </label>
            <button
              onClick={handleFilter}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition duration-300 w-full lg:w-auto"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="flex flex-wrap mb-10  -mx-3">
        {/* Card 1: Total Revenue */}
        <div className=" w-full sm:w-1/2 lg:w-1/4 px-3 ">
          <div className="mb-4 h-[150px] bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="uppercase text-sm font-medium text-gray-500">
              Total Revenue
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                ${totalRevenue}
              </h4>
              <span className="bg-blue-100 text-blue-500 p-2 rounded-full">
                <AiOutlineDollar size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Net Profit */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 ">
          <div className="mb-4 h-[150px] bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="uppercase text-sm font-medium text-gray-500">
              Total Sales Count
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                ${numofCustomers}
              </h4>
              <span className="bg-green-100 text-green-500 p-2 rounded-full">
                <AiOutlineDollar size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Total Orders */}
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/4 px-3">
          <div className=" h-[150px] bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="uppercase text-sm font-medium text-gray-500">
              Total Orders
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                {totalOrders}
              </h4>
              <span className="bg-teal-100 text-teal-500 p-2 rounded-full">
                <IoBagOutline size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Customers */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-3">
          <div className="mb-4 h-[150px] bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="uppercase text-sm font-medium text-gray-500">
              Customers
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                ${numofCustomers}
              </h4>
              <span className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
                <FaRegUser size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Charts Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 overflow-x-auto">
        <div className="flex items-center mb-4">
          <h5 className="text-xl font-semibold text-gray-500">Sales</h5>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4 mb-5">
            <PieChart />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <DonutChart />
          </div>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <h5 className="text-xl font-semibold text-gray-500">
            Top Selling Products
          </h5>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Product ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bestSellingProducts.map((product) => (
                <tr key={product.product_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.product_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.name_}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
