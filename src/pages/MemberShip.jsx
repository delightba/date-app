import React from 'react'

function MemberShip() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Membership Levels</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Membership</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> Membership start here <================== */}
              <div className="membership padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center">
                    <h2>Membership Levels</h2>
                    <p>Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col">
                        <div className="membership__item">
                          <div className="membership__inner">
                            <div className="membership__head">
                              <h4>7 Day Free Trial</h4>
                              <p>$15.00 Now And Then $30.00 Per Month.</p>
                            </div>
                            <div className="membership__body">
                              <h4>FREE</h4>
                              <ul>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Directory</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Profile</span></li>
                                <li><i className="fa-solid fa-circle-xmark" /> <span>Send Private Messages</span></li>
                                <li><i className="fa-solid fa-circle-xmark" /> <span>Add Media To Your Profile</span></li>
                              </ul>
                            </div>
                            <div className="membership__footer">
                              <a href="login.html" className="default-btn reverse"><span>Select Plan</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="membership__item">
                          <div className="membership__inner">
                            <div className="membership__head">
                              <h4>Bronze</h4>
                              <p>$15.00 Now And Then $30.00 Per Month.</p>
                            </div>
                            <div className="membership__body">
                              <h4>$15.00</h4>
                              <ul>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Directory</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Profile</span></li>
                                <li><i className="fa-solid fa-circle-xmark" /> <span>Send Private Messages</span></li>
                                <li><i className="fa-solid fa-circle-xmark" /> <span>Add Media To Your Profile</span></li>
                              </ul>
                            </div>
                            <div className="membership__footer">
                              <a href="login.html" className="default-btn reverse"><span>Select Plan</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="membership__item">
                          <div className="membership__inner">
                            <div className="membership__head">
                              <h4>Silver</h4>
                              <p>$15.00 Now And Then $30.00 Per Month.</p>
                            </div>
                            <div className="membership__body">
                              <h4>$20.00</h4>
                              <ul>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Directory</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Profile</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>Send Private Messages</span></li>
                                <li><i className="fa-solid fa-circle-xmark" /> <span>Add Media To Your Profile</span></li>
                              </ul>
                            </div>
                            <div className="membership__footer">
                              <a href="login.html" className="default-btn reverse"><span>Select Plan</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="membership__item">
                          <div className="membership__inner">
                            <div className="membership__head">
                              <h4>Gold</h4>
                              <p>$15.00 Now And Then $30.00 Per Month.</p>
                            </div>
                            <div className="membership__body">
                              <h4>$30.00</h4>
                              <ul>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Directory</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>View Members Profile</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>Send Private Messages</span></li>
                                <li><i className="fa-solid fa-circle-check" /> <span>Add Media To Your Profile</span></li>
                              </ul>
                            </div>
                            <div className="membership__footer">
                              <a href="login.html" className="default-btn reverse"><span>Select Plan</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Membership end here <================== */}
              {/*   membership.html    ,     15:17:52 GMT */}
            </div>
          );
        };

export default MemberShip