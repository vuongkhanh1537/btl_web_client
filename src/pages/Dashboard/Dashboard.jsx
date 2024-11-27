import { AiOutlineDollar } from "react-icons/ai";
import PageLayout from "../../Layouts/PageLayout";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";

function Dashboard() {
  const totalRevenue = 5500;
  const totalOrders = 50;
  const netProfits = 50;
  const numofCustomers = 100;

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
    // <PageLayout pageTitle="Dashboard">
    //   {/* <div className="row mb-3">Good morning </div> */}

    //   <div className="row">
    //     <div className="col-xl-3 col-md-6">
    //       <div className="card card-animate">
    //         <div className="card-body">
    //           <p className="text-uppercase fw-medium text-muted ">
    //             Total Revenue{" "}
    //           </p>
    //           <div className="d-flex justify-content-between">
    //             <h4 className="fw-semibold mb-0">${totalRevenue}</h4>
    //             <span className="bg-primary-subtle fs-13 rounded p-2">
    //               <AiOutlineDollar size={20} />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-xl-3 col-md-6">
    //       <div className="card card-animate">
    //         <div className="card-body">
    //           <p className="text-uppercase fw-medium text-muted ">Net Profit</p>
    //           <div className="d-flex justify-content-between">
    //             <h4 className="fw-semibold mb-0">${numofCustomers}</h4>
    //             <span className="bg-success-subtle fs-13 rounded p-2">
    //               <AiOutlineDollar size={20} />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-xl-3 col-md-6">
    //       <div className="card card-animate">
    //         <div className="card-body">
    //           <p className="text-uppercase fw-medium text-muted ">
    //             Total Orders
    //           </p>
    //           <div className="d-flex justify-content-between">
    //             <h4 className="fw-semibold mb-0">{totalOrders}</h4>
    //             <span className="bg-info-subtle fs-13 rounded p-2">
    //               <IoBagOutline size={20} />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-xl-3 col-md-6">
    //       <div className="card card-animate">
    //         <div className="card-body">
    //           <p className="text-uppercase fw-medium text-muted ">Customers</p>
    //           <div className="d-flex justify-content-between">
    //             <h4 className="fw-semibold mb-0">${numofCustomers}</h4>
    //             <span className="bg-warning-subtle fs-13 rounded p-2">
    //               <FaRegUser size={20} />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="card mt-5">
    //     <div className="card-header d-flex align-items-center ">
    //       <h5 className="card-title flex-grow-1 text-muted mb-0">
    //         Revenue by month
    //       </h5>
    //     </div>
    //   </div>

    //   <div className="card mt-3">
    //     <div className="card-header d-flex align-items-center ">
    //       <h5 className="card-title flex-grow-1 text-muted mb-0">Sales</h5>
    //     </div>
    //     <div className="card-body">
    //       <div className="row">
    //         <div className="col-lg-6">
    //           <PieChart />
    //         </div>
    //         <div className="col-lg-6">
    //           <DonutChart />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="card mt-4">
    //     <div className="card-header d-flex align-items-center">
    //       <h5 className="card-title text-muted mb-0">Top Selling Products</h5>
    //     </div>
    //     <div className="card-body p-0">
    //       <div className="table-responsive table-card mt-3 mb-3">
    //         <table className="table table-nowrap table-hover align-middle mb-0">
    //           <thead className="table-light text-muted">
    //             <tr>
    //               <th scope="col">Product ID</th>
    //               <th scope="col">Product Name</th>
    //               <th scope="col">Sales</th>
    //               <th scope="col">Quantity</th>
    //               <th scope="col">Amount</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {bestSellingProducts.map((product) => (
    //               <tr key={product.product_id}>
    //                 <td className="text-muted">{product.product_id}</td>
    //                 <td className="text-muted">{product.name_}</td>
    //                 <td className="text-muted">{product.sales}</td>
    //                 <td className="text-muted">{product.quantity}</td>
    //                 <td className="text-muted">${product.amount}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
//     <PageLayout pageTitle="Dashboard">
//   {/* <div className="row mb-3">Good morning </div> */}

//   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//     <div className="card animate-shadow">
//       <div className="p-4">
//         <p className="uppercase font-medium text-gray-500">Total Revenue</p>
//         <div className="flex justify-between">
//           <h4 className="font-semibold text-lg">${totalRevenue}</h4>
//           <span className="bg-blue-100 text-blue-500 text-sm rounded p-2">
//             <AiOutlineDollar size={20} />
//           </span>
//         </div>
//       </div>
//     </div>
//     <div className="card animate-shadow">
//       <div className="p-4">
//         <p className="uppercase font-medium text-gray-500">Net Profit</p>
//         <div className="flex justify-between">
//           <h4 className="font-semibold text-lg">${numofCustomers}</h4>
//           <span className="bg-green-100 text-green-500 text-sm rounded p-2">
//             <AiOutlineDollar size={20} />
//           </span>
//         </div>
//       </div>
//     </div>
//     <div className="card animate-shadow">
//       <div className="p-4">
//         <p className="uppercase font-medium text-gray-500">Total Orders</p>
//         <div className="flex justify-between">
//           <h4 className="font-semibold text-lg">{totalOrders}</h4>
//           <span className="bg-teal-100 text-teal-500 text-sm rounded p-2">
//             <IoBagOutline size={20} />
//           </span>
//         </div>
//       </div>
//     </div>
//     <div className="card animate-shadow">
//       <div className="p-4">
//         <p className="uppercase font-medium text-gray-500">Customers</p>
//         <div className="flex justify-between">
//           <h4 className="font-semibold text-lg">${numofCustomers}</h4>
//           <span className="bg-yellow-100 text-yellow-500 text-sm rounded p-2">
//             <FaRegUser size={20} />
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="card mt-5">
//     <div className="flex items-center p-4 border-b">
//       <h5 className="font-medium text-gray-600 mb-0">Revenue by month</h5>
//     </div>
//   </div>

//   <div className="card mt-3">
//     <div className="flex items-center p-4 border-b">
//       <h5 className="font-medium text-gray-600 mb-0">Sales</h5>
//     </div>
//     <div className="p-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <PieChart />
//         <DonutChart />
//       </div>
//     </div>
//   </div>

//   <div className="card mt-4">
//     <div className="flex items-center p-4 border-b">
//       <h5 className="font-medium text-gray-600 mb-0">Top Selling Products</h5>
//     </div>
//     <div className="p-0">
//       <div className="overflow-x-auto mt-3 mb-3">
//         <table className="table-auto w-full text-left text-gray-600">
//           <thead className="bg-gray-100 text-gray-600">
//             <tr>
//               <th className="py-2 px-4">Product ID</th>
//               <th className="py-2 px-4">Product Name</th>
//               <th className="py-2 px-4">Sales</th>
//               <th className="py-2 px-4">Quantity</th>
//               <th className="py-2 px-4">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bestSellingProducts.map((product) => (
//               <tr key={product.product_id}>
//                 <td className="py-2 px-4 text-gray-500">{product.product_id}</td>
//                 <td className="py-2 px-4 text-gray-500">{product.name_}</td>
//                 <td className="py-2 px-4 text-gray-500">{product.sales}</td>
//                 <td className="py-2 px-4 text-gray-500">{product.quantity}</td>
//                 <td className="py-2 px-4 text-gray-500">${product.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </PageLayout>

<PageLayout pageTitle="Dashboard">
{/* <!-- Metrics Cards --> */}
<div className="flex flex-wrap -mx-4 mb-10">
  {/* Card 1: Total Revenue */}
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
    <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
      <p className="uppercase text-sm font-medium text-gray-500">
        Total Revenue
      </p>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-2xl font-semibold text-gray-800">${totalRevenue}</h4>
        <span className="bg-blue-100 text-blue-500 rounded p-2">
          <AiOutlineDollar size={20} />
        </span>
      </div>
    </div>
  </div>

  {/* Card 2: Net Profit */}
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
    <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
      <p className="uppercase text-sm font-medium text-gray-500">
        Net Profit
      </p>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-2xl font-semibold text-gray-800">${numofCustomers}</h4>
        <span className="bg-green-100 text-green-500 rounded p-2">
          <AiOutlineDollar size={20} />
        </span>
      </div>
    </div>
  </div>

  {/* Card 3: Total Orders */}
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
    <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
      <p className="uppercase text-sm font-medium text-gray-500">
        Total Orders
      </p>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-2xl font-semibold text-gray-800">{totalOrders}</h4>
        <span className="bg-teal-100 text-teal-500 rounded p-2">
          <IoBagOutline size={20} />
        </span>
      </div>
    </div>
  </div>

  {/* Card 4: Customers */}
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
    <div className="bg-white shadow rounded-lg p-6 transform transition duration-300 hover:scale-105">
      <p className="uppercase text-sm font-medium text-gray-500">
        Customers
      </p>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-2xl font-semibold text-gray-800">${numofCustomers}</h4>
        <span className="bg-yellow-100 text-yellow-500 rounded p-2">
          <FaRegUser size={20} />
        </span>
      </div>
    </div>
  </div>
</div>

{/* <!-- Revenue by Month Card --> */}
<div className="bg-white shadow rounded-lg p-6 mb-6">
  <div className="flex items-center mb-4">
    <h5 className="flex-grow text-gray-500">Revenue by Month</h5>
  </div>
  {/* Add your Revenue by Month content here */}
  
</div>

{/* <!-- Sales Charts Card --> */}
<div className="bg-white shadow rounded-lg p-6 mb-6">
  <div className="flex items-center mb-4">
    <h5 className="flex-grow text-gray-500">Sales</h5>
  </div>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
      <PieChart />
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <DonutChart />
    </div>
  </div>
</div>

{/* <!-- Top Selling Products Card --> */}
<div className="bg-white shadow rounded-lg p-6">
  <div className="flex items-center mb-4">
    <h5 className="flex-grow text-gray-500">Top Selling Products</h5>
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
