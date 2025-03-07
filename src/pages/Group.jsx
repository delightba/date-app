import React from 'react'

function Group() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Ollya All Groups</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Community</a></li>
                        <li className="breadcrumb-item active" aria-current="page">All Groups</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> About section start here <================== */}
              <div className="about about--style3 padding-top pt-xl-0">
                <div className="container">
                  <div className="section__wrapper">
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
              <div className="member story story--style2 padding-top padding-bottom overflow-hidden">
                <div className="container">
                  <div className="section__wrapper">
                    <div className="member__info mb-4">
                      <div className="member__info--left">
                        <div className="member__info--filter">
                          <div className="default-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Filter Your Search <i className="fa-solid fa-sliders" /></span></div>
                        </div>
                        <div className="member__info--count">
                          <div className="default-btn"><span>All Members</span></div>
                          <p>20365587</p>
                        </div>
                      </div>
                      <div className="member__info--right">
                        <div className="member__info--customselect right w-100">
                          <div className="default-btn"><span>Order By:</span></div>
                          <div className="banner__inputlist">
                            <select>
                              <option value={0}>Last Active </option>
                              <option value={1}>Oldest</option>
                              <option value={2}>Popular</option>
                              <option value={3}>Most Active</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4 justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1">
                      <div className="col">
                        <div className="story__item style2 story--theme-color">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/01.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">2 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Be young, love life</h4></a>
                              <p>You become what you believe. –Oprah Winfrey</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/01.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/02.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/03.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/04.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/05.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color2">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/02.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">4 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Learn how to love</h4></a>
                              <p>Fall seven times and stand up eight. –Japanese Proverb</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/06.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/07.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/08.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/09.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/10.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color3">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/03.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">8 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Love, health and...</h4></a>
                              <p>Definiteness of purpose is the starting point of all</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/11.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/12.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/13.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/14.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color4">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/04.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">12 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Ollya Dating Theme...</h4></a>
                              <p> will most likely be using this theme really nice dating theme for</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/01.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/06.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/03.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/07.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/02.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color5">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/05.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">18 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Skip relation routine</h4></a>
                              <p>Twenty years from now you will be more disappointed</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/11.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/03.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/09.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/07.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color6">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/06.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">21 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Gay Community</h4></a>
                              <p>It’s your place in the world; it’s your life. </p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/12.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/10.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/01.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/08.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color7">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/07.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">24 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Only Buddies</h4></a>
                              <p>You miss 100% of the shots you don’t take.</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/02.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/09.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/04.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/08.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color8">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/08.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">30 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Love Stories</h4></a>
                              <p>You become what you believe. –Oprah Winfrey</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/01.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/07.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/14.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/02.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/05.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color9">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/09.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">12 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Be young, love life</h4></a>
                              <p>You become what you believe. –Oprah Winfrey</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/03.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/01.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/02.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/04.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/10.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color10">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/10.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">12 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Continually bandwidth rather.</h4></a>
                              <p>Fall seven times and stand up eight. –Japanese Proverb</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/11.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/05.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/04.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/07.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color11">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/11.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">19 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Conveniently simplify exceptional.</h4></a>
                              <p>Fall seven times and stand up eight. –Japanese Proverb</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/12.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/09.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/06.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/08.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/05.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="story__item style2 story--theme-color12">
                          <div className="story__inner">
                            <div className="story__thumb position-relative">
                              <a href="group-single.html"><img src="assets/images/group/12.jpg" alt="dating thumb" /></a>
                              <span className="member__activity member__activity--ofline">22 days ago</span>
                            </div>
                            <div className="story__content px-0 pb-0">
                              <a href="group-single.html"><h4>Seamlessly architect scalable.</h4></a>
                              <p>Fall seven times and stand up eight. –Japanese Proverb</p>
                              <div className="story__content--author justify-content-between border-top pt-3">
                                <div className="story__content--content">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <ul className="img-stack">
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/13.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Klaus Klug</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/15.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Mary C. Shen</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/10.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Lucas Vogler</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/09.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Manuela Moench</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img src="assets/images/group/icon/06.png" alt="member-img" />
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">Matthias Propst</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="bg-theme">
                                    <a href="#">
                                      12+
                                      <div className="time-tooltip">
                                        <div className="time-tooltip-holder">
                                          <span className="tooltip-info">More</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="member__pagination mt-4">
                      <div className="member__pagination--left">
                        <p>Viewing 1 - 20 of 12,345 Members</p>
                      </div>
                      <div className="member__pagination--right">
                        <ul className="default-pagination">
                          <li>
                            <a href="#"><i className="fas fa-chevron-left" /></a>
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
                            <a href="#"><i className="fas fa-chevron-right" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Member section end here <================== */}
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Filter your search</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <form action="#">
                        <div className="banner__list">
                          <div className="row align-items-center row-cols-1">
                            <div className="col">
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
                            <div className="col">
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
                            <div className="col">
                              <label>Country</label>
                              <div className="banner__inputlist">
                                <select id="country2" name="country2">
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
              </div>
              {/* modal */}
              {/*   group.html    ,     15:18:43 GMT */}
            </div>
          );
        }

export default Group