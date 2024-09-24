import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';


export default function OurServices() {
    return (
        <>
            <Navbar />
            {/* Header End */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}
            {/*Our Services  Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Our Services
                    </h1>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-code text-primary mb-4" />
                                <h6 className="mb-3">Frontend Development</h6>
                                <p className="small">Building interactive and responsive user interfaces.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-server text-primary mb-4" />
                                <h6 className="mb-3">Backend Development</h6>
                                <p className="small">Scalable and robust server-side applications.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-database text-primary mb-4" />
                                <h6 className="mb-3">Database Management</h6>
                                <p className="small">Efficient data storage and management solutions.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-paint-brush text-primary mb-4" />
                                <h6 className="mb-3">Graphic Designing</h6>
                                <p className="small">Creative designs for web and print media.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-cogs text-primary mb-4" />
                                <h6 className="mb-3">API Integration</h6>
                                <p className="small">Seamless integration with third-party services.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-cloud text-primary mb-4" />
                                <h6 className="mb-3">Cloud Solutions</h6>
                                <p className="small">Secure and scalable cloud-based applications.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-shield-alt text-primary mb-4" />
                                <h6 className="mb-3">Cybersecurity</h6>
                                <p className="small">Protecting your data and systems from threats.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4 shadow-sm" href="">
                                <i className="fa fa-3x fa-rocket text-primary mb-4" />
                                <h6 className="mb-3">Performance Optimization</h6>
                                <p className="small">Ensuring fast and efficient application performance.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Services End */}
            <Footer />
        </>
    )
}
