import React from 'react'

function Contact() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Contact Page</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ===========Info Section Ends Here========== */}
              <div className="info-section padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center">
                    <h2>Contact Info</h2>
                    <p>Let us know your opinions. Also you can write us if you have any questions.</p>
                  </div>
                  <div className="section-wrapper">
                    <div className="row justify-content-center g-4">
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="contact-item text-center">
                          <div className="contact-thumb mb-4">
                            <img src="assets/images/contact/icon/01.png" alt="contact-thumb" />
                          </div>
                          <div className="contact-content">
                            <h6 className="title">Office Address</h6>
                            <p>1201 park street, Fifth Avenue</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="contact-item text-center">
                          <div className="contact-thumb mb-4">
                            <img src="assets/images/contact/icon/02.png" alt="contact-thumb" />
                          </div>
                          <div className="contact-content">
                            <h6 className="title">Phone number</h6>
                            <p>+22698 745 632,02 982 745</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="contact-item text-center">
                          <div className="contact-thumb mb-4">
                            <img src="assets/images/contact/icon/03.png" alt="contact-thumb" />
                          </div>
                          <div className="contact-content">
                            <h6 className="title">Send Email</h6>
                            <p>youremail@gmil.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===========Info Section Ends Here========== */}
              {/* ================> contact section start here <================== */}
              <div className="contact-section bg-white">
                <div className="contact-top padding-top padding-bottom">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-9">
                        <div className="contact-form-wrapper text-center">
                          <h2>Feedback</h2>
                          <p className="mb-5">Let us know your opinions. Also you can write us if you have any questions.</p>
                          <form className="contact-form" action="https://demos.codexcoder.com/themeforest/html/ollya/contact.php" id="contact-form" method="POST">
                            <div className="form-group">
                              <input type="text" placeholder="Your Name" id="name" name="name" required="required" />
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Your Email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Phone" id="phone" name="phone" required />
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Subject" id="subject" name="subject" required />
                            </div>
                            <div className="form-group w-100">
                              <textarea name="message" rows={8} id="message" placeholder="Your Message" required defaultValue={""} />
                            </div>
                            <div className="form-group w-100 text-center">
                              <button className="default-btn reverse" type="submit"><span>Send our Message</span></button>
                            </div>
                          </form>
                          <p className="form-message" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-bottom">
                  <div className="contac-bottom">
                    <div className="row justify-content-center g-0">
                      <div className="col-12">
                        <div className="location-map">
                          <div id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355669374!2d-118.69192993092697!3d34.02073049448939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1633958856057!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> contact section end here <================== */}
              {/*   contact.html    ,     15:19:40 GMT */}
            </div>
          );
        };

export default Contact