import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* scrollToTop start here */}
      <a href="#" className="scrollToTop">
        <i className="fa-solid fa-angle-up" />
      </a>
      {/* scrollToTop ending here */}

      {/* ================> header section start here <================== */}
      <header className="header" id="navbar">
        <div className="header__top d-none d-lg-block">
          <div className="container">
            <div className="header__top--area">
              <div className="header__top--left">
                <ul>
                  <li>
                    <i className="fa-solid fa-phone" /> <span>+800-123-4567 6587</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot" /> Beverley, New York 224 USA
                  </li>
                </ul>
              </div>
              <div className="header__top--right">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f" /> Facebook</a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram" /> Instagram</a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube" /> Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <nav className="navbar navbar-expand-lg w-100 justify-content-center">
              <Link className="navbar-brand" to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler--icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav mainmenu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link> {/* Add Dashboard link */}
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
                <div className="header__more">
                  <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                  <ul className="dropdown-menu" aria-labelledby="moreoption">
                    <li><Link className="dropdown-item" to="/login">Log in</Link></li>
                    <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
