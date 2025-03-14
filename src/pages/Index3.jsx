import React from 'react'

function Index3() {
  return (
            <div>
              {/* ================> Banner section start here <================== */}
              <div className="banner banner--style3 padding-top bg_img" style={{backgroundImage: 'url(assets/images/banner/bg-3.jpg)'}}>
                <div className="container">
                  <div className="row g-0 justify-content-center justify-content-xl-between">
                    <div className="col-lg-5 col-12 wow fadeInLeft" data-wow-duration="1.5s">
                      <div className="banner__content">
                        <div className="banner__title">
                          <h2>We Have More Than <span>2.000.000</span> Join Members</h2>
                          <p>Still looking for your significant other? Ollya is the place for you! Join now to meet single men and women worldwide.</p>
                          <a href="register.html" className="default-btn style-2"><span>Registration Now</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                      <div className="banner__thumb text-xl-end">
                        <img src="assets/images/banner/03.png" alt="banner" />
                        <div className="banner__thumb--shape">
                          <div className="shapeimg">
                            <img src="assets/images/banner/shape/home3/01.png" alt="dating thumb" />
                          </div>
                        </div>
                        <div className="banner__thumb--title">
                          <h4>Are You Waiting For Dating?</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Banner section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about about--style3 padding-top pt-xl-0">
                <div className="container">
                  <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <form action="#">
                      <div className="banner__list">
                        <div className="row align-items-center row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1">
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
                          <div className="col">
                            <label>Age</label>
                            <div className="row">
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
                          <div className="col">
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
                          <div className="col">
                            <button type="submit" className="default-btn reverse d-block"><span>Find Your Partner</span></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* ================> About section end here <================== */}
              {/* ================> Member section start here <================== */}
              <div className="member member--style3 padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Only True People</h2>
                    <p>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-0 mx-12-none justify-content-center wow fadeInUp" data-wow-duration="1.5s">
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/01.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/02.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Arika Q Smith</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/03.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>William R Show</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/04.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Hanna Marcovick</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/05.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/06.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Smith Jhonson</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/07.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>Arika Q Smith</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="member__item">
                        <div className="member__inner">
                          <div className="member__thumb">
                            <img src="assets/images/member/home3/08.jpg" alt="member-img" />
                          </div>
                          <div className="member__content">
                            <a href="member-single.html"><h5>William R Show</h5></a>
                            <p>Active 10 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4 wow fadeInUp" data-wow-duration="2s">
                      <a href="members.html" className="default-btn"><span>View More Popular <i className="ms-2 fas fa-users" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Member section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about about--style4 padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/02.jpg)'}}>
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>It All Starts With A Date</h2>
                    <p>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>
                  </div>
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 wow fadeInUp" data-wow-duration="1.5s">
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/home3/01.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={990960} data-speed={1500} /></h3>
                              <p>Members in Total</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/home3/02.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={628590} data-speed={1500} /></h3>
                              <p>Members Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/home3/03.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={314587} data-speed={1500} /></h3>
                              <p>Men Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="about__item text-center">
                          <div className="about__inner">
                            <div className="about__thumb">
                              <img src="assets/images/about/icon/home3/04.png" alt="dating thumb" />
                            </div>
                            <div className="about__content">
                              <h3><span className="counter" data-to={102369} data-speed={1500} /></h3>
                              <p>Women Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-5 wow fadeInUp" data-wow-duration="2s">
                      <a href="https://www.youtube.com/embed/U9O8G5AreXE" className="default-btn" data-rel="lightcase"><span>Our TV Commercial <i className="fas fa-video" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> About section end here <================== */}
              {/* ================> Meet section start here <================== */}
              <div className="meet meet--style2 padding-top padding-bottom">
                <div className="container">
                  <div className="section__wrapper">
                    <div className="row g-4 justify-content-center align-items-center">
                      <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                        <div className="section__header">
                          <h2>Meet Singles in Your Area</h2>
                          <p>Find your match in the most popular cities across the globe. Be adventurous and finds someone from others parts of the globe, you never know where love is hiding. </p>
                          <a href="members.html" className="default-btn"><span>Search Near You  <i className="fas fa-map-marker-alt ms-2" /></span></a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1.6s">
                        <div className="meet__item">
                          <div className="meet__inner">
                            <div className="meet__thumb">
                              <a href="members.html"><img src="assets/images/meet/02.jpg" alt="dating thumb" /></a>
                            </div>
                            <div className="meet__content">
                              <img src="assets/images/meet/icon/02.jpg" alt="dating thumb" />
                              <a href="members.html"><h4>London, UK</h4></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1.7s">
                        <div className="meet__item">
                          <div className="meet__inner">
                            <div className="meet__thumb">
                              <a href="members.html"><img src="assets/images/meet/03.jpg" alt="dating thumb" /></a>
                            </div>
                            <div className="meet__content">
                              <img src="assets/images/meet/icon/03.jpg" alt="dating thumb" />
                              <a href="members.html"><h4>Barcelona, Spain</h4></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1.8s">
                        <div className="meet__item">
                          <div className="meet__inner">
                            <div className="meet__thumb">
                              <a href="members.html"><img src="assets/images/meet/04.jpg" alt="dating thumb" /></a>
                            </div>
                            <div className="meet__content">
                              <img src="assets/images/meet/icon/04.jpg" alt="dating thumb" />
                              <a href="members.html"><h4>Taj Mahal, India</h4></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1.9s">
                        <div className="meet__item">
                          <div className="meet__inner">
                            <div className="meet__thumb">
                              <a href="members.html"><img src="assets/images/meet/05.jpg" alt="dating thumb" /></a>
                            </div>
                            <div className="meet__content">
                              <img src="assets/images/meet/icon/05.jpg" alt="dating thumb" />
                              <a href="members.html"><h4>Burj Al Arab, Dubai</h4></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="2s">
                        <div className="meet__item">
                          <div className="meet__inner">
                            <div className="meet__thumb">
                              <a href="members.html"><img src="assets/images/meet/06.jpg" alt="dating thumb" /></a>
                            </div>
                            <div className="meet__content">
                              <img src="assets/images/meet/icon/06.jpg" alt="dating thumb" />
                              <a href="#"><h4>Paris, France</h4></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Meet section end here <================== */}
              {/* ================> Work section start here <================== */}
              <div className="work padding-top padding-bottom bg_img" style={{backgroundImage: 'url(assets/images/bg-img/01.jpg)'}}>
                <div className="container">
                  <div className="section__header text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Why Choose Ollya</h2>
                  </div>
                  <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <div className="d-xl-flex align-items-start work__area">
                      <div className="nav flex-xl-column nav-pills me-xl-4 work__tablist" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link" id="work__tab1-tab" data-bs-toggle="pill" data-bs-target="#work__tab1" type="button" role="tab" aria-controls="work__tab1" aria-selected="true"><img src="assets/images/work/01.png" alt="dating thumb" className="me-3" /><span>Search Your Partner</span></button>
                        <button className="nav-link active" id="work__tab2-tab" data-bs-toggle="pill" data-bs-target="#work__tab2" type="button" role="tab" aria-controls="work__tab2" aria-selected="false"><img src="assets/images/work/02.png" alt="dating thumb" className="me-3" /><span>100% Match People</span></button>
                        <button className="nav-link" id="work__tab3-tab" data-bs-toggle="pill" data-bs-target="#work__tab3" type="button" role="tab" aria-controls="work__tab3" aria-selected="false"><img src="assets/images/work/03.png" alt="dating thumb" className="me-3" /><span>Find Out Partner</span></button>
                        <button className="nav-link" id="work__tab4-tab" data-bs-toggle="pill" data-bs-target="#work__tab4" type="button" role="tab" aria-controls="work__tab4" aria-selected="false"><img src="assets/images/work/04.png" alt="dating thumb" className="me-3" /><span>Live The Story</span></button>
                      </div>
                      <div className="tab-content work__tabcontent" id="v-pills-tabContent">
                        <div className="tab-pane fade" id="work__tab1" role="tabpanel" aria-labelledby="work__tab1-tab">
                          <div className="work__item">
                            <div className="work__inner">
                              <div className="work__thumb">
                                <img src="assets/images/work/05.png" alt="dating thumb" />
                              </div>
                              <div className="work__content">
                                <h3>Search Your Partner</h3>
                                <p>The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade show active" id="work__tab2" role="tabpanel" aria-labelledby="work__tab2-tab">
                          <div className="work__item">
                            <div className="work__inner">
                              <div className="work__thumb">
                                <img src="assets/images/work/06.png" alt="dating thumb" />
                              </div>
                              <div className="work__content">
                                <h3>100% Match People</h3>
                                <p>The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="work__tab3" role="tabpanel" aria-labelledby="work__tab3-tab">
                          <div className="work__item">
                            <div className="work__inner">
                              <div className="work__thumb">
                                <img src="assets/images/work/07.png" alt="dating thumb" />
                              </div>
                              <div className="work__content">
                                <h3>Find Out Partner</h3>
                                <p>The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="work__tab4" role="tabpanel" aria-labelledby="work__tab4-tab">
                          <div className="work__item">
                            <div className="work__inner">
                              <div className="work__thumb">
                                <img src="assets/images/work/08.png" alt="dating thumb" />
                              </div>
                              <div className="work__content">
                                <h3>Live The Story</h3>
                                <p>The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Work section end here <================== */}
              {/* ================> Story section start here <================== */}
              <div className="story padding-top padding-bottom">
                <div className="container">
                  <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>Ollya Success Stories</h2>
                    <p>Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.</p>
                  </div>
                  <div className="section__wrapper wow fadeInUp" data-wow-duration="2s">
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
              {/*   index-3.html    ,     15:17:51 GMT */}
            </div>
          );
        }

export default Index3