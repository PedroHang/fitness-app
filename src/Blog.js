import React from 'react'

export default function Blog() {
    return (
        <>
            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center">
                                <span className="sub-title text-secondary"><span className="title-shape me-2"></span> Our blogs</span>
                                <h2>Check out our latest stories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="blog-post text-center">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="assets/images/blog/01.jpg" alt="" />
                                </div>
                                <div className="blog-post-categorise justify-content-center">
                                    <ul className="list-unstyled mb-0 blog-post-meta text-center">
                                        <li><a className="text-white" href="#">by Sara Lisbon</a></li>
                                        <li><a className="text-white" href="#">May 26, 2021 </a></li>
                                        <li><a className="text-white" href="#">01</a></li>
                                    </ul>
                                </div>
                                <div className="blog-post-title mt-4">
                                    <h5><a href="#">AT HOME AB WORKOUT</a></h5>
                                </div>
                                <p className="mt-3 mb-0">Reflect and experiment until you find the right combination of motivators for...</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="blog-post text-center">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="assets/images/blog/02.jpg" alt="" />
                                </div>
                                <div className="blog-post-categorise justify-content-center">
                                    <ul className="list-unstyled mb-0 blog-post-meta text-center">
                                        <li><a className="text-white" href="#">by Ora Bryan</a></li>
                                        <li><a className="text-white" href="#">March 10, 2021 </a></li>
                                        <li><a className="text-white" href="#">02</a></li>
                                    </ul>
                                </div>
                                <div className="blog-post-title mt-4">
                                    <h5><a href="#">31-DAY FITNESS CALENDAR</a></h5>
                                </div>
                                <p className="mt-3 mb-0">Let success motivate you. Find a picture of what epitomizes success to you...</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-post text-center">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="assets/images/blog/03.jpg" alt="" />
                                </div>
                                <div className="blog-post-categorise justify-content-center">
                                    <ul className="list-unstyled mb-0 blog-post-meta text-center">
                                        <li><a className="text-white" href="#">by Aaron Sharp</a></li>
                                        <li><a className="text-white" href="#">April 03, 2021 </a></li>
                                        <li><a className="text-white" href="#">03</a></li>
                                    </ul>
                                </div>
                                <div className="blog-post-title mt-4">
                                    <h5><a href="#">Full Body Home Workout</a></h5>
                                </div>
                                <p className="mt-3 mb-0">Do it today. Remind yourself of someone you know who died suddenly and the fact...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
