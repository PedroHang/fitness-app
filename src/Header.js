import React from 'react'
import styled from 'styled-components'
import { BtnPrimary } from './styles/BtnPrimary'



export default function Header() {
  return (
    <header className="header header-transparent default">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-static-top navbar-expand-lg header-sticky">
              <a className="navbar-brand" href="/fitness-app"><img className="img-fluid logo" src="assets/images/logo.svg" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-left"></i>
              </button>
              <div className="navbar-collapse collapse justify-content-center" id="navbarmenu">
                <ul className="nav navbar-nav">
                  <li className="nav-item dropdown active">
                    <a className="nav-link" href="pages/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home<i className="fas fa-chevron-down fa-xs"></i></a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="active"><a className="dropdown-item" href="pages/index.html">Home Default</a></li>
                      <li><a className="dropdown-item" href="pages/index-yoga.html">Home Yoga</a></li>
                      <li><a className="dropdown-item" href="pages/index-shop.html">Home Shop</a></li>
                      <li><a className="dropdown-item" href="pages/index-2.html">Home Dark</a></li>
                    </ul>
                  </li>
                  <li className="dropdown nav-item">
                    <a href="pages/properties.html" className="nav-link" data-bs-toggle="dropdown">Pages<i className="fas fa-chevron-down fa-xs"></i></a>
                    <ul className="dropdown-menu megamenu dropdown-menu-md">
                      <li>

                        <div className="row">
                          <div className="col-sm-6">
                            <h6 className="mb-3 nav-title">Pages </h6>
                            <ul className="list-unstyled mt-lg-3">
                              <li><a href="pages/bmi-calculator.html">Bmi Calculator </a></li>
                              <li><a href="pages/about-us.html">About Us </a></li>
                              <li><a href="pages/our-trainers.html">Our Trainers</a></li>
                              <li><a href="pages/trainers-single.html">Trainers Single</a></li>
                              <li><a href="pages/services.html">Services</a></li>
                              <li><a href="pages/contact-us.html">Contact us</a></li>
                              <li><a href="/login">Login</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-6">
                            <h6 className="mb-3 nav-title">Pages</h6>
                            <ul className="list-unstyled mt-lg-3">
                              <li><a href="pages/faqs.html">Faqs</a></li>
                              <li><a href="pages/pricing-plans.html">Pricing Plans</a></li>
                              <li><a href="pages/coming-soon.html">Coming soon</a></li>
                              <li><a href="pages/error.html">Error 404</a></li>
                              <li><a href="pages/privacy-policy.html">Privacy Policy</a></li>
                              <li><a href="pages/terms-and-conditions.html">T&C</a></li>
                            </ul>
                          </div>

                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="pages/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Classes <i className="fas fa-chevron-down fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/classes.html">classes</a></li>
                      <li><a className="dropdown-item" href="pages/classes-single.html">classes Single</a></li>
                      <li><a className="dropdown-item" href="pages/classes-timetable.html">classes Timetable</a></li>
                      <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="pages/#">Dropdown <i className="fas fa-chevron-right fa-xs"></i></a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="pages/#">Submenu</a></li>
                          <li><a className="dropdown-item" href="pages/#">Submenu</a></li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="pages/#">Submenu 01 <i className="fas fa-chevron-right fa-xs"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="pages/#">Subsubmenu 01</a></li>
                              <li><a className="dropdown-item" href="pages/#">Subsubmenu 01</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="pages/#">Submenu 02 <i className="fas fa-chevron-right fa-xs"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="pages/#">Subsubmenu 02</a></li>
                              <li><a className="dropdown-item" href="pages/#">Subsubmenu 02</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="pages/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Gallery <i className="fas fa-chevron-down fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/gallery-2-columns.html">gallery 2 columns</a></li>
                      <li><a className="dropdown-item" href="pages/gallery-3-columns.html">gallery 3 columns</a></li>
                      <li><a className="dropdown-item" href="pages/gallery-4-columns.html">gallery 4 columns</a></li>
                      <li><a className="dropdown-item" href="pages/gallery-5-columns.html">gallery 5 columns</a></li>
                      <li><a className="dropdown-item" href="pages/gallery-6-columns.html">gallery 6 columns</a></li>
                      <li><a className="dropdown-item" href="pages/gallery-single.html">gallery single</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="pages/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Blogs <i className="fas fa-chevron-down fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/blog.html">Blogs</a></li>
                      <li><a className="dropdown-item" href="pages/blog-list.html">Blogs List</a></li>
                      <li><a className="dropdown-item" href="pages/blog-single.html">Blogs Single</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="pages/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Shop <i className="fas fa-chevron-down fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/shop.html">Shop</a></li>
                      <li><a className="dropdown-item" href="pages/shop-single.html">Shop Single</a></li>
                      <li><a className="dropdown-item" href="pages/shop-cart.html">Shop Cart</a></li>
                      <li><a className="dropdown-item" href="pages/shop-checkout.html">Shop Checkout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="add-listing d-none d-sm-block">
                <BtnPrimary href="pages/our-trainers.html">
                  <span>Membership</span>
                </BtnPrimary>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
