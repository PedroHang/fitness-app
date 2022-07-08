import React from 'react'

export default function SubBanner() {
    return (
        <>
            <section className="">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <div className="bg-holder p-5" style={{ backgroundImage: `url("assets/images/shop/sub-banner-01.jpg")` }}>
                                <div className="position-relative py-0 py-lg-5 my-4">
                                    <h2 className="mb-2 text-white">50% off <br /> this week only</h2>
                                    <h3 className="text-primary">MODERN EQUIPMENT </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-holder p-5 text-center" data-jarallax='{"speed": 0.6}' style={{ backgroundImage: `url("assets/images/shop/sub-banner-02.jpg")` }}>
                                <div className="position-relative py-0 py-lg-5 my-4">
                                    <h2 className="mb-2 text-white">Runners <br /> Never Give Up</h2>
                                    <h3 className="text-primary">A Moments of Fit</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-holder p-5 text-end" style={{ backgroundImage: `url("assets/images/shop/sub-banner-03.jpg")` }}>
                                <div className="position-relative py-0 py-lg-5 my-4">
                                    <h2 className="mb-2 text-white">catchy gym <br /> advertising</h2>
                                    <h3 className="text-primary">Look in shape</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
