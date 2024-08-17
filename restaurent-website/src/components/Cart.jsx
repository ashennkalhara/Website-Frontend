import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

const Cart = () => {
  const { cart, removeFromCart, isCartVisible, toggleCartVisibility, calculateTotal } = useContext(CartContext);
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayNowClick = () => {
    setPaymentFormVisible(true);
  };

  const handleClosePaymentForm = () => {
    setPaymentFormVisible(false);
    setErrorMessage(''); // Clear any previous error messages
  };

  const validatePaymentForm = () => {
    if (!name || !cardNumber || !expiryDate || !cvv) {
      setErrorMessage('All fields are required.');
      return false;
    }
    // Add more validation logic if needed
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validatePaymentForm()) {
      return; // Prevent submission if validation fails
    }

    const paymentDetails = {
      name,
      items: cart.map(item => ({
        title: item.title,
        price: parseFloat(item.price.replace(/[^\d.-]/g, '')) // Remove currency symbols and convert to number
      })),
      total: parseFloat(calculateTotal().replace(/[^\d.-]/g, '')), // Remove currency symbols and convert to number
      cardNumber,
      expiryDate,
      cvv
    };

    try {
      const response = await axios.post('/api/payments', paymentDetails);
      if (response.status === 200) {
        alert(`Payment successful for ${name}`);
        setPaymentFormVisible(false);
      }
    } catch (error) {
      console.error('Payment failed:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.error : 'Payment failed. Please try again.');
    }
  };

  return (
    <div
      className={`fixed top-20 right-5 bg-white p-5 shadow-xl rounded-lg w-72 transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} z-10`}
    >
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
        onClick={toggleCartVisibility}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 bg-gray-50 p-2 rounded-lg">
              <span className="text-gray-700 font-medium">{item.title}</span>
              <button
                className="text-red-500 hover:text-red-700 transition-colors"
                onClick={() => removeFromCart(item)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <span className="font-bold text-gray-800">Total:</span>
            <span className="font-bold text-gray-800">{`LKR ${calculateTotal()}`}</span>
          </div>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full font-medium transition-colors"
            onClick={handlePayNowClick}
          >
            Pay Now
          </button>
        </>
      )}

      {isPaymentFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
              onClick={handleClosePaymentForm}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Details</h2>
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
            <form onSubmit={handlePayment}>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="flex justify-between gap-4 mb-6">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-medium transition-colors"
              >
                Confirm Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
