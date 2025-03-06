import React from 'react'

function ShopCart() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Cart Page</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">shops</a></li>
                        <li className="breadcrumb-item active" aria-current="page">shop Cart</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> shop Cart section start here <================== */}
              <div className="shop-cart padding-top padding-bottom">
                <div className="container">
                  <div className="section-wrapper">
                    <div className="cart-top">
                      <table>
                        <thead>
                          <tr>
                            <th className="cat-product">Product</th>
                            <th className="cat-price">Price</th>
                            <th className="cat-quantity">Quantity</th>
                            <th className="cat-toprice">Total</th>
                            <th className="cat-edit">Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="product-item cat-product">
                              <div className="p-thumb">
                                <a href="#"><img src="assets/images/shop/01.jpg" alt="product" /></a>
                              </div>
                              <div className="p-content">
                                <a href="#">Product Text Here</a>
                              </div>
                            </td>
                            <td className="cat-price">$250</td>
                            <td className="cat-quantity">
                              <div className="cart-plus-minus">
                                <div className="dec qtybutton">-</div>
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={3} />
                                <div className="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cat-toprice">$750</td>
                            <td className="cat-edit">
                              <a href="#"><img src="assets/images/shop/del.png" alt="product" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-item cat-product">
                              <div className="p-thumb">
                                <a href="#"><img src="assets/images/shop/02.jpg" alt="product" /></a>
                              </div>
                              <div className="p-content">
                                <a href="#">Product Text Here</a>
                              </div>
                            </td>
                            <td className="cat-price">$250</td>
                            <td className="cat-quantity">
                              <div className="cart-plus-minus">
                                <div className="dec qtybutton">-</div>
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                <div className="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cat-toprice">$500</td>
                            <td className="cat-edit">
                              <a href="#"><img src="assets/images/shop/del.png" alt="product" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-item cat-product">
                              <div className="p-thumb">
                                <a href="#"><img src="assets/images/shop/03.jpg" alt="product" /></a>
                              </div>
                              <div className="p-content">
                                <a href="#">Product Text Here</a>
                              </div>
                            </td>
                            <td className="cat-price">$50</td>
                            <td className="cat-quantity">
                              <div className="cart-plus-minus">
                                <div className="dec qtybutton">-</div>
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                <div className="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cat-toprice">$100</td>
                            <td className="cat-edit">
                              <a href="#"><img src="assets/images/shop/del.png" alt="product" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-item cat-product">
                              <div className="p-thumb">
                                <a href="#"><img src="assets/images/shop/04.jpg" alt="product" /></a>
                              </div>
                              <div className="p-content">
                                <a href="#">Product Text Here</a>
                              </div>
                            </td>
                            <td className="cat-price">$100</td>
                            <td className="cat-quantity">
                              <div className="cart-plus-minus">
                                <div className="dec qtybutton">-</div>
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                <div className="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cat-toprice">$200</td>
                            <td className="cat-edit">
                              <a href="#"><img src="assets/images/shop/del.png" alt="product" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-item cat-product">
                              <div className="p-thumb">
                                <a href="#"><img src="assets/images/shop/05.jpg" alt="product" /></a>
                              </div>
                              <div className="p-content">
                                <a href="#">Product Text Here</a>
                              </div>
                            </td>
                            <td className="cat-price">$200</td>
                            <td className="cat-quantity">
                              <div className="cart-plus-minus">
                                <div className="dec qtybutton">-</div>
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                <div className="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cat-toprice">$400</td>
                            <td className="cat-edit">
                              <a href="#"><img src="assets/images/shop/del.png" alt="product" /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="cart-bottom">
                      <div className="cart-checkout-box">
                        <form className="coupon" action="https://demos.codexcoder.com/">
                          <input type="text" name="coupon" placeholder="Coupon Code..." className="cart-page-input-text" />
                          <button type="submit" className="default-btn ms-2 px-4"><span>Apply</span></button>
                        </form>
                        <form className="cart-checkout" action="https://demos.codexcoder.com/">
                          <button type="submit" className="default-btn m-2"><span>Update Cart</span></button>
                          <button type="submit" className="default-btn reverse m-2"><span>Proceed to Checkout</span></button>
                        </form>
                      </div>
                      <div className="shiping-box">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="calculate-shiping">
                              <h3>Calculate Shipping</h3>
                              <div className="outline-select">
                                <select>
                                  <option value="volvo">United Kingdom (UK)</option>
                                  <option value="saab">Bangladesh</option>
                                  <option value="saab">Pakisthan</option>
                                  <option value="saab">India</option>
                                  <option value="saab">Nepal</option>
                                </select>
                                <span className="select-icon"><i className="fa-solid fa-angle-down" /></span>
                              </div>
                              <div className="outline-select shipping-select">
                                <select>
                                  <option value="volvo">State/Country</option>
                                  <option value="saab">Dhaka</option>
                                  <option value="saab">Benkok</option>
                                  <option value="saab">Kolkata</option>
                                  <option value="saab">Kapasia</option>
                                </select>
                                <span className="select-icon"><i className="fa-solid fa-angle-down" /></span>
                              </div>
                              <input type="text" name="coupon" placeholder="Postcode/ZIP" className="cart-page-input-text" />	
                              <button type="submit" className="default-btn reverse"><span>Update Total</span></button>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="cart-overview">
                              <h3>Cart Totals</h3>
                              <ul className="codex">
                                <li>
                                  <span className="pull-left">Cart Subtotal</span>
                                  <p className="pull-right">$ 0.00</p>
                                </li>
                                <li>
                                  <span className="pull-left">Shipping and Handling</span>
                                  <p className="pull-right">Free Shipping</p>
                                </li>
                                <li>
                                  <span className="pull-left">Order Total</span>
                                  <p className="pull-right">$ 2940.00</p>
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
              {/* ================> shop Cart section end here <================== */}
              {/*   shop-cart.html    ,     15:18:48 GMT */}
            </div>
          );
        }

export default ShopCart