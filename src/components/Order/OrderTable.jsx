function OrderTable({selectedOrder }) {

const orderProducts = selectedOrder.order_products;
  return (
    // <div className="table-responsive table-card">
    //   <table className="table table-nowrap align-middle table-borderless mb-0">
    //     <thead className="table-light text-muted">
    //       <tr>
    //         <th scope="col" className="text-muted">Product</th>
    //         <th scope="col" className="text-muted">Item Price</th>
    //         <th scope="col" className="text-muted">Quantity</th>
    //         <th scope="col" className="text-end text-muted">
    //           Total Amount
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {orderProducts.map((orderProduct) => (
    //         <tr key={orderProduct.product_id}>
    //           <td>
    //             <div className="d-flex align-items-center">
    //               <div className="avatar avatar-sm flex-shrink-0">
    //                 <img
    //                   src={orderProduct.product_image}
    //                   alt="product"
    //                   className="rounded"
    //                 />
    //               </div>
    //               <div className="ms-3">
    //                 <h6 className="mb-1 text-primary-emphasis">{orderProduct.name}</h6>
    //               </div>
    //             </div>
    //           </td>
    //           <td>${orderProduct.price}</td>
    //           <td>{orderProduct.quantity}</td>
    //           <td className="text-end">${orderProduct.price * orderProduct.quantity}</td>
    //         </tr>
            
    //       ))}
    //       <tr className="border-top border-top-dashed">
    //            <td colSpan="3" className="text-end">
    //             <span className="fw-normal ">Sub Total:</span>
    //           </td>
    //           <td className="text-end">${selectedOrder.total}</td>
    //           </tr>
    //         <tr>
              
    //           <td colSpan="3" className="text-end"><span className="fw-normal">Shipping Fee:</span></td>
    //           <td className="text-end">${selectedOrder.ship_fee.toFixed(2)}</td>
    //         </tr>

    //         <tr className="">
    //         <td colSpan="3" className="text-end">
    //           <span className="fw-semibold">Grand Total(USD):</span>
    //         </td>
    //         <td className="text-end fw-bold">${(selectedOrder.total + selectedOrder.ship_fee).toFixed(2)}</td>
    //       </tr>
          
    //     </tbody>
    //   </table>
    // </div>
    <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
  <table className="min-w-full text-left border-separate border-spacing-y-2">
    <thead className="bg-gray-100 text-gray-500 uppercase text-sm">
      <tr>
        <th scope="col" className="px-6 py-3 text-center">Product</th>
        <th scope="col" className="px-6 py-3 text-center">Item Price</th>
        <th scope="col" className="px-6 py-3 text-center">Quantity</th>
        <th scope="col" className="px-6 py-3 text-right">Total Amount</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      {orderProducts.map((orderProduct) => (
        <tr key={orderProduct.product_id} className="bg-white border-b">
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <img
                src={orderProduct.product_image}
                alt="product"
                className="w-10 h-10 rounded"
              />
              <div>
                <h6 className="text-base font-medium text-gray-800">
                  {orderProduct.name}
                </h6>
              </div>
            </div>
          </td>
          <td className="py-4 text-center">${orderProduct.price}</td>
          <td className="py-4 text-center">{orderProduct.quantity}</td>
          <td className="px-6 py-4 text-center">
            ${orderProduct.price * orderProduct.quantity}
          </td>
        </tr>
      ))}

      {/* Subtotal */}
      <tr className="border-t">
        <td colSpan="3" className="px-1 py-4 text-right font-semibold">
          Sub Total:
        </td>
        <td className="px-6 py-4 text-center">${selectedOrder.total}</td>
      </tr>

      {/* Shipping Fee */}
      <tr className="border-t">
        <td colSpan="3" className="px-1 py-4 text-right font-semibold">
          Shipping Fee:
        </td>
        <td className="px-6 py-4 text-center">
          ${selectedOrder.ship_fee.toFixed(2)}
        </td>
      </tr>

      {/* Grand Total */}
      <tr className="border-t">
        <td colSpan="3" className="px-1 py-4 text-right font-bold">
          Grand Total (USD):
        </td>
        <td className="px-6 py-4 text-center font-bold">
          ${(selectedOrder.total + selectedOrder.ship_fee).toFixed(2)}
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
}

export default OrderTable;
