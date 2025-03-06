import React from 'react'

function Blog2() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Our Blog Post</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> Blog section start here <================== */}
              <div className="blog blog--style2 padding-top padding-bottom">
                <div className="container">
                  <div className="section-wrapper">
                    <div className="row justify-content-center">
                      <div className="col-lg-9 col-12">
                        <article>
                          <div className="blog__item">
                            <div className="blog__inner">
                              <div className="blog__thumb">
                                <a href="blog-single.html">
                                  <img src="assets/images/blog/10.jpg" alt="blog" />
                                </a>
                              </div>
                              <div className="blog__content">
                                <a href="blog-single.html">
                                  <h2>It’s no secret that the digital industry is boom</h2>
                                </a>
                                <ul className="lab-ul blog__date">
                                  <li><span><i className="fa-solid fa-calendar-days" />January 01, 2022 10:59 am </span></li>
                                  <li><span><i className="fa-solid fa-user" /><a href="#">Robot Smith</a></span> </li>
                                  <li><span><i className="fa-solid fa-comments" /><a href="#">09 Comments</a></span></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?</p>
                                <a href="blog-single.html" className="default-btn reverse"><span>read more</span></a>
                              </div>
                            </div>
                          </div>
                          <div className="blog__item">
                            <div className="blog__inner">
                              <div className="blog__thumb blog__slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <div className="blog__img">
                                      <img src="assets/images/blog/10.jpg" alt="blog" className="w-100" />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="blog__img">
                                      <img src="assets/images/blog/11.jpg" alt="blog" className="w-100" />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="blog__img">
                                      <img src="assets/images/blog/12.jpg" alt="blog" className="w-100" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-next thumb-nav"><i className="fa-solid fa-angle-right" /></div>
                                <div className="thumb-prev thumb-nav"><i className="fa-solid fa-angle-left" /></div>
                              </div>
                              <div className="blog__content">
                                <a href="blog-single.html">
                                  <h2>Globally restore bleeding-edge value through accurate.</h2>
                                </a>
                                <ul className="lab-ul blog__date">
                                  <li><span><i className="fa-solid fa-calendar-days" />January 01, 2022 10:59 am
                                    </span></li>
                                  <li><span><i className="fa-solid fa-user" /><a href="#">Robot Smith</a></span>
                                  </li>
                                  <li><span><i className="fa-solid fa-comments" /><a href="#">09 Comments</a></span></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?</p>
                                <a href="blog-single.html" className="default-btn reverse"><span>read more</span></a>
                              </div>
                            </div>
                          </div>
                          <div className="blog__item">
                            <div className="blog__inner">
                              <div className="blog__thumb">
                                <a href="blog-single.html">
                                  <img src="assets/images/blog/12.jpg" alt="blog" />
                                </a>
                                <a href="https://www.youtube.com/embed/U9O8G5AreXE" className="play-btn" data-rel="lightcase">
                                  <i className="fa-solid fa-play" />
                                  <span className="pluse_2" />
                                </a>
                              </div>
                              <div className="blog__content">
                                <a href="blog-single.html">
                                  <h2>Proactively productivate real-time intellectual capital where.</h2>
                                </a>
                                <ul className="lab-ul blog__date">
                                  <li><span><i className="fa-solid fa-calendar-days" />January 01, 2022 10:59 am</span></li>
                                  <li><span><i className="fa-solid fa-user" /><a href="#">Robot Smith</a></span></li>
                                  <li><span><i className="fa-solid fa-comments" /><a href="#">09 Comments</a></span></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?</p>
                                <a href="blog-single.html" className="default-btn reverse"><span>read more</span></a>
                              </div>
                            </div>
                          </div>
                          <ul className="default-pagination lab-ul justify-content-center">
                            <li>
                              <a href="#"><i className="fa-solid fa-angle-left" /></a>
                            </li>
                            <li>
                              <a href="#">01</a>
                            </li>
                            <li>
                              <a href="#" className="active">02</a>
                            </li>
                            <li>
                              <a href="#">03</a>
                            </li>
                            <li>
                              <a href="#"><i className="fa-solid fa-angle-right" /></a>
                            </li>
                          </ul>
                        </article>
                      </div>
                      <div className="col-lg-3 col-md-7 col-12">
                        <aside>
                          <div className="widget widget-search">
                            <div className="widget-header">
                              <h5>Search keywords</h5>
                            </div>
                            <form action="#" className="search-wrapper">
                              <input type="text" placeholder="Search Here..." />
                              <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                            </form>
                          </div>
                          <div className="widget widget-category">
                            <div className="widget-header">
                              <h5>Post Categories</h5>
                            </div>
                            <ul className="lab-ul widget-wrapper list-bg-none">
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Show all</span><span>18</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Business</span><span>20</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Creative</span><span>25</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Inspiation</span><span>30</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />News</span><span>28</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Photography</span><span>20</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-angles-right" />Smart</span><span>26</span></a>
                              </li>
                            </ul>
                          </div>
                          <div className="widget widget-post">
                            <div className="widget-header">
                              <h5>Recent Post</h5>
                            </div>
                            <ul className="lab-ul widget-wrapper">
                              <li className="d-flex flex-wrap justify-content-between">
                                <div className="post-thumb">
                                  <a href="blog-single.html"><img src="assets/images/blog/p-post/01.jpg" alt="product" /></a>
                                </div>
                                <div className="post-content ps-4">
                                  <a href="blog-single.html">
                                    <h6>Poor People’s Campaign Our Resources</h6>
                                  </a>
                                  <p>01 January 2022</p>
                                </div>
                              </li>
                              <li className="d-flex flex-wrap justify-content-between">
                                <div className="post-thumb">
                                  <a href="blog-single.html"><img src="assets/images/blog/p-post/02.jpg" alt="product" /></a>
                                </div>
                                <div className="post-content ps-4">
                                  <a href="blog-single.html">
                                    <h6>Boosting Social For NGO And Charities </h6>
                                  </a>
                                  <p>01 January 2022</p>
                                </div>
                              </li>
                              <li className="d-flex flex-wrap justify-content-between">
                                <div className="post-thumb">
                                  <a href="blog-single.html"><img src="assets/images/blog/p-post/03.jpg" alt="product" /></a>
                                </div>
                                <div className="post-content ps-4">
                                  <a href="blog-single.html">
                                    <h6>Poor People’s Campaign Our Resources</h6>
                                  </a>
                                  <p>01 January 2022</p>
                                </div>
                              </li>
                              <li className="d-flex flex-wrap justify-content-between">
                                <div className="post-thumb">
                                  <a href="blog-single.html"><img src="assets/images/blog/p-post/04.jpg" alt="product" /></a>
                                </div>
                                <div className="post-content ps-4">
                                  <a href="blog-single.html">
                                    <h6>Boosting Social For NGO And Charities</h6>
                                  </a>
                                  <p>01 January 2022</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="widget widget-instagram">
                            <div className="widget-header">
                              <h5>Instagram</h5>
                            </div>
                            <ul className="lab-ul widget-wrapper d-flex flex-wrap justify-content-center">
                              <li><a href="assets/images/instragram/01.jpg" data-rel="lightcase"><img src="assets/images/instragram/01.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/02.jpg" data-rel="lightcase"><img src="assets/images/instragram/02.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/03.jpg" data-rel="lightcase"><img src="assets/images/instragram/03.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/04.jpg" data-rel="lightcase"><img src="assets/images/instragram/04.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/05.jpg" data-rel="lightcase"><img src="assets/images/instragram/05.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/06.jpg" data-rel="lightcase"><img src="assets/images/instragram/06.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/07.jpg" data-rel="lightcase"><img src="assets/images/instragram/07.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/08.jpg" data-rel="lightcase"><img src="assets/images/instragram/08.jpg" alt="instragram-img" /></a></li>
                              <li><a href="assets/images/instragram/09.jpg" data-rel="lightcase"><img src="assets/images/instragram/09.jpg" alt="instragram-img" /></a></li>
                            </ul>
                          </div>
                          <div className="widget widget-archive">
                            <div className="widget-header">
                              <h5>Our Archive</h5>
                            </div>
                            <ul className="lab-ul widget-wrapper list-bg-none">
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />January</span><span>2022</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />February</span><span>2022</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />March</span><span>2019</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />August</span><span>2022</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />September</span><span>2017</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />October</span><span>2016</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />November</span><span>2014</span></a>
                              </li>
                              <li>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="fa-solid fa-calendar-days" />December</span><span>2013</span></a>
                              </li>
                            </ul>
                          </div>
                          <div className="widget widget-tags">
                            <div className="widget-header">
                              <h5>Our Popular tags</h5>
                            </div>
                            <ul className="lab-ul widget-wrapper">
                              <li><a href="#">Food</a></li>
                              <li><a href="#">Love</a></li>
                              <li><a href="#">Ollya</a></li>
                              <li><a href="#">health</a></li>
                              <li><a href="#">Partner</a></li>
                              <li><a href="#">Man</a></li>
                              <li><a href="#">Male</a></li>
                              <li><a href="#">Date</a></li>
                              <li><a href="#">Women</a></li>
                            </ul>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Blog section end here <================== */}
              {/*   blog-2.html    ,     15:18:54 GMT */}
            </div>
          );
        };

export default Blog2