import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PaymentButton = () => {
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        };
        loadScript('https://checkout.razorpay.com/v1/checkout.js');
    }, []);
    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/create-order', { amount: 50000 }); // Amount in paise
            setOrderId(response.data.id);
            const options = {
                key: 'YOUR_KEY_ID',
                amount: response.data.amount,
                currency: response.data.currency,
                name: 'Your Company Name',
                description: 'Test Transaction',
                order_id: response.data.id,
                handler: (paymentResponse) => {
                    // Handle successful payment
                    console.log('Payment successful', paymentResponse);
                    alert('Payment successful');
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '1234567890',
                },
                theme: {
                    color: '#3399cc',
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Error creating order or processing payment', error);
            alert('Payment failed');
        } finally {
            setLoading(false);
        }
    };
    return (
        <button onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
        </button>
    );
};
export default PaymentButton;