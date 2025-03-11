import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, person } = location.state;

  const handlePayment = () => {
    // Implement payment logic here
    console.log(`Payment successful for ${service} of ${person.name}`);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Service: {service}</p>
      <p>Person: {person.name}</p>
      <button onClick={handlePayment}>Pay $9.99</button>
    </div>
  );
}

export default PaymentPage;
