function OrderTable({selectedOrder }) {

const orderProducts = selectedOrder.order_products;
  return (
    <div className="table-responsive table-card">
      <table className="table table-nowrap align-middle table-borderless mb-0">
        <thead className="table-light text-muted">
          <tr>
            <th scope="col" className="text-muted">Product</th>
            <th scope="col" className="text-muted">Item Price</th>
            <th scope="col" className="text-muted">Quantity</th>
            <th scope="col" class="text-end text-muted">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {orderProducts.map((orderProduct) => (
            <tr key={orderProduct.product_id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <img
                      src={orderProduct.product_image}
                      alt="product"
                      className="rounded"
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-1 text-primary-emphasis">{orderProduct.name}</h6>
                  </div>
                </div>
              </td>
              <td>${orderProduct.price}</td>
              <td>{orderProduct.quantity}</td>
              <td className="text-end">${orderProduct.price * orderProduct.quantity}</td>
            </tr>
            
          ))}
          <tr className="border-top border-top-dashed">
               <td colSpan="3" className="text-end">
                <span className="fw-normal ">Sub Total:</span>
              </td>
              <td className="text-end">${selectedOrder.total}</td>
              </tr>
            <tr>
              
              <td colSpan="3" className="text-end"><span className="fw-normal">Shipping Fee:</span></td>
              <td className="text-end">${selectedOrder.ship_fee.toFixed(2)}</td>
            </tr>

            <tr className="">
            <td colSpan="3" className="text-end">
              <span className="fw-semibold">Grand Total(USD):</span>
            </td>
            <td className="text-end fw-bold">${(selectedOrder.total + selectedOrder.ship_fee).toFixed(2)}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
