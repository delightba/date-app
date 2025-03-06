import React from 'react'

function GroupSingle() {
  return (
            <div>
              {/* ================> Page Header section start here <================== */}
              <div className="pageheader bg_img" style={{backgroundImage: 'url(assets/images/bg-img/pageheader.jpg)'}}>
                <div className="container">
                  <div className="pageheader__content text-center">
                    <h2>Group Single Page</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Community</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Group Single</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* ================> Page Header section end here <================== */}
              {/* ================> Group section end here <================== */}
              <div className="group group--single padding-bottom">
                <div className="group__top">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 d-none d-xl-block" />
                      <div className="col-xl-6">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="gt1-tab" data-bs-toggle="tab" data-bs-target="#gt1" type="button" role="tab" aria-controls="gt1" aria-selected="true"><i className="fa-solid fa-house" /> Home</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="gt2-tab" data-bs-toggle="tab" data-bs-target="#gt2" type="button" role="tab" aria-controls="gt2" aria-selected="false"><i className="fa-solid fa-users" /> Members <span>30</span></button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="gt3-tab" data-bs-toggle="tab" data-bs-target="#gt3" type="button" role="tab" aria-controls="gt3" aria-selected="false"><i className="fa-solid fa-video" /> Media <span>06</span></button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="gt4-tab" data-bs-toggle="tab" data-bs-target="#gt4" type="button" role="tab" aria-controls="gt4" aria-selected="false"><i className="fa-solid fa-file" /> Forums <span>06</span></button>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-3 d-none d-xl-block" />
                    </div>
                  </div>
                </div>
                <div className="group__bottom">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-xl-6 order-xl-1">
                        <div className="group__bottom--left">
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="gt1" role="tabpanel" aria-labelledby="gt1-tab">
                              <div className="group__bottom--area">
                                <div className="group__bottom--head">
                                  <div className="left"><i className="fa-solid fa-rss" /> RSS</div>
                                  <div className="right">
                                    Show :
                                    <div className="banner__inputlist">
                                      <select>
                                        <option selected>Everything</option>
                                        <option value>Recent Post</option>
                                        <option value>old Post</option>
                                        <option value>All Post</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="group__bottom--body">
                                  <ul>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Theodore Doe <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                          <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                            <span className="member__activity member__activity--ofline" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Sarah Schuster <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                        </div>
                                      </div>
                                      <div className="bottom">
                                        <div className="bottom__thumb">
                                          <img src="assets/images/group/single/01.jpg" alt="dating thumb" />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                          <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Mili Jan <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                          <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Peter Lange <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                          <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Birgit Neudorf <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                          <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Ralf Hertzog <span>posted an update in the group</span></h6></a>
                                          <span>4 years ago</span>
                                        </div>
                                      </div>
                                      <div className="bottom">
                                        <div className="bottom__thumb">
                                          <img src="assets/images/group/single/02.jpg" alt="dating thumb" />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="text-center mt-5">
                                    <a href="#" className="default-btn"><span><i className="fa-solid fa-spinner" /> Load More</span></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="gt2" role="tabpanel" aria-labelledby="gt2-tab">
                              <div className="group__bottom--area">
                                <div className="group__bottom--head">
                                  <div className="left">
                                    <form action="#">
                                      <input type="text" name="search" placeholder="search" />
                                      <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                    </form>
                                  </div>
                                  <div className="right">
                                    Orader By:
                                    <div className="banner__inputlist">
                                      <select>
                                        <option selected>Newest</option>
                                        <option value>Popular</option>
                                        <option value>Old</option>
                                        <option value>Recent</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="group__bottom--body">
                                  <div className="member">
                                    <div className="row g-3 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/01.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Michele Storm</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/02.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Hanna Marcovick</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-venus" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/03.jpg" alt="member-img" />
                                              <span className="member__activity member__activity--ofline">2 Days ago</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Smith Jhonson</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/01.jpg" alt="member-img" />
                                              <span className="member__activity member__activity--ofline">32 Minites Ago</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Brady Patterson</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/04.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Peter Shull</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-venus" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/02.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Alesandra Cirilo</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/03.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Diana Kuhn</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/05.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Mathias Maur</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-venus" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/04.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Maria Glockner</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/05.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Nadine Lange</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/06.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Marko Mayer</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-venus" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/06.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Sophia Bader</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/07.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Maria Braun</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/male/08.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Leon Baader</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-venus" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="member__item w-100">
                                          <div className="member__inner m-0">
                                            <div className="member__thumb">
                                              <img src="assets/images/member/female/08.jpg" alt="member-img" />
                                              <span className="member__activity">Online</span>
                                            </div>
                                            <div className="member__content">
                                              <a href="member-single.html"><h6>Janina Baer</h6></a>
                                              <p>32 Years old <i className="fa-solid fa-mars" /></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center mt-5">
                                    <a href="#" className="default-btn"><span><i className="fa-solid fa-spinner" /> Load More</span></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="gt3" role="tabpanel" aria-labelledby="gt3-tab">
                              <div className="group__bottom--body bg-white">
                                <div className="group__bottom--allmedia">
                                  <div className="media-wrapper">
                                    <ul className="nav nav-tabs" id="myTab33" role="tablist">
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="all-media-tab" data-bs-toggle="tab" data-bs-target="#all-media" type="button" role="tab" aria-controls="all-media" aria-selected="true"><i className="fa-solid fa-table-cells-large" /> All <span>12</span></button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="album-tab" data-bs-toggle="tab" data-bs-target="#album" type="button" role="tab" aria-controls="album" aria-selected="false"><i className="fa-solid fa-camera" /> Albums <span>4</span></button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="photos-media-tab" data-bs-toggle="tab" data-bs-target="#photos-media" type="button" role="tab" aria-controls="photos-media" aria-selected="false"><i className="fa-solid fa-image" /> Photos <span>4</span></button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false"><i className="fa-solid fa-video" /> Videos <span>4</span></button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music" type="button" role="tab" aria-controls="music" aria-selected="false"><i className="fa-solid fa-music" /> Music <span>0</span></button>
                                      </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent33">
                                      <div className="tab-pane fade show active" id="all-media" role="tabpanel" aria-labelledby="all-media-tab">
                                        <div className="media-content">
                                          <ul className="media-upload">
                                            <li className="upload-now">
                                              <div className="custom-upload">
                                                <div className="file-btn"><i className="fa-solid fa-upload" /> Upload</div>
                                                <input type="file" />
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/01.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/02.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/03.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/04.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/05.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/06.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/07.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/08.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/09.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/10.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/11.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/12.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="text-center mt-5">
                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner" /> Load More</a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="album" role="tabpanel" aria-labelledby="album-tab">
                                        <div className="media-content">
                                          <ul className="media-upload">
                                            <li className="upload-now">
                                              <div className="custom-upload">
                                                <div className="file-btn"><i className="fa-solid fa-upload" /> Upload</div>
                                                <input type="file" />
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/02.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/06.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/10.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb albam-thumb">
                                                <img src="assets/images/allmedia/12.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase:collection" className="icon">
                                                  <i className="fa-solid fa-camera" />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="text-center mt-5">
                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner" /> Load More</a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="photos-media" role="tabpanel" aria-labelledby="photos-media-tab">
                                        <div className="media-content">
                                          <ul className="media-upload">
                                            <li className="upload-now">
                                              <div className="custom-upload">
                                                <div className="file-btn"><i className="fa-solid fa-upload" /> Upload</div>
                                                <input type="file" />
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/03.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/04.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/08.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb">
                                                <img src="assets/images/allmedia/09.jpg" alt="dating thumb" />
                                                <a href="#groupmodal" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-image" />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="text-center mt-5">
                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner" /> Load More</a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                                        <div className="media-content">
                                          <ul className="media-upload">
                                            <li className="upload-now">
                                              <div className="custom-upload">
                                                <div className="file-btn"><i className="fa-solid fa-upload" /> Upload</div>
                                                <input type="file" />
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/01.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/05.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/07.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="media-thumb video-thumb">
                                                <img src="assets/images/allmedia/11.jpg" alt="dating thumb" />
                                                <a href="#groupmodalvideo" data-rel="lightcase" className="icon">
                                                  <i className="fa-solid fa-circle-play" />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="text-center mt-5">
                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner" /> Load More</a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">
                                        <div className="media-content">
                                          <ul className="media-upload">
                                            <li className="upload-now">
                                              <div className="custom-upload">
                                                <div className="file-btn"><i className="fa-solid fa-upload" /> Upload</div>
                                                <input type="file" />
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="row">
                                            <div className="col">
                                              <p><i className="icofont-worried" /> Sorry !!
                                                There's no media found for the
                                                request !! </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="gt4" role="tabpanel" aria-labelledby="gt4-tab">
                              <div className="group__bottom--body bg-white">
                                <h4>Forums</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 order-xl-0">
                        <div className="group__bottom--center">
                          <div className="story__item style2">
                            <div className="story__inner">
                              <div className="story__thumb position-relative">
                                <img src="assets/images/group/01.jpg" alt="dating thumb" />
                              </div>
                              <div className="story__content px-0 pb-0">
                                <h4>Be young, love life</h4>
                                <div className="story__content--content pb-3">
                                  <p><i className="fa-solid fa-earth-africa" /> Public Group</p>
                                </div>
                                <p className="mb-2">Challenges are whats make lifes interesting and overcoming them is what makes life meaningful.</p>
                                <i>Joshua J. Marine</i>
                                <div className="story__content--author mt-3 pb-2">
                                  <h6>Admins &amp; moderators</h6>
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
                                        8+
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
                      <div className="col-xl-3 order-xl-2">
                        <div className="group__bottom--right">
                          <div className="modal-content border-0 mb-4">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Filter your search</h5>
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
                                      <button type="submit" className="default-btn d-block w-100"><span>Find Your Partner </span></button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="active-member bg-white mb-4">
                            <div className="modal-header">
                              <h6>Members</h6>
                              <ul className="nav nav-tabs" id="myTab3" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="Newest-tab" data-bs-toggle="tab" data-bs-target="#Newest" type="button" role="tab" aria-controls="Newest" aria-selected="true">Newest </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="Popular-tab" data-bs-toggle="tab" data-bs-target="#Popular" type="button" role="tab" aria-controls="Popular" aria-selected="false">Popular</button>
                                </li>
                              </ul>
                            </div>
                            <div className="modal-body group__bottom--body">
                              <div className="tab-content" id="myTabContent3">
                                <div className="tab-pane fade show active" id="Newest" role="tabpanel" aria-labelledby="Newest-tab">
                                  <ul>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Marina Holzman</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Thorsten Luft</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Juliane Bieber</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Jens Klein</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane fade" id="Popular" role="tabpanel" aria-labelledby="Popular-tab">
                                  <ul>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/08.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/09.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/10.jpg" alt="member-img" />
                                            <span className="member__activity" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="member-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="active-group bg-white">
                            <div className="modal-header">
                              <h6>Group</h6>
                              <ul className="nav nav-tabs" id="myTab4" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="aNewest-tab" data-bs-toggle="tab" data-bs-target="#aNewest" type="button" role="tab" aria-controls="aNewest" aria-selected="true">Newest </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="aPopular-tab" data-bs-toggle="tab" data-bs-target="#aPopular" type="button" role="tab" aria-controls="aPopular" aria-selected="false">Popular</button>
                                </li>
                              </ul>
                            </div>
                            <div className="modal-body group__bottom--body">
                              <div className="tab-content" id="myTabContent4">
                                <div className="tab-pane fade show active" id="aNewest" role="tabpanel" aria-labelledby="aNewest-tab">
                                  <ul>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Marina Holzman</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Thorsten Luft</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Juliane Bieber</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Jens Klein</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane fade" id="aPopular" role="tabpanel" aria-labelledby="aPopular-tab">
                                  <ul>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/08.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/09.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="top">
                                        <div className="left member--style2">
                                          <div className="member__thumb">
                                            <img src="assets/images/member/home2/10.jpg" alt="member-img" />
                                          </div>
                                        </div>
                                        <div className="right">
                                          <a href="group-single.html"><h6>Leon Schmid</h6></a>
                                          <span>2 years ago</span>
                                        </div>
                                      </div>
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
                </div>
              </div>
              <div className="groupmodal" id="groupmodal">
                <div className="container">
                  <div className="groupmodal__area">
                    <div className="post-item">
                      <div className="post-content">
                        <div className="post-author">
                          <div className="post-author-inner">
                            <div className="author-thumb">
                              <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                            </div>
                            <div className="author-details">
                              <h6><a href="#">William Smith</a></h6>
                              <ul className="post-status">
                                <li className="post-privacy"><i className="icofont-world" /> Public</li>
                                <li className="post-time">6 Mintues Ago </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="post-description">
                          <div className="post-desc-img">
                            <img src="assets/images/group/single/01.jpg" alt="dating thumb" />
                          </div>
                        </div>
                      </div>
                      <div className="post-meta">
                        <div className="post-meta-top">
                          <p><a href="#"><i className="fa-solid fa-thumbs-up" /> <i className="fa-solid fa-heart" /> <i className="fa-solid fa-face-laugh" /><span>Julia, Petrova &amp; 306 like this</span></a></p>
                          <p><a href="#">136 Comments</a></p>
                        </div>
                        <div className="post-meta-bottom">
                          <ul className="react-list">
                            <li className="react"><a href="#"><i className="fa-solid fa-thumbs-up" />Like</a> </li>
                            <li className="react"><a href="#"><i className="fa-solid fa-comment" />Comment</a></li>
                            <li className="react"><a href="#"><i className="fa-solid fa-share-nodes" /> Share </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="groupmodal" id="groupmodalvideo">
                <div className="container">
                  <div className="groupmodal__area">
                    <div className="post-item">
                      <div className="post-content">
                        <div className="post-author">
                          <div className="post-author-inner">
                            <div className="author-thumb">
                              <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                            </div>
                            <div className="author-details">
                              <h6><a href="#">William Smith</a></h6>
                              <ul className="post-status">
                                <li className="post-privacy"><i className="icofont-world" /> Public</li>
                                <li className="post-time">6 Mintues Ago </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="post-description">
                          <div className="post-desc-img">
                            <iframe src="https://www.youtube.com/embed/U9O8G5AreXE" title="YouTube video player" height={300} allowFullScreen />
                          </div>
                        </div>
                      </div>
                      <div className="post-meta">
                        <div className="post-meta-top">
                          <p><a href="#"><i className="fa-solid fa-thumbs-up" /> <i className="fa-solid fa-heart" /> <i className="fa-solid fa-face-laugh" /><span>Julia,Akhi &amp; 306 like this</span></a></p>
                          <p><a href="#">136 Comments</a></p>
                        </div>
                        <div className="post-meta-bottom">
                          <ul className="react-list">
                            <li className="react"><a href="#"><i className="fa-solid fa-thumbs-up" />Like</a> </li>
                            <li className="react"><a href="#"><i className="fa-solid fa-comment" />Comment</a></li>
                            <li className="react"><a href="#"><i className="fa-solid fa-share-nodes" /> Share </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================> Group section end here <================== */}
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel2">Filter your search</h5>
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
              {/*   group-single.html    ,     15:19:50 GMT */}
            </div>
          );
        };

export default GroupSingle