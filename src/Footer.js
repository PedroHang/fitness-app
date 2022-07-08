import React from 'react'
import styled from 'styled-components'
import { BtnPrimary } from './styles/BtnPrimary'

export default function Footer() {
    return (
        <footer className="footer space-pt">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact-info">
                            <h5 className="text-white mb-4">ABOUT US</h5>
                            <p className="text-white mb-4 mt-3">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                        <h5 className="text-white mb-4">Useful Links</h5>
                        <div className="footer-useful-List">
                            <ul className="list-unstyled mb-0">
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="our-trainers.html">Our Trainers</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="bmi-calculator.html">Bmi Calculator</a></li>
                                <li><a href="classes.html">Classes</a></li>
                            </ul>
                            <ul className="list-unstyled mb-0">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="gallery-2-columns.html">Gallery</a></li>
                                <li><a href="classes-timetable.html">Classes Timetable</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="footer-link">
                            <h5 className="text-white mb-4">Subscribe us</h5>
                            <div className="footer-subscribe">
                                <p className="text-white">Sign up to our newsletter to get the latest news and offers.</p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-primary"> <span> Get notified </span> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="footer-insta">
                            <h5 className="text-white mb-4">OUR GALLERY</h5>
                            <ul className="list-unstyled d-flex flex-wrap mb-0">
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/01.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/02.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/03.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/04.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/05.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/06.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/07.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/08.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/09.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/10.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/11.jpg" alt="" /> </a></li>
                                <li className="mb-0"><a href="#"> <img className="avatar avatar-lg" src="assets/images/avatar/12.jpg" alt="" /> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="footer-bottom mt-0">
                    <div className="row align-items-center">
                        <div className="col-md-3 text-center text-md-start">
                            <a className="footer-logo" href="index.html">
                                <img className="img-fluid logo" src="assets/images/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div className="col-md-5 text-center text-md-left my-2 my-md-0">
                            <p className="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#"> Fitness </a> All Rights Reserved </p>
                        </div>
                        <div className="col-md-4 text-center text-md-right">
                            <ul className="list-unstyled list-inline mb-0">
                                <li className="list-inline-item"><a className="text-white" href="#">Terms & Conditions</a></li>
                                <li className="list-inline-item"><a className="text-white" href="#">API Use Policy</a></li>
                                <li className="list-inline-item"><a className="text-white" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
