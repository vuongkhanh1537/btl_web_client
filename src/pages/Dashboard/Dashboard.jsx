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
    <PageLayout pageTitle="Dashboard">
      {/* <div className="row mb-3">Good morning </div> */}

      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Total Revenue{" "}
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">${totalRevenue}</h4>
                <span className="bg-primary-subtle fs-13 rounded p-2">
                  <AiOutlineDollar size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">Net Profit</p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">${numofCustomers}</h4>
                <span className="bg-success-subtle fs-13 rounded p-2">
                  <AiOutlineDollar size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Total Orders
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">{totalOrders}</h4>
                <span className="bg-info-subtle fs-13 rounded p-2">
                  <IoBagOutline size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">Customers</p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">${numofCustomers}</h4>
                <span className="bg-warning-subtle fs-13 rounded p-2">
                  <FaRegUser size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-header d-flex align-items-center ">
          <h5 className="card-title flex-grow-1 text-muted mb-0">
            Revenue by month
          </h5>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header d-flex align-items-center ">
          <h5 className="card-title flex-grow-1 text-muted mb-0">Sales</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <PieChart />
            </div>
            <div className="col-lg-6">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header d-flex align-items-center">
          <h5 className="card-title text-muted mb-0">Top Selling Products</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive table-card mt-3 mb-3">
            <table className="table table-nowrap table-hover align-middle mb-0">
              <thead className="table-light text-muted">
                <tr>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Sales</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bestSellingProducts.map((product) => (
                  <tr key={product.product_id}>
                    <td className="text-muted">{product.product_id}</td>
                    <td className="text-muted">{product.name_}</td>
                    <td className="text-muted">{product.sales}</td>
                    <td className="text-muted">{product.quantity}</td>
                    <td className="text-muted">${product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
