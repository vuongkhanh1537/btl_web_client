import OrderListTable from "../../components/Order/OrderListTable";
import PageLayout from "../../Layouts/PageLayout";
import { useEffect, useState } from "react";
import TextInput from "../../components/FormInput/TextInput";
import SelectInput from "../../components/FormInput/SelectInput";
import { paymentOptions, statusOptions } from "../../utils/selectOptions";

// const initialFilter = {};
function OrderList({ orderData, setOrderData }) {
  const [filteredOrderData, setFilteredOrderData] = useState(orderData);
  const [filters, setFilters] = useState({
    status: "",
    paymentMethod: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    setFilteredOrderData(orderData);
  }, [orderData]);

  function handleFilterChange(event) {
    const { name, value } = event.target;
    const newFilter = { ...filters, [name]: value };
    setFilters(newFilter);
  }

  function applyFilter() {
    const filteredData = orderData.filter(function (order) {
      let matchedStatus = filters.status
        ? order.status == filters.status
        : true;
      let matchedPayment = filters.paymentMethod
        ? order.payment_method == filters.paymentMethod
        : true;

      // Normalize the order's date (set the time to 00:00:00)
      const normalizeDate = (date) => new Date(date.setHours(0, 0, 0, 0));
      const orderDate = normalizeDate(new Date(order.order_time));

      const matchedStartDate = filters.startDate
        ? normalizeDate(new Date(filters.startDate)) <= orderDate
        : true;
      const matchedEndDate = filters.endDate
        ? normalizeDate(new Date(filters.endDate)) >= orderDate
        : true;

      return (
        matchedStatus && matchedPayment && matchedStartDate && matchedEndDate
      );
    });
    console.log("filteredData: ", filteredData);
    console.log("orderData: ", orderData);
    setFilteredOrderData(filteredData);
  }

  function resetFilter() {
    setFilters({
      status: "",
      paymentMethod: "",
      startDate: "",
      endDate: "",
    });
    setFilteredOrderData(orderData);
  }
  return (
    <PageLayout pageTitle="Orders List">
      <div className="table-list">
        <div className="table-header">
          <div className="row width-100">
            <div className="col-sm-6">
              <TextInput
                type="date"
                label="Start Date"
                name="startDate"
                value={filters.startDate}
                handleChange={handleFilterChange}
                placeholder="dd-mm-yyyy"
              />
            </div>

            <div className="col-sm-6">
              <TextInput
                type="date"
                label="End Date"
                name="endDate"
                value={filters.endDate}
                handleChange={handleFilterChange}
              />
            </div>

            <div className="col-sm-8 d-flex gap-3">
              <SelectInput
                className="col-sm-6"
                label="Status"
                name="status"
                options={statusOptions}
                value={filters.status}
                handleChange={handleFilterChange}
              />
              <SelectInput
                className="col-sm-6"
                label="Payment"
                name="paymentMethod"
                options={paymentOptions}
                value={filters.paymentMethod}
                handleChange={handleFilterChange}
              />
            </div>
            <div className="col-sm-4 d-flex gap-3 justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-success"
                onClick={applyFilter}
              >
                Filter
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetFilter}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Pass the filterData to the List, but we modilfy the primary orderData */}
        <OrderListTable
          orderData={orderData}
          filteredOrderData={filteredOrderData}
          setOrderData={setOrderData}
        />
      </div>
    </PageLayout>
  );
}

export default OrderList;
