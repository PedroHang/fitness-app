import React from 'react'

export default function Classes() {
    return (
        <>
            <section className="space-ptb bg-holder bg-overlay-black-90" data-jarallax='{"speed": 0.6}' style={{ backgroundImage: `url("assets/images/bg/05.jpg")` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center">
                                <span className="sub-title dark-title text-primary"><span className="title-shape me-2"></span> Class list by goals</span>
                                <h2 className="text-white">What is timetable for classes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs nav-pills mb-3" role="tablist">
                                <li className="nav-item flex-sm-fill justify-content-center text-center">
                                    <a className="nav-link active" id="monday-tab" data-bs-toggle="pill" href="#monday" role="tab" aria-controls="monday" aria-selected="true"> Monday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="tuesday-tab" data-bs-toggle="pill" href="#tuesday" role="tab" aria-controls="tuesday" aria-selected="false">Tuesday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="wednesday-tab" data-bs-toggle="pill" href="#wednesday" role="tab" aria-controls="wednesday" aria-selected="false">Wednesday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="thursday-tab" data-bs-toggle="pill" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false">Thursday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="friday-tab" data-bs-toggle="pill" href="#friday" role="tab" aria-controls="friday" aria-selected="false">Friday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="saturday-tab" data-bs-toggle="pill" href="#saturday" role="tab" aria-controls="saturday" aria-selected="false">Saturday</a>
                                </li>
                                <li className="nav-item flex-sm-fill text-center">
                                    <a className="nav-link" id="sunday-tab" data-bs-toggle="pill" href="#sunday" role="tab" aria-controls="sunday" aria-selected="false">Sunday</a>
                                </li>
                            </ul>
                            <div className="tab-content text-center" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped mb-0">
                                            <thead>
                                                <tr className="bg-secondary">
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="saturday" role="tabpanel" aria-labelledby="saturday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sunday" role="tabpanel" aria-labelledby="sunday-tab">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped table-skew mb-0">
                                            <thead className="bg-secondary">
                                                <tr>
                                                    <th className="text-primary">Time</th>
                                                    <th className="text-primary">Class Type</th>
                                                    <th className="text-primary">Coach Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>06.00 - 07.00</td>
                                                    <td>Fitness</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/01.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>07.00 - 08.00</td>
                                                    <td>Boxcycle</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/02.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08.00 - 09.00</td>
                                                    <td>Body builing</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/03.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Joana Williams</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>09.00 - 10.00</td>
                                                    <td>Crosfit</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/04.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10.00 - 11.00</td>
                                                    <td>Cardio</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/05.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-secondary">
                                                    <td>11.00 - 12.00</td>
                                                    <td>Yoga Basics</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/06.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Maria Fields</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>12.00 - 01.00</td>
                                                    <td>Sports</td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid avatar avatar-sm" src="assets/images/avatar/07.jpg" alt="" />
                                                            <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
