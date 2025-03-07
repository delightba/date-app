import React, { useState, useEffect } from 'react';
import { FaHeart, FaTimes, FaUserPlus } from 'react-icons/fa';
import './Dashboard.css'; // Import the CSS file for styling

function Dashboard() {
  const [likedPeople, setLikedPeople] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Fetch liked people and connections from an API or local storage
    // For now, we'll use dummy data
    setLikedPeople([
      { id: 1, name: 'John Doe', age: 28, city: 'New York' },
      { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
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
      { id: 3, name: 'Alice Johnson', age: 30, city: 'Chicago' },
      { id: 4, name: 'Bob Brown', age: 27, city: 'Houston' },
    ]);
  }, []);

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
                  <FaHeart className="icon like" />
                  <FaTimes className="icon cancel" />
                </div>
              </div>
              <p>{person.age} - {person.city}</p>
              <button className="connect-btn"><FaUserPlus /> Connect</button>
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
                  <FaHeart className="icon like" />
                  <FaTimes className="icon cancel" />
                </div>
              </div>
              <p>{person.age} - {person.city}</p>
              <button className="connect-btn"><FaUserPlus /> Connect</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; // Corrected export statement