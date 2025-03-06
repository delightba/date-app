import React from "react";
import { Link } from "react-router-dom"; // Use React Router for navigation
// import "./NotFound.css"; // Import your CSS file if needed

const NotFound = () => {
  return (
    <div>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <a href="#" className="scrollToTop">
        <i className="fa-solid fa-angle-up" />
      </a>

      {/* 404 Page Content */}
      <section className="log-reg forezero">
        <div className="container">
          <div className="row justify-content-center"> {/* Center the content */}
            <div className="image image-404" />
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="main-thumb mb-5">
                  <img src="assets/images/404.png" alt="dating thumb" />
                </div>
                <div className="main-content inloginp">
                  <div className="text-content text-center">
                    <h2>Oops! This Page Not Found</h2>
                    <p>We are really sorry, but the page you requested is missing :(</p>
                    <Link to="/" className="default-btn reverse">
                      <span>Back to Home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
