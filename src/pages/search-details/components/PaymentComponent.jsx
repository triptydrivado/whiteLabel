import React, { useState } from 'react';
import { useRazorpay } from 'react-razorpay';
import axios from 'axios';

const PaymentComponent = () => {
  const { error, isLoading, Razorpay } = useRazorpay();
  const [orderId, setOrderId] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      // Fetch order ID from your backend
      const response = await axios.post('/create-order', { amount: 100 });
      setOrderId(response.data.id);

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: response.data.amount,
        currency: response.data.currency,
        order_id: response.data.id,
        name: 'Your Company',
        description: 'Payment for your product',
        // handler: (response: any) => {
        //   // Handle successful payment
        //   console.log('Payment successful:', response);
        // },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
          contact: '1234567890',
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (err) {
      // Handle error
      console.error(err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
};

export default PaymentComponent;