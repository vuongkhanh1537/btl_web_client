import { _, Grid } from "gridjs-react";
import { formatDate } from "../../utils/formatDateTime";
import { Tooltip } from "@mui/material";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";


function CustomerTableList({ customerData, setCustomerData }) {
  return (
    <>
      <Grid
        data={customerData.map((customer) => [
          customer.user_id,
          customer.name_,
          customer.gender,
          customer.email,
          formatDate(customer.birthday),
          
          
          _(
            <div className="flex gap-1">
              <Tooltip title="View" placement="top">
                <button
                  className="px-2 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-200 transition"
                //   onClick={() => handleClickView(product.product_id)}
                >
                  <MdOutlineRemoveRedEye />{" "}
                </button>
              </Tooltip>
              <Tooltip title="Edit" placement="top">
                <button
                  className="px-2 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-700 transition"
                //   onClick={() => handleClickEdit(product.product_id)}
                >
                  <AiOutlineEdit />{" "}
                </button>
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <button
                  className="px-2 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-700 transition"
                //   onClick={() => handleClickDelete(product.product_id)}
                >
                  <MdOutlineDelete />{" "}
                </button>
              </Tooltip>
            </div>
          ),
        ])}
        columns={[
          "ID",
          "Customer Name",
          "Gender",
          "Email",
          "Birthday",
          "Action",
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
    </>
  );
}

export default CustomerTableList;
