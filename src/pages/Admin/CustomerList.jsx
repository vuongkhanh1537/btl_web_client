import CustomerTableList from "../../components/Tables/CustomerTableList";
import PageLayout from "../../Layouts/PageLayout";

function CustomerList({ customerData, setCustomerData }) {
  return (
    <PageLayout pageTitle="Customer List">
      <div className="table-list">
        <div className="table-header"></div>
        <div className="table-body">
          <CustomerTableList
            customerData={customerData}
            setCustomerData={setCustomerData}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default CustomerList;
