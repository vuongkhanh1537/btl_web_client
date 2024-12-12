

import { AiOutlineDollar } from "react-icons/ai";
import PageLayout from "../../Layouts/PageLayout";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import PieChart from "../../components/Charts/PieChart";
import DonutChart from "../../components/Charts/DonutChart";
import { useEffect, useState } from "react";
import { fetchRevenueByCategory, 
  fetchRevenueMonthly, 
fetchTopProducts, fetchTotalOrderDelivered,
fetchTotalOrders, fetchTotalRevenue } from "../../services/DashboardService";
import { _, Grid } from "gridjs-react";
import { formatCurrency } from "../../utils/formatCurrency";
import ColumnChart from "../../components/Charts/ColumnChart";
import { fetchCustomersData } from "../../services/CustomerService";



function getFirstImage(imagesURL) {
  if(imagesURL){
    const images = imagesURL.split(";");
    return images[0];
  }
  return null;
}
function Dashboard() {
  const [loading, setLoading] = useState(false);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrderCompleted, setTotalOrderCompleted] = useState(0);
  
  const [revenueByCategory, setRevenueByCategory] = useState([]);
  
  const [topProducts, setTopProducts] = useState([]);
  const [numofCustomers, setNumofCustomers] = useState(0);


  
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchTotalRevenue(startDate, endDate);
      setTotalRevenue(response);
      const response2 = await fetchTotalOrders(startDate, endDate);
      setTotalOrders(response2);
      const response3 = await fetchTotalOrderDelivered(startDate, endDate);
      setTotalOrderCompleted(response3);
      
      const response4 = await fetchCustomersData();
      setNumofCustomers(response4.length);
      const response5 = await fetchRevenueByCategory(startDate, endDate);
      setRevenueByCategory(response5);
    
      const response7 = await fetchTopProducts(startDate, endDate);
      setTopProducts(response7);

    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchData();
  },[]);

  function handleFilter() {
    fetchData();
  }



  if(loading){
    return(
      <PageLayout pageTitle="Dashboard">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-700"></div>
        </div>
      </PageLayout>
    )
  }
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
                {formatCurrency( totalRevenue)}
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
              Orders Completed
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                {totalOrderCompleted}
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
              Total Customers
            </p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                {numofCustomers}
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
            <PieChart data={revenueByCategory}/>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {/* <input type="date" value={selectedDate} onChange={handleDateChange} /> */}
            {/* <DonutChart /> */}
            <ColumnChart />

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
          {/* <table className="min-w-full divide-y divide-gray-200">
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
          </table> */}
      <Grid
        data={topProducts.map((product) => [
          product.id,
          _(
            <div className="-ml-6 flex gap-2" >
              <img
                src={getFirstImage(product.image) }
                alt="Product"
                className=" rounded-lg w-20 h-20"
              ></img>
              <div className="flex items-center">{product.name} </div>
              
            </div>
          ),
          formatCurrency(product.price),
          product.sales_count,
          formatCurrency(product.sales_count * product.price),
         

        ])}
        columns={[
          "ID",
          "Product Name",
          "Price",
          "Sales",
          "Revenue",
          
        ]}
        search={true}
        sort={true}
        fixedHeader={true}
        pagination={{
          enabled: true,
          limit: 5,
        }}
        style={{
          border: "none",
        }}
      />
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
