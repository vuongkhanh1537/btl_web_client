import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CreditCard, Truck, MapPin } from "lucide-react";
import DeliveryAddress from "@/components/DeliveryAddress";
import { useNavigate } from "react-router-dom";
import { useHome } from "@/providers/HomeProvider";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useHome();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 30000;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen mx-auto px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Payment</h1>
          <p className="text-gray-600 mt-2">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            <DeliveryAddress />

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="card" className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Credit/Debit Card
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="grid gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          className="w-full p-2 border rounded-md"
                          placeholder="1234 5678 9012 3456"
                          value={cardData.cardNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            className="w-full p-2 border rounded-md"
                            placeholder="MM/YY"
                            value={cardData.expiryDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            className="w-full p-2 border rounded-md"
                            placeholder="123"
                            value={cardData.cvv}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="cod" className="flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">
                        {item.price.toLocaleString()}đ
                      </p>
                    </div>
                  ))}

                  <hr className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>{subtotal.toLocaleString()}đ</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Delivery Fee</p>
                      <p>{shipping.toLocaleString()}đ</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <p>Total</p>
                      <p>{total.toLocaleString()}đ</p>
                    </div>
                  </div>

                  <button
                    className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors"
                    onClick={() => {
                      // Xử lý logic thanh toán ở đây
                      navigate("success");
                    }}
                  >
                    Order Now
                  </button>

                  <Alert>
                    <AlertDescription className="text-sm">
                      By placing your order, you agree to our <span className="underline cursor-pointer text-blue-700">Terms of Use and Privacy Policy</span>.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
