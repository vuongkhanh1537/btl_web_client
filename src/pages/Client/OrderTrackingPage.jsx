import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

const OrderTrackingPage = () => {
  const data = useLoaderData();
  console.log(data.data);



  const dataLoader = data?.data?.orders?.orders.map(order => ({
    id: order.order_id,
    date: order.order_time,
    status: order.status,
    items: order.items.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price
    })),
    total: order.total_price,
    comment: null
  })) || [];
  
  const [orders, setOrders] = useState(dataLoader);

  const [editingOrderId, setEditingOrderId] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = (orderId) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { ...order, comment: { text: newComment, rating: rating } }
        : order
    );
    
    setOrders(updatedOrders);
    setEditingOrderId(null);
    setNewComment('');
    setRating(0);
  };

  const renderStarRating = (orderId) => {
    return [1, 2, 3, 4, 5].map(starValue => (
      <Star
        key={starValue}
        color={starValue <= rating ? '#FFD700' : '#E0E0E0'}
        fill={starValue <= rating ? '#FFD700' : 'none'}
        className="cursor-pointer mr-1"
        onClick={() => setRating(starValue)}
      />
    ));
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      <p className='text-gray-600 mt-2'>Your awesome orders that you deserved</p>
      </div>

      {orders.map(order => (
        <Card key={order.id} className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Order #{order.id}</CardTitle>
              <span className={`
                ${order.status === 'Completed' ? 'text-green-600' : 'text-blue-600'}
                font-semibold
              `}>
                {order.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p>Order Date: {order.date}</p>
              <div className="mt-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>

            {order.status === 'Completed' && (
              <div className="mt-4">
                {order.comment ? (
                  <div className="bg-gray-100 p-3 rounded">
                    <div className="flex items-center mb-2">
                      <span className="mr-2">Your Rating:</span>
                      {[1, 2, 3, 4, 5].map(starValue => (
                        <Star
                          key={starValue}
                          color={starValue <= order.comment.rating ? '#FFD700' : '#E0E0E0'}
                          fill={starValue <= order.comment.rating ? '#FFD700' : 'none'}
                          size={20}
                        />
                      ))}
                    </div>
                    <p>{order.comment.text}</p>
                  </div>
                ) : (
                  <div>
                    {editingOrderId === order.id ? (
                      <div>
                        <div className="mb-2 space-y-2">
                          <span className="mr-2 font-bold">Rate Your Experience:</span>
                          <div className="flex gap-2">
                          {renderStarRating(order.id)}
                          </div>
                        </div>
                        <Textarea 
                          placeholder="Write your comment here..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="mb-2"
                        />
                        <Button 
                          onClick={() => handleAddComment(order.id)}
                          disabled={rating === 0 || newComment.trim() === ''}
                        >
                          Submit Comment
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        onClick={() => setEditingOrderId(order.id)}
                      >
                        Leave a Comment
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default OrderTrackingPage;