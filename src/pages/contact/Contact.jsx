import React from 'react'
import  Navbar from '../../components/navbar/Navbar.jsx'
import  Footer from '../../components/footer/Footer.jsx'

const Contact = () => {
    return (
        <>
        <Navbar />
  {/* Header End */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
    <div className="container my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Contact
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Contact For Any Query
      </h1>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div
                  className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="fa fa-map-marker-alt text-primary" />
                </div>
                <span>Sundarharaincha-03, Gachhiya, Morang, Province No. 1, Nepal, 56611</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div
                  className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="fa fa-envelope-open text-primary" />
                </div>
                <span>codewithsauravphuyal@gmail.com</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div
                  className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="fa fa-phone-alt text-primary" />
                </div>
                <span>+977-9746984367</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed/v1/place?q=sundarharaincha+nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            frameBorder={0}
            style={{ minHeight: 400, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 150 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  <Footer />
</>

);
}

export default Contact;