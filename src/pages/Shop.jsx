import React from 'react'

function Shop() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Shop Page</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">shops</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop Page</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> shop section start here <================== */}
              <div className="shop-page padding-top padding-bottom aside-bg">
                <div className="container">
                  <div className="row justify-content-center pb-15 pt-3">
                    <div className="col-lg-9 col-12">
                      <article>
                        <div className="shop-title d-flex flex-wrap justify-content-between">
                          <p>Showing 01 - 12 of 139 Results</p>
                          <div className="product-view-mode">
                            <a className="active" data-target="grid"><i className="fa-solid fa-border-all" /></a>
                            <a data-target="list"><i className="fa-solid fa-list" /></a>
                          </div>
                        </div>
                        <div className="shop-product-wrap grid row justify-content-center g-4">
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/01.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/01.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                                <h6>
                                  $200
                                </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/02.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/02.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                                <h6>
                                  $200
                                </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/03.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/03.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/04.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/04.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/05.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/05.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/06.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/06.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/07.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/07.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/08.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/08.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/09.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>$200</h6>
                              </div>
                            </div>
                            <div className="product-list-item">
                              <div className="product-thumb">
                                <div className="pro-thumb">
                                  <img src="assets/images/shop/09.jpg" alt="shop" />
                                </div>
                                <div className="product-action-link">
                                  <a className="view-modal" data-target="#quick_view"><i className="fa-solid fa-eye" /></a>
                                  <a href="#"><i className="fa-solid fa-heart" /></a>
                                  <a href="#"><i className="fa-solid fa-cart-arrow-down" /></a>
                                </div>
                              </div>
                              <div className="product-content">
                                <h5><a href="shop-single.html">Product Title Here</a></h5>
                                <p>
                                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                </p>
                                <h6>
                                  $200
                                </h6>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="default-pagination lab-ul mt-5 justify-content-center">
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
                  <div className="modal" id="quick_view">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal"><i className="fa-solid fa-xmark" /></button>
                        <div className="modal-body">
                          <div className="product-details-inner">
                            <div className="row align-items-center">
                              <div className="col-lg-5 col-12">
                                <div className="thumb text-center">
                                  <div className="pro-thumb">
                                    <img src="assets/images/shop/09.jpg" alt="shop" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="product-content">
                                  <h5>Product Title Here</h5>
                                  <p>
                                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                  </p>
                                  <h6>$200</h6>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                </div>
                                <div className="cart-button">
                                  <div className="cart-plus-minus">
                                    <div className="dec qtybutton">-</div>
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                    <div className="inc qtybutton">+</div>
                                  </div>
                                  <a href="shop-cart.html" className="default-btn reverse"><span>Add to Cart</span></a>
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
              {/* ================> shop section end here <================== */}
              {/*   shop.html    ,     15:18:47 GMT */}
            </div>
          );
        };

export default Shop