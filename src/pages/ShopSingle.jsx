import React from 'react'

function ShopSingle() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Shop Single Page</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">shops</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> shop section start here <================== */}
              <div className="shop-single padding-top padding-bottom aside-bg">
                <div className="container">
                  <div className="row justify-content-center pt-4">
                    <div className="col-lg-9 col-12">
                      <article>
                        <div className="product-details">
                          <div className="row align-items-center">
                            <div className="col-md-6 col-12">
                              <div className="product-thumb">
                                <div className="swiper-container pro-single-top ">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/01.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/02.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/03.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/04.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/05.jpg" alt="shop" /></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="swiper-container pro-single-thumbs">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/01.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/02.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/03.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/04.jpg" alt="shop" /></div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="single-thumb"><img src="assets/images/shop/05.jpg" alt="shop" /></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pro-single-next"><i className="fa-solid fa-angle-left" /></div>
                                <div className="pro-single-prev"><i className="fa-solid fa-angle-right" /></div>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="post-content">
                                <h4>Product Text here</h4>
                                <p className="rating">
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  (3 review)
                                </p>
                                <h4>$ 340.00</h4>
                                <h6>Product Description</h6>
                                <p>Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging 	psd template communities.</p>
                                <form>
                                  <div className="select-product size">
                                    <select>
                                      <option>Select Size</option>
                                      <option>SM</option>
                                      <option>MD</option>
                                      <option>LG</option>
                                      <option>XL</option>
                                      <option>XXL</option>
                                    </select>
                                    <i className="fa-solid fa-angle-down" />
                                  </div>
                                  <div className="select-product color">
                                    <select>
                                      <option>Select Color</option>
                                      <option>Pink</option>
                                      <option>Ash</option>
                                      <option>Red</option>
                                      <option>White</option>
                                      <option>Blue</option>
                                    </select>
                                    <i className="fa-solid fa-angle-down" />
                                  </div>
                                  <div className="discount-code">
                                    <input type="text" placeholder="Enter Discount Code" />
                                  </div>
                                  <div className="cart-plus-minus">
                                    <div className="dec qtybutton">-</div>
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                                    <div className="inc qtybutton">+</div>
                                  </div>
                                  <button type="submit" className="default-btn"><span>Add To Cart</span></button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review">
                          <ul className="review-nav lab-ul">
                            <li className="desc" data-target="description-show">Description</li>
                            <li className="rev active" data-target="review-content-show">Reviews 4</li>
                          </ul>
                          <div className="review-content review-content-show">
                            <div className="review-showing">
                              <ul className="content lab-ul">
                                <li>
                                  <div className="post-thumb">
                                    <img src="assets/images/member/home2/01.jpg" alt="shop" />
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <div className="posted-on">
                                        <a href="member-single.html">Ganelon Boileau</a>
                                        <p>Posted on March 25, 2022 at 6:57 am</p>
                                      </div>
                                      <div className="rating">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                      </div>
                                    </div>
                                    <div className="entry-content">
                                      <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post-thumb">
                                    <img src="assets/images/member/home2/02.jpg" alt="shop" />
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <div className="posted-on">
                                        <a href="member-single.html">Morgana Cailot</a>
                                        <p>Posted on March 25, 2022 at 6:57 am</p>
                                      </div>
                                      <div className="rating">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                      </div>
                                    </div>
                                    <div className="entry-content">
                                      <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post-thumb">
                                    <img src="assets/images/member/home2/03.jpg" alt="shop" />
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <div className="posted-on">
                                        <a href="member-single.html">Telford Bois</a>
                                        <p>Posted on March 25, 2022 at 6:57 am</p>
                                      </div>
                                      <div className="rating">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                      </div>
                                    </div>
                                    <div className="entry-content">
                                      <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post-thumb">
                                    <img src="assets/images/member/home2/04.jpg" alt="shop" />
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <div className="posted-on">
                                        <a href="member-single.html">Cher Daviau</a>
                                        <p>Posted on March 25, 2022 at 6:57 am</p>
                                      </div>
                                      <div className="rating">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                      </div>
                                    </div>
                                    <div className="entry-content">
                                      <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="client-review">
                                <div className="review-form">
                                  <div className="review-title">
                                    <h4>Add a Review</h4>
                                  </div>
                                  <form action="https://demos.codexcoder.com/themeforest/html/ollya/action" className="row">
                                    <div className="col-md-4 col-12">
                                      <input type="text" name="name" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                      <input type="text" name="email" placeholder="Email Adress" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                      <div className="rating">
                                        <span className="rating-title">Your Rating : </span>
                                        <ul className="lab-ul">
                                          <li>
                                            <i className="fa-solid fa-star" />
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star" />
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star" />
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star" />
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star" />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-md-12 col-12">
                                      <textarea rows={5} placeholder="Type Here Message" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                      <button className="default-btn" type="submit"><span>Submit Review</span></button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="description">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              <div className="post-item">
                                <div className="post-thumb mb-3">
                                  <img src="assets/images/shop/01.jpg" alt="shop" className="rounded" />
                                </div>
                                <div className="post-content">
                                  <ul className="lab-ul">
                                    <li>
                                      Donec non est at libero vulputate rutrum.
                                    </li>
                                    <li>
                                      Morbi ornare lectus quis justo gravida semper.
                                    </li>
                                    <li>
                                      Pellentesque aliquet, sem eget laoreet ultrices.
                                    </li>
                                    <li>
                                      Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                    </li>
                                    <li>
                                      Donec a neque libero.
                                    </li>
                                    <li>
                                      Pellentesque aliquet, sem eget laoreet ultrices.
                                    </li>
                                    <li>
                                      Morbi ornare lectus quis justo gravida semper..
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-lg-3 col-md-7 col-12">
                      <aside>
                        <div className="widget widget-search">
                          <div className="widget-header">
                            <h5>Search keywords</h5>
                          </div>
                          <form action="https://demos.codexcoder.com/" className="search-wrapper">
                            <input type="text" name="s" placeholder="Search Here..." />
                            <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                          </form>
                        </div>
                        <div className="widget shop-widget">
                          <div className="widget-header">
                            <h5>All Categories</h5>
                          </div>
                          <div className="widget-wrapper">
                            <ul className="shop-menu lab-ul">
                              <li>
                                <a href="#0">Code Optimization</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a>
                                    <ul className="shop-submenu lab-ul">
                                      <li><a href="#0">All Products</a></li>
                                      <li><a href="#0">Seo</a></li>
                                      <li><a href="#0">Marketing</a></li>
                                      <li><a href="#0">Email Marketing</a></li>
                                      <li><a href="#0">Seo Support</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">Monitoring Ranking</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">Target Strategy</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">Nap Syndication</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">SEO Support</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">Email Marketing</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                              <li><a href="#0">Engine Marketing</a>
                                <ul className="shop-submenu lab-ul">
                                  <li><a href="#0">All Products</a></li>
                                  <li><a href="#0">Seo</a></li>
                                  <li><a href="#0">Marketing</a></li>
                                  <li><a href="#0">Email Marketing</a></li>
                                  <li><a href="#0">Seo Support</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="widget widget-post recent-product">
                          <div className="widget-header">
                            <h5>Recent Product</h5>
                          </div>
                          <ul className="lab-ul widget-wrapper">
                            <li className="d-flex flex-wrap justify-content-between">
                              <div className="post-thumb">
                                <a href="shop-single.html"><img src="assets/images/shop/pp/01.jpg" alt="product" /></a>
                              </div>
                              <div className="post-content ps-4">
                                <a href="shop-single.html">
                                  <h6>Product Title Here</h6>
                                </a>
                                <p>
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </p>
                                <p className="price">$200</p>
                              </div>
                            </li>
                            <li className="d-flex flex-wrap justify-content-between">
                              <div className="post-thumb">
                                <a href="shop-single.html"><img src="assets/images/shop/pp/02.jpg" alt="product" /></a>
                              </div>
                              <div className="post-content ps-4">
                                <a href="shop-single.html">
                                  <h6>Product Title Here</h6>
                                </a>
                                <p>
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </p>
                                <p className="price">$200</p>
                              </div>
                            </li>
                            <li className="d-flex flex-wrap justify-content-between">
                              <div className="post-thumb">
                                <a href="shop-single.html"><img src="assets/images/shop/pp/03.jpg" alt="product" /></a>
                              </div>
                              <div className="post-content ps-4">
                                <a href="shop-single.html">
                                  <h6>Product Title Here</h6>
                                </a>
                                <p>
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </p>
                                <p className="price">$200</p>
                              </div>
                            </li>
                            <li className="d-flex flex-wrap justify-content-between">
                              <div className="post-thumb">
                                <a href="shop-single.html"><img src="assets/images/shop/pp/04.jpg" alt="product" /></a>
                              </div>
                              <div className="post-content ps-4">
                                <a href="shop-single.html">
                                  <h6>Product Title Here</h6>
                                </a>
                                <p>
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </p>
                                <p className="price">$200</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> shop section end here <================== */}
              &gt;
              {/*   shop-single.html    ,     15:18:47 GMT */}
            </div>
          );
        };

export default ShopSingle