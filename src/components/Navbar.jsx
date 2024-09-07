import React from 'react';
import './Navbar.css';
import './bootstrap.min.css';

function Navbar() {
    return (
        <>
        
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a
                    href="index.html"
                    className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
                >
                    <h1 className="m-0 text-primary">Saurav Phuyal</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About Me
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Blogs
                            </a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="job-list.html" className="dropdown-item">
                                    Blogs List
                                </a>
                                <a href="job-detail.html" className="dropdown-item">
                                    Blogs Details
                                </a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                More
                            </a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="category.html" className="dropdown-item">
                                    My Project Work
                                </a>
                                <a href="testimonial.html" className="dropdown-item">
                                    Testimonial
                                </a>
                                <a href="testimonial.html" className="dropdown-item">
                                    Team
                                </a>
                                <a href="404.html" className="dropdown-item">
                                    404
                                </a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <a
                        href=""
                        className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
                    >
                        Hire Me!
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>
            {/* Navbar End */}
        </>

    );
}

export default Navbar;