import React from 'react'

export default function About() {
    return (
        <>
            <section className="bg-white space-pt">
                <div className="container">
                    <div className="row align-items center">
                        <div className="col-md-6">
                            <div className="space-ptb">
                                <div className="section-title">
                                    <span className="sub-title"><span className="title-shape me-2"></span> About our company</span>
                                    <h2>Who we are and what we do</h2>
                                    <p className="pre-title">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing.</p>
                                </div>
                                <div className="row my-4 mb-lg-4">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex"><i className="far fa-plus-square pe-2 text-primary mt-1"></i>Get the oars in the water and start rowing</li>
                                            <li className="mb-3 d-flex"><i className="far fa-plus-square pe-2 text-primary mt-1"></i>Most people believe that success is difficult.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex"><i className="far fa-plus-square pe-2 text-primary mt-1"></i>Success is something of which we all want more.</li>
                                            <li className="mb-3 d-flex"><i className="far fa-plus-square pe-2 text-primary mt-1"></i>Introspection is the trick.</li>
                                        </ul>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-skew" href="#"><span>Read More</span></a>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-end">
                            <img className="img-fluid" src="assets/images/about/11.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
