import React from 'react';

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
              <a className="navbar-brand" href="/"><img src="assets/images/logo/logo.png" alt="logo" /></a>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler--icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav mainmenu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                      {/* <ul>
                        <li><a href="Home">Home Page One</a></li>
                      </ul> */}
                    </li>
                    <li className="active">
                      <a href="about">Pricing</a>
                      {/* <ul>
                        <li><a href="about.html" className="active">About Us</a></li>
                        <li><a href="membership.html">Membership</a></li>
                        <li><a href="comingsoon.html">comingsoon</a></li>
                        <li><a href="404.html">404</a></li>
                      </ul> */}
                    </li>
                    <li>
                      {/* <a href="#0">Community</a>
                      <ul>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="group.html">All Group</a></li>
                        <li><a href="members.html">All Members</a></li>
                        <li><a href="activity.html">Activity</a></li>
                      </ul> */}
                    </li>
                    <li>
                      {/* <a href="#0">Shops</a>
                      <ul>
                        <li><a href="shop.html">Product</a></li>
                        <li><a href="shop-single.html">Product Details</a></li>
                        <li><a href="shop-cart.html">Product Cart</a></li>
                      </ul> */}
                    </li>
                    <li>
                      <a href="about">About</a>
                      {/* <ul>
                        <li><a href="about">About</a></li>
                        <li><a href="blog-2.html">Blog Style Two</a></li>
                        <li><a href="blog-single.html">Blog Details</a></li>
                      </ul> */}
                    </li>
                    <li><a href="contact">contact</a></li>
                  </ul>
                </div>
                <div className="header__more">
                  <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                  <ul className="dropdown-menu" aria-labelledby="moreoption">
                    <li><a className="dropdown-item" href="login">Log in</a></li>
                    <li><a className="dropdown-item" href="Register">Sign Up</a></li>
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
