import React from 'react'

function Index2() {
  return (
            <div>
              {/* ================> Banner section start here <================== */}
              <div className="banner banner--style2 padding-top bg_img" style={{backgroundImage: 'url(assets/images/banner/bg-2.jpg)'}}>
                <div className="container">
                  <div className="banner__wrapper">
                    <div className="row g-0 justify-content-center">
                      <div className="col-lg-4 col-12">
                        <div className="banner__content wow fadeInLeft" data-wow-duration="1.5s">
                          <div className="banner__title">
                            <h2>Welcome to SoulFullConnects</h2>
                            <p>At SoulFullConnects, we help you create meaningful connections, find your soulmate, and explore self-discovery. Whether you're seeking friends or spiritual guidance, our platform supports your journey. Join us to heal, grow, and connect with others on a deeper level</p>
                            <a href="register" className="default-btn style-2"><span>Get Started</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-12">
                        <div className="banner__thumb wow fadeInUp" data-wow-duration="1.5s">
                          <img src="assets/images/banner/02.png" alt="banner" />
                          <div className="banner__thumb--shape">
                            <div className="shapeimg shapeimg__one">
                              <img src="assets/images/banner/shape/home2/01.png" alt="dating thumb" />
                            </div>
                            <div className="shapeimg shapeimg__two">
                              <img src="assets/images/banner/shape/home2/02.png" alt="dating thumb" />
                            </div>
                            <div className="shapeimg shapeimg__three">
                              <img src="assets/images/banner/shape/home2/03.png" alt="dating thumb" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Banner section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about about--style2 padding-top pt-xl-0">
                <div className="container">
                  <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <div className="row g-0 justify-content-center row-cols-lg-2 row-cols-1">
                      <div className="col">
                        <div className="about__left">
                          <div className="about__top">
                            <div className="about__content">
                              <h3>Welcome To Our Ollya</h3>
                              <p>You find us, finally, and you are already in love. More than 4.000.000 around the world already shared the same experiences and uses our system. Joining us today just got easier!</p>
                            </div>
                          </div>
                          <div className="about__bottom">
                            <div className="about__bottom--head">
                              <h5>Latest Registered Members</h5>
                              <div className="about__bottom--navi">
                                <div className="ragi-prev"><i className="fa-solid fa-chevron-left" /></div>
                                <div className="ragi-next active"><i className="fa-solid fa-chevron-right" /></div>
                              </div>
                            </div>
                            <div className="about__bottom--body">
                              <div className="ragi__slider overflow-hidden">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/01.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/02.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/03.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/04.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/05.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/01.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/02.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/03.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="ragi__thumb">
                                      <a href="member-single.html"><img src="assets/images/ragi/04.jpg" alt="dating thumb" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__right">
                          <div className="about__title">
                            <h3>Find Your True Love</h3>
                          </div>
                          <form action="#">
                            <div className="banner__list">
                              <div className="row">
                                <div className="col-6">
                                  <label>I am a</label>
                                  <div className="banner__inputlist">
                                    <select>
                                      <option>Select Gender</option>
                                      <option value="male" selected>Male</option>
                                      <option value="female">Female</option>
                                      <option value="others">Others</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <label>Looking for</label>
                                  <div className="banner__inputlist">
                                    <select>
                                      <option>Select Gender</option>
                                      <option value="male">Male</option>
                                      <option value="female" selected>Female</option>
                                      <option value="others">Others</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="banner__list">
                              <div className="row">
                                <div className="col-lg-6 col-12">
                                  <label>Age</label>
                                  <div className="row g-3">
                                    <div className="col-6">
                                      <div className="banner__inputlist">
                                        <select>
                                          <option value={18} selected>18</option>
                                          <option value={19}>19</option>
                                          <option value={20}>20</option>
                                          <option value={21}>21</option>
                                          <option value={22}>22</option>
                                          <option value={23}>23</option>
                                          <option value={24}>24</option>
                                          <option value={25}>25</option>
                                          <option value={26}>26</option>
                                          <option value={27}>27</option>
                                          <option value={28}>28</option>
                                          <option value={29}>29</option>
                                          <option value={30}>30</option>
                                          <option value={31}>31</option>
                                          <option value={32}>32</option>
                                          <option value={33}>33</option>
                                          <option value={34}>34</option>
                                          <option value={35}>35</option>
                                          <option value={36}>36</option>
                                          <option value={37}>37</option>
                                          <option value={38}>38</option>
                                          <option value={39}>39</option>
                                          <option value={40}>40</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="banner__inputlist">
                                        <select>
                                          <option value={18}>18</option>
                                          <option value={19}>19</option>
                                          <option value={20}>20</option>
                                          <option value={21}>21</option>
                                          <option value={22}>22</option>
                                          <option value={23}>23</option>
                                          <option value={24}>24</option>
                                          <option value={25} selected>25</option>
                                          <option value={26}>26</option>
                                          <option value={27}>27</option>
                                          <option value={28}>28</option>
                                          <option value={29}>29</option>
                                          <option value={30}>30</option>
                                          <option value={31}>31</option>
                                          <option value={32}>32</option>
                                          <option value={33}>33</option>
                                          <option value={34}>34</option>
                                          <option value={35}>35</option>
                                          <option value={36}>36</option>
                                          <option value={37}>37</option>
                                          <option value={38}>38</option>
                                          <option value={39}>39</option>
                                          <option value={40}>40</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                  <label>Country</label>
                                  <div className="banner__inputlist">
                                    <select id="country" name="country">
                                      <option value="Afganistan">Afghanistan</option>
                                      <option value="Albania">Albania</option>
                                      <option value="Algeria">Algeria</option>
                                      <option value="American Samoa">American Samoa</option>
                                      <option value="Andorra">Andorra</option>
                                      <option value="Angola">Angola</option>
                                      <option value="Anguilla">Anguilla</option>
                                      <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
                                      <option value="Argentina">Argentina</option>
                                      <option value="Armenia">Armenia</option>
                                      <option value="Aruba">Aruba</option>
                                      <option value="Australia">Australia</option>
                                      <option value="Austria">Austria</option>
                                      <option value="Azerbaijan">Azerbaijan</option>
                                      <option value="Bahamas">Bahamas</option>
                                      <option value="Bahrain">Bahrain</option>
                                      <option value="Bangladesh" selected>Bangladesh</option>
                                      <option value="Barbados">Barbados</option>
                                      <option value="Belarus">Belarus</option>
                                      <option value="Belgium">Belgium</option>
                                      <option value="Belize">Belize</option>
                                      <option value="Benin">Benin</option>
                                      <option value="Bermuda">Bermuda</option>
                                      <option value="Bhutan">Bhutan</option>
                                      <option value="Bolivia">Bolivia</option>
                                      <option value="Bonaire">Bonaire</option>
                                      <option value="Bosnia & Herzegovina">Bosnia &amp; Herzegovina</option>
                                      <option value="Botswana">Botswana</option>
                                      <option value="Brazil">Brazil</option>
                                      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                      <option value="Brunei">Brunei</option>
                                      <option value="Bulgaria">Bulgaria</option>
                                      <option value="Burkina Faso">Burkina Faso</option>
                                      <option value="Burundi">Burundi</option>
                                      <option value="Cambodia">Cambodia</option>
                                      <option value="Cameroon">Cameroon</option>
                                      <option value="Canada">Canada</option>
                                      <option value="Canary Islands">Canary Islands</option>
                                      <option value="Cape Verde">Cape Verde</option>
                                      <option value="Cayman Islands">Cayman Islands</option>
                                      <option value="Central African Republic">Central African Republic</option>
                                      <option value="Chad">Chad</option>
                                      <option value="Channel Islands">Channel Islands</option>
                                      <option value="Chile">Chile</option>
                                      <option value="China">China</option>
                                      <option value="Christmas Island">Christmas Island</option>
                                      <option value="Cocos Island">Cocos Island</option>
                                      <option value="Colombia">Colombia</option>
                                      <option value="Comoros">Comoros</option>
                                      <option value="Congo">Congo</option>
                                      <option value="Cook Islands">Cook Islands</option>
                                      <option value="Costa Rica">Costa Rica</option>
                                      <option value="Cote DIvoire">Cote DIvoire</option>
                                      <option value="Croatia">Croatia</option>
                                      <option value="Cuba">Cuba</option>
                                      <option value="Curaco">Curacao</option>
                                      <option value="Cyprus">Cyprus</option>
                                      <option value="Czech Republic">Czech Republic</option>
                                      <option value="Denmark">Denmark</option>
                                      <option value="Djibouti">Djibouti</option>
                                      <option value="Dominica">Dominica</option>
                                      <option value="Dominican Republic">Dominican Republic</option>
                                      <option value="East Timor">East Timor</option>
                                      <option value="Ecuador">Ecuador</option>
                                      <option value="Egypt">Egypt</option>
                                      <option value="El Salvador">El Salvador</option>
                                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                                      <option value="Eritrea">Eritrea</option>
                                      <option value="Estonia">Estonia</option>
                                      <option value="Ethiopia">Ethiopia</option>
                                      <option value="Falkland Islands">Falkland Islands</option>
                                      <option value="Faroe Islands">Faroe Islands</option>
                                      <option value="Fiji">Fiji</option>
                                      <option value="Finland">Finland</option>
                                      <option value="France">France</option>
                                      <option value="French Guiana">French Guiana</option>
                                      <option value="French Polynesia">French Polynesia</option>
                                      <option value="French Southern Ter">French Southern Ter</option>
                                      <option value="Gabon">Gabon</option>
                                      <option value="Gambia">Gambia</option>
                                      <option value="Georgia">Georgia</option>
                                      <option value="Germany">Germany</option>
                                      <option value="Ghana">Ghana</option>
                                      <option value="Gibraltar">Gibraltar</option>
                                      <option value="Great Britain">Great Britain</option>
                                      <option value="Greece">Greece</option>
                                      <option value="Greenland">Greenland</option>
                                      <option value="Grenada">Grenada</option>
                                      <option value="Guadeloupe">Guadeloupe</option>
                                      <option value="Guam">Guam</option>
                                      <option value="Guatemala">Guatemala</option>
                                      <option value="Guinea">Guinea</option>
                                      <option value="Guyana">Guyana</option>
                                      <option value="Haiti">Haiti</option>
                                      <option value="Hawaii">Hawaii</option>
                                      <option value="Honduras">Honduras</option>
                                      <option value="Hong Kong">Hong Kong</option>
                                      <option value="Hungary">Hungary</option>
                                      <option value="Iceland">Iceland</option>
                                      <option value="Indonesia">Indonesia</option>
                                      <option value="India">India</option>
                                      <option value="Iran">Iran</option>
                                      <option value="Iraq">Iraq</option>
                                      <option value="Ireland">Ireland</option>
                                      <option value="Isle of Man">Isle of Man</option>
                                      <option value="Israel">Israel</option>
                                      <option value="Italy">Italy</option>
                                      <option value="Jamaica">Jamaica</option>
                                      <option value="Japan">Japan</option>
                                      <option value="Jordan">Jordan</option>
                                      <option value="Kazakhstan">Kazakhstan</option>
                                      <option value="Kenya">Kenya</option>
                                      <option value="Kiribati">Kiribati</option>
                                      <option value="Korea North">Korea North</option>
                                      <option value="Korea Sout">Korea South</option>
                                      <option value="Kuwait">Kuwait</option>
                                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                                      <option value="Laos">Laos</option>
                                      <option value="Latvia">Latvia</option>
                                      <option value="Lebanon">Lebanon</option>
                                      <option value="Lesotho">Lesotho</option>
                                      <option value="Liberia">Liberia</option>
                                      <option value="Libya">Libya</option>
                                      <option value="Liechtenstein">Liechtenstein</option>
                                      <option value="Lithuania">Lithuania</option>
                                      <option value="Luxembourg">Luxembourg</option>
                                      <option value="Macau">Macau</option>
                                      <option value="Macedonia">Macedonia</option>
                                      <option value="Madagascar">Madagascar</option>
                                      <option value="Malaysia">Malaysia</option>
                                      <option value="Malawi">Malawi</option>
                                      <option value="Maldives">Maldives</option>
                                      <option value="Mali">Mali</option>
                                      <option value="Malta">Malta</option>
                                      <option value="Marshall Islands">Marshall Islands</option>
                                      <option value="Martinique">Martinique</option>
                                      <option value="Mauritania">Mauritania</option>
                                      <option value="Mauritius">Mauritius</option>
                                      <option value="Mayotte">Mayotte</option>
                                      <option value="Mexico">Mexico</option>
                                      <option value="Midway Islands">Midway Islands</option>
                                      <option value="Moldova">Moldova</option>
                                      <option value="Monaco">Monaco</option>
                                      <option value="Mongolia">Mongolia</option>
                                      <option value="Montserrat">Montserrat</option>
                                      <option value="Morocco">Morocco</option>
                                      <option value="Mozambique">Mozambique</option>
                                      <option value="Myanmar">Myanmar</option>
                                      <option value="Nambia">Nambia</option>
                                      <option value="Nauru">Nauru</option>
                                      <option value="Nepal">Nepal</option>
                                      <option value="Netherland Antilles">Netherland Antilles</option>
                                      <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                      <option value="Nevis">Nevis</option>
                                      <option value="New Caledonia">New Caledonia</option>
                                      <option value="New Zealand">New Zealand</option>
                                      <option value="Nicaragua">Nicaragua</option>
                                      <option value="Niger">Niger</option>
                                      <option value="Nigeria">Nigeria</option>
                                      <option value="Niue">Niue</option>
                                      <option value="Norfolk Island">Norfolk Island</option>
                                      <option value="Norway">Norway</option>
                                      <option value="Oman">Oman</option>
                                      <option value="Pakistan">Pakistan</option>
                                      <option value="Palau Island">Palau Island</option>
                                      <option value="Palestine">Palestine</option>
                                      <option value="Panama">Panama</option>
                                      <option value="Papua New Guinea">Papua New Guinea</option>
                                      <option value="Paraguay">Paraguay</option>
                                      <option value="Peru">Peru</option>
                                      <option value="Phillipines">Philippines</option>
                                      <option value="Pitcairn Island">Pitcairn Island</option>
                                      <option value="Poland">Poland</option>
                                      <option value="Portugal">Portugal</option>
                                      <option value="Puerto Rico">Puerto Rico</option>
                                      <option value="Qatar">Qatar</option>
                                      <option value="Republic of Montenegro">Republic of Montenegro</option>
                                      <option value="Republic of Serbia">Republic of Serbia</option>
                                      <option value="Reunion">Reunion</option>
                                      <option value="Romania">Romania</option>
                                      <option value="Russia">Russia</option>
                                      <option value="Rwanda">Rwanda</option>
                                      <option value="St Barthelemy">St Barthelemy</option>
                                      <option value="St Eustatius">St Eustatius</option>
                                      <option value="St Helena">St Helena</option>
                                      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                      <option value="St Lucia">St Lucia</option>
                                      <option value="St Maarten">St Maarten</option>
                                      <option value="St Pierre & Miquelon">St Pierre &amp; Miquelon</option>
                                      <option value="St Vincent & Grenadines">St Vincent &amp; Grenadines</option>
                                      <option value="Saipan">Saipan</option>
                                      <option value="Samoa">Samoa</option>
                                      <option value="Samoa American">Samoa American</option>
                                      <option value="San Marino">San Marino</option>
                                      <option value="Sao Tome & Principe">Sao Tome &amp; Principe</option>
                                      <option value="Saudi Arabia">Saudi Arabia</option>
                                      <option value="Senegal">Senegal</option>
                                      <option value="Seychelles">Seychelles</option>
                                      <option value="Sierra Leone">Sierra Leone</option>
                                      <option value="Singapore">Singapore</option>
                                      <option value="Slovakia">Slovakia</option>
                                      <option value="Slovenia">Slovenia</option>
                                      <option value="Solomon Islands">Solomon Islands</option>
                                      <option value="Somalia">Somalia</option>
                                      <option value="South Africa">South Africa</option>
                                      <option value="Spain">Spain</option>
                                      <option value="Sri Lanka">Sri Lanka</option>
                                      <option value="Sudan">Sudan</option>
                                      <option value="Suriname">Suriname</option>
                                      <option value="Swaziland">Swaziland</option>
                                      <option value="Sweden">Sweden</option>
                                      <option value="Switzerland">Switzerland</option>
                                      <option value="Syria">Syria</option>
                                      <option value="Tahiti">Tahiti</option>
                                      <option value="Taiwan">Taiwan</option>
                                      <option value="Tajikistan">Tajikistan</option>
                                      <option value="Tanzania">Tanzania</option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Togo">Togo</option>
                                      <option value="Tokelau">Tokelau</option>
                                      <option value="Tonga">Tonga</option>
                                      <option value="Trinidad & Tobago">Trinidad &amp; Tobago</option>
                                      <option value="Tunisia">Tunisia</option>
                                      <option value="Turkey">Turkey</option>
                                      <option value="Turkmenistan">Turkmenistan</option>
                                      <option value="Turks & Caicos Is">Turks &amp; Caicos Is</option>
                                      <option value="Tuvalu">Tuvalu</option>
                                      <option value="Uganda">Uganda</option>
                                      <option value="United Kingdom">United Kingdom</option>
                                      <option value="Ukraine">Ukraine</option>
                                      <option value="United Arab Erimates">United Arab Emirates</option>
                                      <option value="United States of America">United States of America</option>
                                      <option value="Uraguay">Uruguay</option>
                                      <option value="Uzbekistan">Uzbekistan</option>
                                      <option value="Vanuatu">Vanuatu</option>
                                      <option value="Vatican City State">Vatican City State</option>
                                      <option value="Venezuela">Venezuela</option>
                                      <option value="Vietnam">Vietnam</option>
                                      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                      <option value="Wake Island">Wake Island</option>
                                      <option value="Wallis & Futana Is">Wallis &amp; Futana Is</option>
                                      <option value="Yemen">Yemen</option>
                                      <option value="Zaire">Zaire</option>
                                      <option value="Zambia">Zambia</option>
                                      <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button type="submit" className="default-btn reverse d-block"><span>Find Your Partner</span></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>It All Starts With A Date</h2>
                    <p>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col wow fadeInUp" data-wow-duration="1.5s">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/01.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={990960} data-speed={1500} /></h3>
                              <p>Members in Total</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col wow fadeInUp" data-wow-duration="1.6s">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/02.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={628590} data-speed={1500} /></h3>
                              <p>Members Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col wow fadeInUp" data-wow-duration="1.7s">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/03.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={314587} data-speed={1500} /></h3>
                              <p>Women Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col wow fadeInUp" data-wow-duration="1.8s">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/04.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={102369} data-speed={1500} /></h3>
                              <p>Men Online</p>
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
              <div className="story bg_img padding-top padding-bottom" style={{backgroundImage: 'url(assets/images/bg-img/02.jpg)'}}>
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Ollya Stories From Our Lovers</h2>
                    <p>Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col wow fadeInUp" data-wow-duration="1.5s">
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
                      <div className="col wow fadeInUp" data-wow-duration="1.6s">
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
                      <div className="col wow fadeInUp" data-wow-duration="1.7s">
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
              {/* ================> Member section start here <================== */}
              <div className="member member--style2 padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Most Popular Members</h2>
                    <p>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>
                  </div>
                  <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <ul className="nav nav-tabs member__tab" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="newest-tab" data-bs-toggle="tab" data-bs-target="#newest" type="button" role="tab" aria-controls="newest" aria-selected="true">Newest Members</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="activemember-tab" data-bs-toggle="tab" data-bs-target="#activemember" type="button" role="tab" aria-controls="activemember" aria-selected="false">Active Members</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="popularmember-tab" data-bs-toggle="tab" data-bs-target="#popularmember" type="button" role="tab" aria-controls="popularmember" aria-selected="false">Popular Members</button>
                      </li>
                    </ul>
                    <div className="tab-content mx-12-none" id="myTabContent">
                      <div className="tab-pane fade show active" id="newest" role="tabpanel" aria-labelledby="newest-tab">
                        <div className="row g-0 justify-content-center">
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Arika Q Smith</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>William R Show</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Karolin Kuhn</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Tobias Wagner</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Amanda Rodrigues</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Barros Pereira</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/08.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Emily Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/09.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Alves Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Sousa Carvalho</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="activemember" role="tabpanel" aria-labelledby="activemember-tab">
                        <div className="row g-0 justify-content-center">
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Amanda Rodrigues</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Barros Pereira</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/08.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Emily Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/09.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Alves Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Arika Q Smith</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>William R Show</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Karolin Kuhn</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Tobias Wagner</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Sousa Carvalho</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="popularmember" role="tabpanel" aria-labelledby="popularmember-tab">
                        <div className="row g-0 justify-content-center">
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Karolin Kuhn</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Tobias Wagner</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Amanda Rodrigues</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Barros Pereira</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/08.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Emily Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/09.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Alves Fernandes</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity member__activity--ofline" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Arika Q Smith</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>William R Show</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="member__item">
                            <div className="member__inner">
                              <div className="member__thumb">
                                <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                <span className="member__activity" />
                              </div>
                              <div className="member__content">
                                <a href="member-single.html"><h5>Sousa Carvalho</h5></a>
                                <p>registered 4 months, 1 week ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a href="members.html" className="default-btn"><span>See More Popular</span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Member section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/02.jpg)'}}>
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Why Choose Ollya</h2>
                    <p>Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                      <div className="col wow fadeInUp" data-wow-duration="1.5s">
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
                      <div className="col wow fadeInUp" data-wow-duration="1.6s">
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
                      <div className="col wow fadeInUp" data-wow-duration="1.7s">
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
                      <div className="col wow fadeInUp" data-wow-duration="1.8s">
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
              {/* Transportation Section Start Here */}
              <section className="transportation padding-top padding-bottom">
                <div className="container">
                  <div className="section__wrapper">
                    <div className="row">
                      <div className="col-lg-4 col-12">
                        <div className="left">
                          <div className="section__header style-2 mb-lg-0 wow fadeInUp" data-wow-duration="1.5s">
                            <h2>Meet Singles in Your Area</h2>
                            <p>If you want to meet local singles for dating, companionship, friendship or even more, you have come to the right place.</p>
                            <ul>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/01.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">United kingdom</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/02.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Germany</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/03.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">United states</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/04.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Brazil</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/05.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Falkland islands</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/06.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Portugal</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/07.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Australia</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/08.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">India</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/09.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">South Africa</a></div>
                              </li>
                              <li>
                                <div className="thumb"> <img src="assets/images/transport/10.jpg" alt="lab-trensport" /></div>
                                <div className="content"><a href="members.html">Bangladesh</a></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-12">
                        <div className="right wow fadeInUp" data-wow-duration="1.5s">
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">United kingdom</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">United states</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Falkland islands</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Australia</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">South Africa</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Germany</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Brazil</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Portugal</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">India</a></div>
                          </div>
                          <div className="lab-line">
                            <span />
                            <div className="lab-tooltip"><a href="members.html">Bangladesh</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Transportation Section Ending Here */}
              {/* ================> Work section start here <================== */}
              <div className="work work--style2 padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/01.jpg)'}}>
                <div className="container">
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center">
                      <div className="col-xl-6 col-lg-8 col-12 wow fadeInLeft" data-wow-duration="1.5s">
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
                      <div className="col-xl-6 col-lg-8 col-12 wow fadeInRight" data-wow-duration="1.5s">
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
                      <div className="app__item wow fadeInUp" data-wow-duration="1.5s">
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
              {/*   index-2.html    ,     15:17:47 GMT */}
            </div>
          );
        }

export default Index2