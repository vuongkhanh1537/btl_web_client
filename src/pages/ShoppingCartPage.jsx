import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 3200000,
      size: 42,
      color: "Đen/Trắng",
      quantity: 1,
      image: "/api/placeholder/120/120"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 4100000,
      size: 41,
      color: "Xám",
      quantity: 2,
      image: "/api/placeholder/120/120"
    }
  ]);

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

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Giỏ hàng của bạn</h1>
        
        <div className="bg-white rounded-lg shadow">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Giỏ hàng trống
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
                      Size: {item.size} | Màu: {item.color}
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

          <div className="p-6 bg-gray-50 rounded-b-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Tổng tiền:</span>
              <span className="text-2xl font-bold">
                {totalAmount.toLocaleString('vi-VN')}đ
              </span>
            </div>
            
            <button className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;