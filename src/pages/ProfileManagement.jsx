import React, { useState } from 'react';

function ProfileManagement() {
  const [pictures, setPictures] = useState([]);
  const [bio, setBio] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [preferences, setPreferences] = useState('');

  const handlePictureUpload = (event) => {
    const files = Array.from(event.target.files);
    setPictures(files.slice(0, 5)); // Limit to 5 pictures
  };

  const handleSaveProfile = () => {
    // Implement save profile logic here
    console.log('Profile saved:', { pictures, bio, hobbies, preferences });
  };

  return (
    <div>
      <h2>Profile Management</h2>
      <div>
        <label>Upload Pictures (1-5):</label>
        <input type="file" multiple accept="image/*" onChange={handlePictureUpload} />
        <div>
          {pictures.map((picture, index) => (
            <img key={index} src={URL.createObjectURL(picture)} alt={`Profile ${index + 1}`} width="100" />
          ))}
        </div>
      </div>
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <div>
        <label>Hobbies:</label>
        <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
      </div>
      <div>
        <label>Sexual Preferences:</label>
        <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
      </div>
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
}

export default ProfileManagement;
