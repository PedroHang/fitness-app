import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section className="space-ptb bg-secondary">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="">
                                <div className="section-title">
                                    <span className="sub-title dark-title text-white"><span className="title-shape me-2"></span> About our company</span>
                                    <h2 className="text-white">Who we are and what we do</h2>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-borderless table-skew mb-5">
                                        <thead>
                                            <tr className="bg-white-soft">
                                                <th className="text-primary">BMI range - kg/m2</th>
                                                <th className="text-primary">Weight Status </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-transparent">
                                                <td className="text-white">Below 10.2</td>
                                                <td className="text-white">Severe Thinness  </td>
                                            </tr>
                                            <tr className="bg-white-soft">
                                                <td className="text-white">10.0 - 20.5</td>
                                                <td className="text-white">Moderate Thinness  </td>
                                            </tr>
                                            <tr className="bg-transparent">
                                                <td className="text-white">20.5 - 26.2</td>
                                                <td className="text-white">Mild Thinness  </td>
                                            </tr>
                                            <tr className="bg-white-soft">
                                                <td className="text-white">40.0 - and Above</td>
                                                <td className="text-white">Normal</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                </div>
                                <p className="text-white mt-5">Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 text-center mt-4 mt-lg-0">
                            <div className="owl-carousel testimonial-style-02" data-nav-arrow="false" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="false" data-autoplay="false">
                                <div className="item">
                                    <div className="testimonial-image">
                                        <img className="img-fluid w-100" src="assets/images/feature-info/02.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-content">
                                            <i className="fa fa-quote-left fa-4x mb-3"></i>
                                            <p>Just what I was looking for. I will let my mum know about this, she could really make use of Worthy! Since I invested in Worthy I made over 100,000 dollars profits.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">- Sumner N.</h6>
                                                <span>Marketing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-image">
                                        <img className="img-fluid w-100" src="assets/images/feature-info/01.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-content">
                                            <i className="fa fa-quote-left fa-4x mb-3"></i>
                                            <p>Worthy is the next killer app. Worthy did exactly what you said it does. I will let my mum know about this, she could really make use of Worthy! Thank you for making it painless,</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Paul Flavius</h6>
                                                <span>Quality control</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-image">
                                        <img className="img-fluid w-100" src="assets/images/feature-info/03.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-content">
                                            <i className="fa fa-quote-left fa-4x mb-3"></i>
                                            <p>I have gotten at least 50 times the value from Worthy. I will let my mum know about this, she could really make use of Worthy! Wow what great service, I love it! Worthy is the real deal!</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Vincent Moreno</h6>
                                                <span>Team Leader</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
