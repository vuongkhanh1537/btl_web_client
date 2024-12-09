import OrderListTable from "../../components/Tables/OrderListTable";
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
        ? order.status_ == filters.status
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
    // console.log("filteredData: ", filteredData);
    // console.log("orderData: ", orderData);
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
          <div className="flex flex-wrap w-full gap-y-2 gap-x-0">
            {/* Start Date */}
            <div className="w-full sm:w-6/12 pr-6">
              <TextInput
                type="date"
                label="Start Date"
                name="startDate"
                value={filters.startDate}
                handleChange={handleFilterChange}
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* End Date */}
            <div className="w-full sm:w-6/12 pr-6">
              <TextInput
                type="date"
                label="End Date"
                name="endDate"
                value={filters.endDate}
                handleChange={handleFilterChange}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {/* Filters Section */}
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Status Filter */}
                <div>
                  <SelectInput
                    label="Status"
                    name="status"
                    options={statusOptions}
                    value={filters.status}
                    handleChange={handleFilterChange}
                  />
                </div>
                {/* Payment Filter */}
                <div>
                  <SelectInput
                    label="Payment"
                    name="paymentMethod"
                    options={paymentOptions}
                    value={filters.paymentMethod}
                    handleChange={handleFilterChange}
                  />
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={applyFilter}
                >
                  Filter
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={resetFilter}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order List Table */}
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
