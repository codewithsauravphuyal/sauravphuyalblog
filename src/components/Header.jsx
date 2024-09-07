import React from 'react';
import './header.css';
import './bootstrap.min.css';
import "../lib/animate/animate.min.css";
// import '../lib/owlcarousel/assets/owl.carousel.min.css';
// import "../js/main.js";
import carousel1 from '../img/carousel-1.jpg';


function Header() {
    return (
        <>
        {/* Carousel Start */}
        <div className="container-fluid p-0">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={carousel1} alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        He Transforms Ideas into Reality with Code and Design
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Hi, I'm Saurav Phuyal, a passionate and independent web
                        developer pursuing my Bachelor's degree in Computer
                        Applications (BCA). I'm currently trending with the MERN
                        (MongoDB, Express, React, Node.js) stack and love building
                        innovative web applications
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        View My Resume
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Contact Me
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Insights and Stories from a Developer's Journey
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Through this blog, I share my experiences, learnings, and
                        insights from my projects, experiments, and contributions to
                        the open-source community. Dive into my latest stories and
                        stay updated on my developer journey.
                      </p>
                      <a
                        href="/about.html"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Read More
                      </a>
                      <a
                        href="/contact.html"
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
      </>
      
    );
}

export default Header;