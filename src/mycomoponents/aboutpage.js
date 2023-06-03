import React from 'react'
import "../css/about.css"
import  snow  from "../images/Icons8-Christmas-Flat-Color-Snowflake.512.png";
import ig from "../images/Image_1680002698.jpg";
export const About = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container"><a href="#" className="navbar-brand d-flex align-items-center">
                <img className='snow' src={snow} alt="" />
                    <strong> <b> <i> JOSHI</i> </b> </strong>
                </a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#" className="nav-link font-italic"> Home </a></li>
                            <li className="nav-item active"><a href="#" className="nav-link font-italic"> About </a></li>
                            <li className="nav-item active"><a href="#" className="nav-link font-italic"> Services </a></li>
                            <li className="nav-item active"><a href="#" className="nav-link font-italic"> Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About Attendance Manager</h1>
                            <p className="lead text-muted mb-0">Attendance Manager is a web-based tool designed to help teachers and educators keep track of student attendance. With Attendance Manager, you can easily create and manage className rosters, record student attendance, and generate attendance reports.</p>
                            <p className="lead text-muted">Created by <a href="https://www.instagram.com/am_vivek_joshi_/" className="text-muted">
                                <u>Vivek joshi</u></a>
                            </p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Automated Attendance Tracking</h2>
                            <p className="font-italic text-muted mb-4">Our website provides an easy and automated way to track attendance for your classNamees or events. With just a few clicks, you can record attendance and update it in our database. No more paper records or manual data entry required! Our platform streamlines the attendance tracking process and provides you with accurate and up-to-date attendance information at all times.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Personal Attendance Management for Students</h2>
                            <p className="font-italic text-muted mb-4">Our website also allows students to personally track and manage their attendance. After logging in to their account, students can view their own attendance records, check for any discrepancies or errors, and submit a query for any incorrect attendance marks. With this feature, students can take ownership of their attendance and ensure that their records are accurate and up-to-date</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our team</h2>
                            <p className="font-italic text-muted">Currently consisting of one member </p>

                        </div>
                    </div>

                    <div className="row text-center">
                        {/* <!-- Team item--> */}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={ig} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Vivek Joshi</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="153" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">___________</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="153" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">___________</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="153" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">___________</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                    </div>
                </div>
            </div>


            <footer className="bg-light pb-5">
                <div className="container text-center">
                    <p className="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
                </div>
            </footer>


        </>
    )
}

