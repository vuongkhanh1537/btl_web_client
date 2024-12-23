import React, { useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Package, Truck, Clock, ChevronRight, Home, Printer } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatCurrency } from '@/utils/CurrencyUtils';
import { useHome } from '@/providers/HomeProvider';

const OrderSuccess = () => {
    const { setCartItems } = useHome(); 
    const navigate = useNavigate();
    const location = useLocation();
    const { orderId, cartItems, address, paymentMethod, shipping, subtotal, total, discountValue } = location.state || {};
    // Simulated order data

    useEffect(() => {
        // Clear cart after successful order
        setCartItems([]);
    }, [setCartItems]);



    const orderDetails = {
        orderId: orderId || "12",
        orderDate: new Date().toLocaleDateString(),
        expectedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        paymentMethod: paymentMethod || "Credit Card",
        shippingAddress: address,
        items: cartItems.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        subtotal: subtotal,
        shipping: shipping,
        discountValue: discountValue,
        total: total
    };

    const steps = [
        { icon: Package, text: "Order confirmed" },
        { icon: Truck, text: "Shipping" },
        { icon: Home, text: "Delivered" }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            {/* Success notification */}
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Successful!</h1>
                <p className="text-gray-600">
                    Thank you for your purchase. Your order is being processed.
                </p>
            </div>

            {/* Order information */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Order Information #{orderDetails.orderId}</span>
                        <button 
                            className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-700"
                            onClick={() => window.print()}
                        >
                            <Printer className="w-4 h-4" />
                            Print Order
                        </button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-medium mb-2">Order Details</h3>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-gray-600">Order Date:</span> {orderDetails.orderDate}</p>
                                <p><span className="text-gray-600">Expected Delivery:</span> {orderDetails.expectedDelivery}</p>
                                <p><span className="text-gray-600">Payment Method:</span> {orderDetails.paymentMethod}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Shipping Address</h3>
                            <p className="text-sm">{orderDetails.shippingAddress}</p>
                        </div>
                    </div>

                    {/* Order progress */}
                    <div className="mt-8">
                        <h3 className="font-medium mb-4">Order Progress</h3>
                        <div className="flex justify-between items-center">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center flex-1 relative">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                                        ${index === 0 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                                        <step.icon className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs text-center">{step.text}</p>
                                    {index < steps.length - 1 && (
                                        <ChevronRight className="absolute top-3 -right-2 w-4 h-4 text-gray-400" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product details */}
                    <div className="mt-8">
                        <h3 className="font-medium mb-4">Product Details</h3>
                        <div className="space-y-4">
                            {orderDetails.items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="font-medium">{formatCurrency(item.price)}</p>
                                </div>
                            ))}
                            
                            <hr className="my-4" />
                            
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>{formatCurrency(orderDetails.subtotal)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Discount</p>
                                    <p>{formatCurrency(orderDetails.discountValue)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping Fee</p>
                                    <p>{formatCurrency(orderDetails.shipping)}</p>
                                </div>
                                <div className="flex justify-between font-bold text-lg">
                                    <p>Total</p>
                                    <p>{formatCurrency(orderDetails.total)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Useful information */}
            <Alert className="mb-6">
                <AlertDescription>
                    <div className="space-y-2">
                        <p className="font-medium">Useful Information:</p>
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                            <li>You will receive an order confirmation email within a few minutes</li>
                            <li>Track your order in the "My Orders" section</li>
                            <li>Contact us if you need support: 123456789</li>
                        </ul>
                    </div>
                </AlertDescription>
            </Alert>

            {/* Action buttons */}
            <div className="flex gap-4 justify-center">
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => {
                        // Navigate to order tracking page
                        navigate("/orders");
                    }}
                >
                    Track Order
                </button>
                <button
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => {
                        // Navigate to home page
                        navigate("/");
                    }}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
