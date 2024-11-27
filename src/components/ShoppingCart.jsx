import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';
import { useHome } from '@/providers/HomeProvider';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useHome();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');

  // Giả lập danh sách mã giảm giá
  const validPromoCodes = {
    'SUMMER2024': 10,
    'NEWUSER': 15,
    'SHOES20': 20
  };

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
      setPromoError('');
    } else {
      setDiscount(0);
      setPromoError('Mã giảm giá không hợp lệ');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const totalAmount = subtotal - discountAmount;

  const handleClick = () => {
    navigate("/checkout");
  }

  return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <p className="text-gray-600 mt-2">Review your items</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái - Danh sách sản phẩm */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-6 flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      
                      <div className="ml-6 flex-1">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-600 mt-1">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <div className="mt-2 text-lg font-medium">
                          {item.price.toLocaleString('vi-VN')}đ
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cột phải - Tổng tiền và mã giảm giá */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold mb-4">Order Total</h2>
              
              {/* Mã giảm giá */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Promo code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Enter promo code"
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Submit
                  </button>
                </div>
                {promoError && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{promoError}</AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Chi tiết thanh toán */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%):</span>
                    <span>-{discountAmount.toLocaleString('vi-VN')}đ</span>
                  </div>
                )}
                <div className="border-t pt-3 font-bold text-lg">
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span>{totalAmount.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors" onClick={handleClick}>
                Checkout
              </button>

              {/* Gợi ý mã giảm giá */}
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium mb-2">Promo code can be used:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>SUMMER2024: Discount 10%</li>
                  <li>NEWUSER: Discount 15%</li>
                  <li>SHOES20: Discount 20%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ShoppingCart;