import React from 'react'

export default function Banner() {
  return (
    <>
      <section className="banner-home bg-holder" data-jarallax='{"speed": 0.6}' style={{ backgroundImage: `url("assets/images/slider/01.jpg")` }}>
        <div className="swiper-container">
          <div className="swiper-wrapper position-relative">
            <div className="swiper-slide">
              <div className="banner align-items-center d-flex">
                <div className="swipeinner container">
                  <div className="row h-100">
                    <div className="col-sm-11 offset-sm-1">
                      <div className="banner-content">
                        <h3 className="text-uppercase text-white mb-3" data-swiper-animation="fadeInDown" data-duration="1s" data-delay="0.5s">Trainer in gym gives you training how to be fit </h3>
                        <h1 className="text-uppercase text-white banner-title" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="1.0s">Love <span className="d-block text-primary">your body.</span></h1>
                        <p className="text-uppercase text-white lead mb-0" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="1.5s">DO NOT LOSE TRACK OF YOUR GOAL DUE TO HEALTH ISSUES.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner align-items-center d-flex">
                <div className="swipeinner container">
                  <div className="row h-100">
                    <div className="col-sm-11 offset-sm-1">
                      <div className="banner-content">
                        <h3 className="text-uppercase text-white mb-3" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">Nothing tastes as good as being fit feels.</h3>
                        <h1 className="text-uppercase text-white banner-title" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="1.0s">Making  <span className="d-block text-primary">fitness fun.</span></h1>
                        <p className="text-uppercase text-white lead mb-0" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="1.5s">Success never comes to those who quit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="social d-flex align-items-center justify-content-center">
            <div className="d-flex share">
              <h6 className="text-white text-uppercase m-0">Share</h6>
            </div>
            <ul className="list-unstyled m-0">
              <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
              <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
              <li><a href="#"> <i className="fab fa-pinterest-p"></i> </a></li>
              <li><a href="#"> <i className="fab fa-linkedin-in"></i> </a></li>
            </ul>
          </div>
          <div className="container">
            <div className="row g-0 align-items-end">
              <div className="col-md-4">
                <div className="feature-box d-flex align-items-center justify-content-center">
                  <i className="flaticon-treadmill-1 font-xxxl"></i>
                  <h4 className="ms-4 mb-0">Modern <br />equipment</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box d-flex align-items-center active">
                  <i className="flaticon-tank-top font-xxxl"></i>
                  <h4 className="ms-4 mb-0">Coaches <br />champions</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box d-flex align-items-center justify-content-center">
                  <i className="flaticon-showers font-xxxl"></i>
                  <h4 className="ms-4 mb-0">Swimming pools <br />available</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
