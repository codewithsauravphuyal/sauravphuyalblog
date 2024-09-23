import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from '../blog/BlogPostItem.jsx';

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:8800/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Fetch testimonials from the backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    // Initialize owl carousel when testimonials are loaded
    if (testimonials.length > 0) {
      $('.testi.owl-carousel').owlCarousel({
        items: 2,
        margin: 10,
        lazyLoad: true,
        dots: true,
        autoPlay: true,
        autoPlayTimeout: 3000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 2 }
        }
      });
    }
  }, [testimonials]);

  const handleReadMoreClick = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {/* Category Start */}
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
      {/* Category End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Image Section */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-12 text-start position-relative">
                  <img
                    className="img-fluid w-100 h-100"
                    src="https://raw.githubusercontent.com/codewithsauravphuyal/MyCertificates/refs/heads/main/profile.jpg"
                    alt="Profile"
                    style={{ objectFit: 'cover', height: '100%' }}
                  />
                </div>
              </div>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Who Am I?</h1>
              <p style={{ textAlign: "justify" }}>
                Hi...Hello...Namaskar! I'm Saurav Phuyal, a passionate and independent web developer dedicated to crafting innovative and scalable web applications that positively impact people's lives. With a strong foundation in computer applications, I'm committed to continually expanding my skill set and staying current with the latest technologies and trends.
              </p>
              <p style={{ textAlign: "justify" }}>
                Currently pursuing my Bachelor's degree in Computer Applications (BCA), I'm excited to leverage my skills to build innovative and scalable web applications that drive meaningful change.
              </p>
              {/* Read More Button */}
              <a className="btn btn-primary py-3 px-5 mt-3" href="/about">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Blogs Start */}
      {loading ? (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <BlogPostItem
          posts={sortedPosts}
          expandedPostId={expandedPostId}
          onReadMoreClick={handleReadMoreClick}
        />
      )}
      {/* Blogs End */}

      {/* Testimonial Start */}
      <section className="testimonials">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">What Expert Guidance Say?</h1>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="container">
            {testimonials.length > 0 ? (
              <div className="owl-carousel owl-theme testi">
                {testimonials.map((testimonial) => (
                  <div className="item" key={testimonial.id}>
                    <div className="profile">
                      <img
                        src={testimonial.image_url || 'https://via.placeholder.com/50'}
                        alt={testimonial.client_name ? `${testimonial.client_name}'s profile` : 'Client profile'}
                      />
                      <div className="information">
                        <p>{testimonial.client_name}</p>
                        <span>{testimonial.client_profession}</span>
                      </div>
                    </div>
                    <p>{testimonial.testimonial_text}</p>
                    <div className="icon">
                      <i className="fa fa-quote-right" aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No testimonials available.</p>
            )}
          </div>
        </div>
      </section>
      {/* Testimonial End */}


      {/* FAQ Start */}
      <section id="faq" className="faq section-bg py-5">
        <div className="container-xxl wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <h1 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>Frequently Asked Questions</h1>
            <div className="faq-list shadow-lg p-4 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
              <ul className="list-unstyled">
                <li data-aos="fade-up" className="mb-4">
                  <i className="far fa-question-circle icon-help me-2 text-primary" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed text-decoration-none text-dark"
                    data-bs-target="#faq-list-1"
                    style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
                  >
                    What technology stack do you use for development?{" "}
                    <i className="fas fa-chevron-down icon-show ms-2" />
                    <i className="fas fa-chevron-up icon-close ms-2" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show mt-2 ps-4"
                    data-bs-parent=".faq-list"
                  >
                    <p style={{ color: "#555" }}>
                      We use a modern tech stack, including <strong>React</strong> for the front-end, <strong>Node.js</strong> and <strong>Express</strong> for the back-end, and <strong>MySQL</strong> as the database. This combination ensures performance, scalability, and flexibility.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={300} className="mb-4">
                  <i className="far fa-question-circle icon-help me-2 text-primary" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed text-decoration-none text-dark"
                    data-bs-target="#faq-list-4"
                    style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
                  >
                    Do you offer post-launch support?{" "}
                    <i className="fas fa-chevron-down icon-show ms-2" />
                    <i className="fas fa-chevron-up icon-close ms-2" />
                  </a>
                  <div id="faq-list-4" className="collapse mt-2 ps-4" data-bs-parent=".faq-list">
                    <p style={{ color: "#555" }}>
                      Yes, we provide post-launch support, including maintenance, bug fixes, and feature updates, to ensure your application continues to run smoothly and meets evolving business needs.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={400} className="mb-4">
                  <i className="far fa-question-circle icon-help me-2 text-primary" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed text-decoration-none text-dark"
                    data-bs-target="#faq-list-5"
                    style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
                  >
                    Can the project be customized for mobile?{" "}
                    <i className="fas fa-chevron-down icon-show ms-2" />
                    <i className="fas fa-chevron-up icon-close ms-2" />
                  </a>
                  <div id="faq-list-5" className="collapse mt-2 ps-4" data-bs-parent=".faq-list">
                    <p style={{ color: "#555" }}>
                      Absolutely. We build responsive designs that work seamlessly across all devices, from desktops to mobile. We can also develop mobile-specific apps based on your project needs.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={100} className="mb-4">
                  <i className="far fa-question-circle icon-help me-2 text-primary" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed text-decoration-none text-dark"
                    data-bs-target="#faq-list-2"
                    style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
                  >
                    How much does a project like this typically cost?{" "}
                    <i className="fas fa-chevron-down icon-show ms-2" />
                    <i className="fas fa-chevron-up icon-close ms-2" />
                  </a>
                  <div id="faq-list-2" className="collapse mt-2 ps-4" data-bs-parent=".faq-list">
                    <p style={{ color: "#555" }}>
                      The cost for a project of this scale usually starts around <strong>NPR. 13,351</strong>. The total cost may vary depending on the complexity, features, and timeline required for completion.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={500} className="mb-4">
                  <i className="far fa-question-circle icon-help me-2 text-primary" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed text-decoration-none text-dark"
                    data-bs-target="#faq-list-6"
                    style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
                  >
                    How can I get this website?{" "}
                    <i className="fas fa-chevron-down icon-show ms-2" />
                    <i className="fas fa-chevron-up icon-close ms-2" />
                  </a>
                  <div id="faq-list-6" className="collapse mt-2 ps-4" data-bs-parent=".faq-list">
                    <p style={{ color: "#555" }}>
                      If you're interested in having a similar website developed, feel free to reach out to us! You can contact us directly by sending an email to: <strong><a href="mailto:codewithsauravphuyal@gmail.com">codewithsauravphuyal@gmail.com</a></strong>.
                    </p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ End */}


    </>

  )
}

export default Index
