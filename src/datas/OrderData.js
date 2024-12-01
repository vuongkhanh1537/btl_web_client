const initialOrderData = [
  {
    order_id: 1,
    order_time: '2024-05-06T10:00:00Z',
    shipment_time: '2024-11-07T12:00:00Z',
    total: 265,
    ship_fee: 10.00,
    payment_method: 'Credit Card',
    payment_time: '2024-11-06T10:30:00Z',
    status: 'Delivered',
    shipping_address: '123 Main St, Anytown, USA',
    customer_id: 101,
    order_products: [
      {
        product_image: "../assets/img/giayAdidas.avif",
        product_id: 501,
        name: 'Product A',
        quantity: 2,
        price: 50.00
      },
      {
        product_image: '../assets/img/giayAdidas.avif',
        product_id: 502,
        name: 'Product B',
        quantity: 3,
        price: 40.00
      },
      {
        product_image: '../assets/img/giayAdidas.avif',
        product_id: 503,
        name: 'Product C',
        quantity: 1,
        price: 75.00
      }
    ]
  },
    {
      order_id: 2,
      order_time: '2024-11-19T11:00:00Z',
      shipment_time: '2024-11-08T14:00:00Z',
      total: 270,
      ship_fee: 15.00,
      payment_method: 'Banking',
      payment_time: '2024-11-06T11:15:00Z',
      status: 'Pending',
      shipping_address: '456 Elm St, Othertown, USA',
      customer_id: 102,
      order_products: [
        {
          product_image: "../assets/img/giayAdidas.avif",
          product_id: 501,
          name: 'Product A',
          quantity: 2,
          price: 50.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 502,
          name: 'Product B',
          quantity: 3,
          price: 40.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 503,
          name: 'Product C',
          quantity: 1,
          price: 75.00
        }
      ]
    },
    {
      order_id: 3,
      order_time: '2024-12-06T12:00:00Z',
      shipment_time: '2024-11-09T16:00:00Z',
      total: 265,
      ship_fee: 8.00,
      payment_method: 'Debit Card',
      payment_time: '2024-11-06T12:30:00Z',
      status: 'Inprogress',
      shipping_address: '789 Oak St, Smalltown, USA',
      customer_id: 103,
      order_products: [
        {
          product_image: "../assets/img/giayAdidas.avif",
          product_id: 501,
          name: 'Product A',
          quantity: 2,
          price: 50.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 502,
          name: 'Product B',
          quantity: 3,
          price: 40.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 503,
          name: 'Product C',
          quantity: 1,
          price: 75.00
        }
      ]
    },
    {
      order_id: 4,
      order_time: '2024-07-06T13:00:00Z',
      shipment_time: '2024-11-10T18:00:00Z',
      total: 265,
      ship_fee: 12.50,
      payment_method: 'Cash on Delivery',
      payment_time: '2024-11-06T13:45:00Z',
      status: 'Cancelled',
      shipping_address: '101 Pine St, Bigcity, USA',
      customer_id: 104,
      order_products: [
        {
          product_image: "../assets/img/giayAdidas.avif",
          product_id: 501,
          name: 'Product A',
          quantity: 2,
          price: 50.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 502,
          name: 'Product B',
          quantity: 3,
          price: 40.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 503,
          name: 'Product C',
          quantity: 1,
          price: 75.00
        }
      ]
    },
    {
      order_id: 5,
      order_time: '2024-11-06T14:00:00Z',
      shipment_time: '2024-11-11T20:00:00Z',
      total: 265,
      ship_fee: 20.00,
      payment_method: 'Credit Card',
      payment_time: '2024-11-06T14:30:00Z',
      status: 'Delivered',
      shipping_address: '202 Birch St, Middletown, USA',
      customer_id: 105,
      order_products: [
        {
          product_image: "../assets/img/giayAdidas.avif",
          product_id: 501,
          name: 'Product A',
          quantity: 2,
          price: 50.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 502,
          name: 'Product B',
          quantity: 3,
          price: 40.00
        },
        {
          product_image: '../assets/img/giayAdidas.avif',
          product_id: 503,
          name: 'Product C',
          quantity: 1,
          price: 75.00
        }
      ]
    }
  ];

export default initialOrderData;