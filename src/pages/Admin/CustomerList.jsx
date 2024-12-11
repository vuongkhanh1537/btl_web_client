import { useEffect, useState } from "react";
import CustomerTableList from "../../components/Tables/CustomerTableList";
import PageLayout from "../../Layouts/PageLayout";
import { initialCustomersData } from "../../datas/customerData";
import { fetchCustomersData } from "../../services/CustomerService";

function CustomerList() {
  const [customerData, setCustomerData] = useState(initialCustomersData);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => { 
    async function fetchCustomers() {
      try {
        setIsLoading(true);
        const data = await fetchCustomersData();
        console.log(data);
        setCustomerData(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchCustomers();
  },[])

  if(isLoading){
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-"></div>
    </div>
  }

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
