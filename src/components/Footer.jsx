import React from 'react'

function Footer() {
  return (
    <footer className="footer footer--style2">
    <div className="footer__top bg_img" style={{backgroundImage: 'url(assets/images/footer/bg.jpg)'}}>
      <div className="footer__newsletter">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="footer__newsletter--area">
                <div className="footer__newsletter--title">
                  <h4>Newsletter Sign up</h4>
                </div>
                <div className="footer__newsletter--form">
                  <form action="#">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit" className="default-btn"><span>Subscribe</span></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="footer__newsletter--area justify-content-xxl-end">
                <div className="footer__newsletter--title me-xl-4">
                  <h4>Join Community</h4>
                </div>
                <div className="footer__newsletter--social">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitch" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-messenger" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__toparea padding-top padding-bottom wow fadeInUp" data-wow-duration="1.5s">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer__item footer--about">
                <div className="footer__inner">
                  <div className="footer__content">
                    <div className="footer__content--title">
                      <h4>About Ollya</h4>
                    </div>
                    <div className="footer__content--desc">
                      <p>Ollya is a friendly dating theme based on HTML template for the community functionality</p>
                    </div>
                    <div className="footer__content--info">
                      <p><b>Address :</b> Suite-13 Tropical Center New Elephant Road 1205</p>
                      <p><b>Contact :</b> +30 226 4881 514 www.yoursitename.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer__item footer--feature">
                <div className="footer__inner">
                  <div className="footer__content">
                    <div className="footer__content--title">
                      <h4>Featured Members</h4>
                    </div>
                    <div className="footer__content--desc">
                      <ul>
                        <li>
                          <div className="thumb position-relative">
                            <img src="assets/images/footer/feature/01.jpg" alt="member-img" />
                            <span className="feature__activity" />
                          </div>
                          <div className="content">
                            <a href="member-single.html"><h6>Samantha Lee</h6></a>
                            <p>Active</p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb position-relative">
                            <img src="assets/images/footer/feature/02.jpg" alt="member-img" />
                            <span className="feature__activity feature__activity--ofline" />
                          </div>
                          <div className="content">
                            <a href="member-single.html"><h6>Peter McMillan</h6></a>
                            <p>2 Hours Ago</p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb position-relative">
                            <img src="assets/images/footer/feature/03.jpg" alt="member-img" />
                            <span className="feature__activity" />
                          </div>
                          <div className="content">
                            <a href="member-single.html"><h6>Tluagtea Tualzik</h6></a>
                            <p>Active</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer__item footer--support">
                <div className="footer__inner">
                  <div className="footer__content">
                    <div className="footer__content--title">
                      <h4>Contacts &amp; Support</h4>
                    </div>
                    <div className="footer__content--desc">
                      <ul>
                        <li><a href="#"><i className="fa-solid fa-angle-right" /> About Us</a></li>
                        <li><a href="#"><i className="fa-solid fa-angle-right" /> Our Team</a></li>
                        <li><a href="#"><i className="fa-solid fa-angle-right" /> Testimonials</a></li>
                        <li><a href="#"><i className="fa-solid fa-angle-right" /> Get in Touch</a></li>
                        <li><a href="#"><i className="fa-solid fa-angle-right" /> FAQ</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer__item footer--activity">
                <div className="footer__inner">
                  <div className="footer__content">
                    <div className="footer__content--title">
                      <h4>Recent Activity</h4>
                    </div>
                    <div className="footer__content--desc">
                      <ul>
                        <li>
                          <div className="thumb">
                            <a href="group-single.html"><img src="assets/images/footer/activity/01.jpg" alt="dating thumb" /></a>
                          </div>
                          <div className="content">
                            <a href="group-single.html"><h6>Where to find a good...</h6></a>
                            <p>August 13, 2022</p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb">
                            <a href="group-single.html"><img src="assets/images/footer/activity/02.jpg" alt="dating thumb" /></a>
                          </div>
                          <div className="content">
                            <a href="group-single.html"><h6>Where to find a good...</h6></a>
                            <p>August 13, 2022</p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb">
                            <a href="group-single.html"><img src="assets/images/footer/activity/03.jpg" alt="dating thumb" /></a>
                          </div>
                          <div className="content">
                            <a href="group-single.html"><h6>Where to find a good...</h6></a>
                            <p>August 13, 2022</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom py-4">
      <div className="container">
        <div className="footer__content text-center">
          <p className="mb-0">All Rights Reserved © <a href="index.html">Ollya</a> || Design By: CodexCoder</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer