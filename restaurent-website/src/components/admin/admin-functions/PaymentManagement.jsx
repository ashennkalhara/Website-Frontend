import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'; 

const PaymentManagement = () => {
    const [payments, setPayments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchPayments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/payments');
            console.log('Fetched payments:', response.data); 
            setPayments(response.data);
        } catch (error) {
            console.error('Error fetching payment data:', error);
            setErrorMessage('Failed to fetch payment data. Please try again later.');
        }
    };

    const confirmPayment = async (paymentId) => {
        try {
            await axios.post(`http://localhost:3000/api/payments/confirm/${paymentId}`);
            alert('Payment confirmed!');
            fetchPayments(); 
        } catch (error) {
            console.error('Error confirming payment:', error);
            alert('Failed to confirm payment. Please try again.');
        }
    };

    const markOrderAsReady = async (paymentId) => {
        try {
            await axios.post(`http://localhost:3000/api/payments/ready/${paymentId}`);
            alert('Order marked as ready!');
            fetchPayments(); 
        } catch (error) {
            console.error('Error marking order as ready:', error);
            alert('Failed to mark order as ready. Please try again.');
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const currentDate = new Date();
        return isNaN(date.getTime()) ? currentDate.toLocaleDateString() : date.toLocaleDateString();
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Order Management</h1>
            {errorMessage && <p className="text-red-600 text-center mb-6">{errorMessage}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {payments.length > 0 ? (
                    payments.map(payment => (
                        <div 
                            key={payment._id} 
                            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${payment.status === 'Ready' ? 'border-orange-500' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{payment.name}</h2>
                            <div className="mb-4">
                                <strong className="text-gray-700">Items:</strong>
                                <ul className="list-disc pl-5 text-gray-700">
                                    {payment.items && payment.items.length > 0 ? (
                                        payment.items.map((item, index) => (
                                            <li key={index}>
                                                {item.title || 'No title'} - Rs.{item.price || '0.00'}
                                            </li>
                                        ))
                                    ) : (
                                        <li>No items</li>
                                    )}
                                </ul>
                            </div>
                            <p className="text-gray-700 mb-2"><strong>Total:</strong> Rs.{payment.total.toFixed(2)}</p>
                            <p className="text-gray-700 mb-4"><strong>Date:</strong> {formatDate(payment.date)}</p>
                            <div className="flex space-x-2">
                                {/* Conditional button rendering based on payment status */}
                                {payment.status === 'Confirmed' ? (
                                    <button 
                                        className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50"
                                        disabled
                                    >
                                        Confirmed
                                    </button>
                                ) : (
                                    <button 
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600"
                                        onClick={() => confirmPayment(payment._id)}
                                    >
                                        Confirm
                                    </button>
                                )}
                                {payment.status === 'Ready' ? (
                                    <button 
                                        className="bg-orange-500 text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50"
                                        disabled
                                    >
                                        Ready
                                    </button>
                                ) : (
                                    <button 
                                        className="bg-yellow-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-yellow-600"
                                        onClick={() => markOrderAsReady(payment._id)}
                                    >
                                        Ready
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700 text-center">No payments found.</p>
                )}
            </div>
        </div>
    );
};

export default PaymentManagement;
