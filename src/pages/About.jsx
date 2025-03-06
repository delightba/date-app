import React from 'react'

function About() {
  return (
            <div>
              
              {/* ================> header section end here <================== */}
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>About Our Ollya</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Page</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about about--style5 padding-top padding-bottom">
                <div className="container">
                  <div className="row justify-content-center g-4 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="about__thumb">
                        <img src="assets/images/about/01.png" alt="dating thumb" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="about__content">
                        <h2>Hello My Friend</h2>
                        <h5>We are here to build emotion, connect people and create happy stories.</h5>
                        <p>Seeko is a friendly dating theme based on BuddyPress for the community functionality. It allows you to easily create and community for dating. You can add your own branding text and images right away.</p>
                        <a href="membership.html" className="default-btn reverse"><span>Get A Membership</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/02.jpg)'}}>
                <div className="container">
                  <div className="section__header style-2 text-center">
                    <h2>Why Choose Ollya</h2>
                    <p>Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/01.jpg" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h4>Simple To Use</h4>
                              <p>Simple steps to follow to have a matching connection.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/02.jpg" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h4>Smart Matching</h4>
                              <p>Create connections with users that are like you.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/03.jpg" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h4>Filter Very Fast</h4>
                              <p>Don’t waste your time! Find only what you are interested</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/04.jpg" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h4>Cool Community</h4>
                              <p>BuddyPress network is full of cool members.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> About section end here <================== */}
              {/* ================> Story section start here <================== */}
              <div className="story padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center">
                    <h2>Ollya Success Stories</h2>
                    <p>Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col">
                        <div className="story__item">
                          <div className="story__inner">
                            <div className="story__thumb">
                              <a href="blog-single.html"><img src="assets/images/story/01.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">Entertainment</span>
                            </div>
                            <div className="story__content">
                              <a href="blog-single.html"><h4>Dream places and locations to visit in 2022</h4></a>
                              <div className="story__content--author">
                                <div className="story__content--thumb">
                                  <img src="assets/images/story/author/01.jpg" alt="dating thumb" />
                                </div>
                                <div className="story__content--content">
                                  <h6>Hester Reeves</h6>
                                  <p>April 16, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item">
                          <div className="story__inner">
                            <div className="story__thumb">
                              <a href="blog-single.html"><img src="assets/images/story/02.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">Love Stories</span>
                            </div>
                            <div className="story__content">
                              <a href="blog-single.html"><h4>Make your dreams come true and monetise quickly</h4></a>
                              <div className="story__content--author">
                                <div className="story__content--thumb">
                                  <img src="assets/images/story/author/02.jpg" alt="dating thumb" />
                                </div>
                                <div className="story__content--content">
                                  <h6>Arika Q Smith</h6>
                                  <p>March 14, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item">
                          <div className="story__inner">
                            <div className="story__thumb">
                              <a href="blog-single.html"><img src="assets/images/story/03.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">Attraction</span>
                            </div>
                            <div className="story__content">
                              <a href="blog-single.html"><h4>Love looks not with the eyes, but with the mind.</h4></a>
                              <div className="story__content--author">
                                <div className="story__content--thumb">
                                  <img src="assets/images/story/author/03.jpg" alt="dating thumb" />
                                </div>
                                <div className="story__content--content">
                                  <h6>William Show</h6>
                                  <p>June 18, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Story section end here <================== */}
              {/* ================> Work section start here <================== */}
              <div className="work work--style2 padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/01.jpg)'}}>
                <div className="container">
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center">
                      <div className="col-xl-6 col-lg-8 col-12">
                        <div className="work__item">
                          <div className="work__inner">
                            <div className="work__thumb">
                              <img src="assets/images/work/09.png" alt="dating thumb" />
                            </div>
                            <div className="work__content">
                              <h3>Trust And Safety</h3>
                              <p>Choose from one of our membership levels and unlock features you need. </p>
                              <a href="policy.html" className="default-btn"><span>See More Details</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-8 col-12">
                        <div className="work__item">
                          <div className="work__inner">
                            <div className="work__thumb">
                              <img src="assets/images/work/10.png" alt="dating thumb" />
                            </div>
                            <div className="work__content">
                              <h3>Simple Membership</h3>
                              <p>Choose from one of our membership levels and unlock features you need. </p>
                              <a href="membership.html" className="default-btn reverse"><span>Membership Details</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Work section end here <================== */}
              {/* ================> App section start here <================== */}
              <div className="app app--style2 padding-top padding-bottom">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-xxl-6 col-12">
                      <div className="app__item">
                        <div className="app__inner">
                          <div className="app__content text-center">
                            <h4>Download App Our Ollya</h4>
                            <h2>Easy Connect To Everyone</h2>
                            <p>You find us, finally and you are already in love. More than 5.000.000 around the world already shared the same experience andng ares uses our system Joining us today just got easier!</p>
                            <ul className="justify-content-center">
                              <li><a href="#"><img src="assets/images/app/01.jpg" alt="dating thumb" /></a></li>
                              <li><a href="#"><img src="assets/images/app/02.jpg" alt="dating thumb" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> App section end here <================== */}
             
              {/* ================> Footer section end here <================== */}
              {/* All Needed JS */}
              {/*  */}
              {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
              {/*   about.html    ,     15:17:52 GMT */}
            </div>
          );
        }

export default About