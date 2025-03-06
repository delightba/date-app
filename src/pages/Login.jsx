import React, { useState, useEffect } from 'react';
import DisclaimerModal from '../components/DisclaimerModal'; // Import the DisclaimerModal component


function Login() {
  return (
          <div>
            {/* scrollToTop start here */}
            <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up" /></a>
            {/* scrollToTop ending here */}
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
                  <div className="image image-log" />
                  <div className="col-lg-7">
                    <div className="log-reg-inner">
                      <div className="section-header inloginp">
                        <h2 className="title">Welcome to Ollya</h2>
                      </div>
                      <div className="main-content inloginp">
                        <form action="#">
                          <div className="form-group">
                            <label>Your Address</label>
                            <input type="email" className="my-form-control" placeholder="Enter Your Email" />
                          </div>
                          <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="my-form-control" placeholder="Enter Your Password" />
                          </div>
                          <p className="f-pass">Forgot your password? <a href="#">recover password</a></p>
                          <div className="text-center">
                            <button type="submit" className="default-btn"><span>Sign IN</span></button>
                          </div>
                          <div className="or">
                            <p>OR</p>
                          </div>
                          <div className="or-content">
                            <p>Sign up with your email</p>
                            <a href="#" className="default-btn reverse"><img src="assets/images/login/google.png" alt="google" /> <span>Sign Up with Google</span></a>
                            <p className="or-signup"> Don't have an account? <a href="register.html">Sign up here</a></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ================> login section end here <================== */}
            {/*   login.html    ,     15:19:40 GMT */}
          </div>
        );
      };

export default Login