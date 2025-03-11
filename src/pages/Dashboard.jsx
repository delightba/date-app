import React, { useState, useEffect } from 'react';
import { FaHeart, FaTimes, FaUserPlus, FaUserCircle } from 'react-icons/fa'; // Import FaUserCircle for profile icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css'; // Import the CSS file for styling

function Dashboard() {
  const [likedPeople, setLikedPeople] = useState([]);
  const [connections, setConnections] = useState([]);
  const [advisor, setAdvisor] = useState('Heather'); // Example advisor
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch liked people and connections from an API or local storage
    // For now, we'll use dummy data
    setLikedPeople([
      { id: 1, name: 'John Doe', age: 28, city: 'New York', hasPicture: true },
      { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles', hasPicture: false },
      { id: 3, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 4, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 5, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 6, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 7, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 8, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 9, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 10, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 11, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 12, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    ]);

    setConnections([
      { id: 3, name: 'Alice Johnson', age: 30, city: 'Chicago', hasPicture: true },
      { id: 4, name: 'Bob Brown', age: 27, city: 'Houston', hasPicture: false },
      { id: 5, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 6, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 7, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 8, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 9, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 10, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 11, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 12, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 13, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 14, name: 'Bob Brown', age: 27, city: 'Houston' },
      { id: 15, name: 'Bob Brown', age: 27, city: 'Houston' },
    ]);
  }, []);

  const handlePurchaseService = (service) => {
    console.log(`Purchased service: ${service}`);
    // Implement purchase logic here
  };

  const handleUnlockProfile = (person) => {
    navigate('/payment-page', { state: { service: 'Unlock Profile', person } });
  };

  const handleIntermediaryCommunication = (person) => {
    navigate('/payment-page', { state: { service: 'Intermediary Communication', person } });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="section">
        <h3>People You Like</h3>
        <div className="cards">
          {likedPeople.map(person => (
            <div key={person.id} className="card">
              <div className="card-header">
                <h4>{person.name}</h4>
                <div className="card-actions">
                  {person.hasPicture ? (
                    <img src="path/to/profile/picture.jpg" alt="Profile" className="profile-picture" />
                  ) : (
                    <FaUserCircle className="profile-icon" />
                  )}
                  <FaHeart className="icon like" />
                  <FaTimes className="icon cancel" />
                </div>
              </div>
              <p>{person.age} - {person.city}</p>
              <button className="connect-btn" onClick={() => handleUnlockProfile(person)}><FaUserPlus /> Connect</button>
              <button className="intermediary-btn" onClick={() => handleIntermediaryCommunication(person)}>Use Intermediary</button>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h3>People Who Want to Connect with You</h3>
        <div className="cards">
          {connections.map(person => (
            <div key={person.id} className="card">
              <div className="card-header">
                <h4>{person.name}</h4>
                <div className="card-actions">
                  {person.hasPicture ? (
                    <img src="path/to/profile/picture.jpg" alt="Profile" className="profile-picture" />
                  ) : (
                    <FaUserCircle className="profile-icon" />
                  )}
                  <FaHeart className="icon like" />
                  <FaTimes className="icon cancel" />
                </div>
              </div>
              <p>{person.age} - {person.city}</p>
              <button className="connect-btn" onClick={() => handleUnlockProfile(person)}><FaUserPlus /> Connect</button>
              <button className="intermediary-btn" onClick={() => handleIntermediaryCommunication(person)}>Use Intermediary</button>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h3>Your Advisor: {advisor}</h3>
        <p>Receive guidance and support from your assigned advisor.</p>
        <div className="advisor-services">
          <h4>Additional Services</h4>
          <ul>
            <li>
              <span>Personalized Coaching Session</span>
              <button onClick={() => handlePurchaseService('Personalized Coaching Session')} className="default-btn reverse"><span>Purchase</span></button>
            </li>
            <li>
              <span>Relationship Advice Package</span>
              <button onClick={() => handlePurchaseService('Relationship Advice Package')} className="default-btn reverse"><span>Purchase</span></button>
            </li>
            <li>
              <span>Monthly Check-ins</span>
              <button onClick={() => handlePurchaseService('Monthly Check-ins')} className="default-btn reverse"><span>Purchase</span></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;