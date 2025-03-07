import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisclaimerModal from '../components/DisclaimerModal'; // Import the DisclaimerModal component

function Register() {
  const [pictures, setPictures] = useState(Array(5).fill(null));
  const [bio, setBio] = useState('');
  const [uniqueID, setUniqueID] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the disclaimerAccepted item from local storage
    localStorage.removeItem('disclaimerAccepted');
    setUniqueID(generateUniqueID());
  }, []);

  const handleDisclaimerAccept = () => {
    console.log('Disclaimer accepted');
  };

  const generateUniqueID = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!document.getElementById('username').value) newErrors.username = 'Username is required';
    if (!document.getElementById('email').value) newErrors.email = 'Email is required';
    if (!document.getElementById('password').value) newErrors.password = 'Password is required';
    if (!document.getElementById('confirmPassword').value) newErrors.confirmPassword = 'Confirm Password is required';
    if (!document.getElementById('name').value) newErrors.name = 'Name is required';
    if (!document.getElementById('birthday').value) newErrors.birthday = 'Birthday is required';
    if (!document.querySelector('input[name="gender1"]:checked')) newErrors.gender1 = 'Gender is required';
    if (!document.querySelector('input[name="gender2"]:checked')) newErrors.gender2 = 'Looking for is required';
    if (!document.getElementById('maritalStatus').value) newErrors.maritalStatus = 'Marital status is required';
    if (!document.getElementById('city').value) newErrors.city = 'City is required';
    if (!bio) newErrors.bio = 'Bio is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submit button clicked');
      navigate('/questionnaire'); // Redirect to the questionnaire page
    }
  };

  const handlePictureChange = (index, e) => {
    const newPictures = [...pictures];
    newPictures[index] = e.target.files[0];
    setPictures(newPictures);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      <DisclaimerModal onAccept={handleDisclaimerAccept} />
      {/* ================> login section start here <================== */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-7">
                {/* <div className="logo">
                  <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                </div> */}
              </div>
              {/* <div className="col-lg-4 col-5">
                <a href="index.html" className="backto-home"><i className="fas fa-chevron-left" /> Back to Home</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="image" />
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to SoulFullConnect </h2>
                  <p>Let's create your profile! Just fill in the fields below, and we’ll get a new account. </p>
                </div>
                <div className="main-content">
                  <form onSubmit={handleSubmit}>
                    <h4 className="content-title">Account Details</h4>
                    <div className="form-group">
                      <label>Username*</label>
                      <input type="text" id="username" className="my-form-control" placeholder="Enter Your Username" />
                      {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="form-group">
                      <label>Email Address*</label>
                      <input type="email" id="email" className="my-form-control" placeholder="Enter Your Email" />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label>Password*</label>
                      <input type="text" id="password" className="my-form-control" placeholder="Enter Your Password" />
                      {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="form-group">
                      <label>Confirm Password*</label>
                      <input type="text" id="confirmPassword" className="my-form-control" placeholder="Enter Your Password" />
                      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                    <h4 className="content-title mt-5">Profile Details</h4>
                    <div className="form-group">
                      <label>Name*</label>
                      <input type="text" id="name" className="my-form-control" placeholder="Enter Your Full Name" />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <label>Birthday*</label>
                      <input type="date" id="birthday" className="my-form-control" />
                      {errors.birthday && <p className="error">{errors.birthday}</p>}
                    </div>
                    <div className="form-group">
                      <label>I am a*</label>
                      <div className="banner__inputlist">
                        <div className="s-input me-3">
                          <input type="radio" name="gender1" id="males1" /><label htmlFor="males1">Man</label>
                        </div>
                        <div className="s-input">
                          <input type="radio" name="gender1" id="females1" /><label htmlFor="females1">Woman</label>
                        </div>
                      </div>
                      {errors.gender1 && <p className="error">{errors.gender1}</p>}
                    </div>
                    <div className="form-group">
                      <label>Looking for a*</label>
                      <div className="banner__inputlist">
                        <div className="s-input me-3">
                          <input type="radio" name="gender2" id="males" /><label htmlFor="males">Man</label>
                        </div>
                        <div className="s-input">
                          <input type="radio" name="gender2" id="females" /><label htmlFor="females">Woman</label>
                        </div>
                      </div>
                      {errors.gender2 && <p className="error">{errors.gender2}</p>}
                    </div>
                    <div className="form-group">
                      <label>Marital status*</label>
                      <div className="banner__inputlist">
                        <select id="maritalStatus">
                          <option value="Single" selected>Single</option>
                          <option value="Married">Married</option>
                        </select>
                      </div>
                      {errors.maritalStatus && <p className="error">{errors.maritalStatus}</p>}
                    </div>
                    <div className="form-group">
                      <label>City*</label>
                      <input type="text" id="city" className="my-form-control" placeholder="Enter Your City" />
                      {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                    <div className="form-group">
                      <label>Unique ID*</label>
                      <input type="text" className="my-form-control" value={uniqueID} readOnly />
                    </div>
                    <div className="form-group">
                      <label>Upload Pictures (max 5)*</label>
                      <div className="picture-frames" style={{ display: 'flex', gap: '10px' }}>
                        {pictures.map((picture, index) => (
                          <div key={index} className="picture-frame" style={{ width: '100px', height: '100px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handlePictureChange(index, e)}
                              style={{ display: 'none' }}
                              id={`picture-upload-${index}`}
                            />
                            <label htmlFor={`picture-upload-${index}`} style={{ cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {picture ? (
                                <img src={URL.createObjectURL(picture)} alt={`upload-${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                              ) : (
                                <div className="upload-placeholder" style={{ textAlign: 'center', color: '#ccc' }}>Click to upload</div>
                              )}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Bio*</label>
                      <textarea className="my-form-control" placeholder="Write a short bio about yourself" value={bio} onChange={handleBioChange}></textarea>
                      {errors.bio && <p className="error">{errors.bio}</p>}
                    </div>
                    <button type="submit" className="default-btn reverse"><span>Create Your Profile</span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================> login section end here <================== */}
    </>
  );
}

export default Register;