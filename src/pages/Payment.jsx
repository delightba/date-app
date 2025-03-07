import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    console.log('Payment successful');
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  const handlePaymentFailure = () => {
    console.log('Payment failed');
    // Handle payment failure
  };

  const handlePayment = () => {
    // Simulate payment process
    setTimeout(handlePaymentSuccess, 2000); // Simulate successful payment after 2 seconds
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <p>Please proceed with the payment of $39.99 for a yearly subscription.</p>
      <button onClick={handlePayment} className="default-btn reverse"><span>Pay $39.99</span></button>
    </div>
  );
}

export default Payment;
