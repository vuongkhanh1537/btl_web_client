function OrderTable({selectedOrder }) {

  console.log(selectedOrder);
const orderProducts = selectedOrder.products;
  const subTotal = orderProducts.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);
  return (
   
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
                  {orderProduct.product_name}
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
        <td className="px-6 py-4 text-center">${subTotal}</td>
      </tr>

      {/* Shipping Fee */}
      <tr className="border-t">
        <td colSpan="3" className="px-1 py-4 text-right font-semibold">
          Shipping Fee:
        </td>
        <td className="px-6 py-4 text-center">
          ${Number(selectedOrder.ship_fee).toFixed(2)}
        </td>
      </tr>

      {/* Grand Total */}
      <tr className="border-t">
        <td colSpan="3" className="px-1 py-4 text-right font-bold">
          Grand Total (USD):
        </td>
        <td className="px-6 py-4 text-center font-bold">
          ${(Number(subTotal) + Number(selectedOrder.ship_fee)).toFixed(2)}
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
}

export default OrderTable;
