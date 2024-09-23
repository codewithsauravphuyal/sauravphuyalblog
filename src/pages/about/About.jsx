import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import axios from 'axios';

const About = () => {
    const [certificates, setCertificates] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [teams, setTeams] = useState([]);

    // Fetch certificates from backend
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/certificates');
                setCertificates(response.data);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            }
        };

        fetchCertificates();
    }, []);

    // Fetch testimonials from backend
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

    // Fetch team members from backend
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeams();
    }, []);

    useEffect(() => {
        $('.testi.owl-carousel').owlCarousel({
            items: 2,
            margin: 10,
            lazyLoad: true,
            dots: true,
            autoPlay: true,
            autoPlayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                }
            }
        });
    });

    return (
        <>
            <Navbar />
            {/* Header End */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
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

                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">Who Am I?</h1>
                            <p style={{ textAlign: "justify" }}>
                                Hi...Hello...Namaskar! I'm Saurav Phuyal, a passionate and independent web developer dedicated to crafting innovative and scalable web applications that positively impact people's lives. With a strong foundation in computer applications, I'm committed to continually expanding my skill set and staying current with the latest technologies and trends.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Currently pursuing my Bachelor's degree in Computer Applications (BCA), I'm excited to leverage my skills to build innovative and scalable web applications that drive meaningful change.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                As a web developer, I'm driven by a passion for building solutions that make a real difference. With a strong foundation in computer applications, I'm always looking to expand my skill set and stay up-to-date with the latest technologies and trends.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                In my free time, I enjoy exploring new technologies, contributing to open-source projects, and participating in coding challenges. I'm excited to collaborate with like-minded individuals and work on projects that have a positive impact on society.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                As a seasoned developer, I've honed my skills in the following areas:
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="skill-category">
                                        <h2 className="mb-3">Frontend Development</h2>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fa fa-check text-primary me-3" /><span>HTML5, CSS3, JavaScript</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>Tailwind CSS</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>React</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill-category">
                                        <h2 className="mb-3">Backend Development</h2>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fa fa-check text-primary me-3" /><span>Node.js</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>Laravel PHP Framework</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>PHP</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="skill-category">
                                        <h2 className="mb-3">Database Management</h2>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fa fa-check text-primary me-3" /><span>MySQL</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>MongoDB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill-category">
                                        <h2 className="mb-3">Graphic Designing</h2>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fa fa-check text-primary me-3" /><span>Canva</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>Figma</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>VistaCreate</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>Sketch</span></li>
                                            <li><i className="fa fa-check text-primary me-3" /><span>Adobe Illustrator</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* My Education Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">My Education</h1>
                        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="tab-content">
                                <div className="education" id="education">
                                    <div className="container">
                                        <div className="timeline">
                                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                                <div className="timeline-text">
                                                    <div className="timeline-date">2022 - Running</div>
                                                    <h2>Koshi Saint James Secondary School & College</h2>
                                                    <h4>Itahari-09, Sunsari, Province no 1, Nepal</h4>
                                                    <p>Running Bachelor of Art in Computer Application</p>
                                                </div>
                                            </div>
                                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                                <div className="timeline-text">
                                                    <div className="timeline-date">2019 - 2021</div>
                                                    <h2>Koshi Saint James Secondary School & College</h2>
                                                    <h4>Itahari-09, Sunsari, Province no 1, Nepal</h4>
                                                    <p>Graduated High Level School</p>
                                                </div>
                                            </div>
                                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                                <div className="timeline-text">
                                                    <div className="timeline-date">2006 - 2019</div>
                                                    <h2>Mount Makalu Residential Secondary School</h2>
                                                    <h4>Sundarharaincha-03, Morang, Province no 1, Nepal</h4>
                                                    <p>Graduated Secondary Level School</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Education End */}
                {/* My Certificate Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Achievements And Certifications</h1>
                        <div className="row g-4">
                            {certificates.length > 0 ? (
                                certificates.map((certificate) => (
                                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={certificate.id}>
                                        <div className="service-item text-center pt-3">
                                            <a className="btn-primary" data-bs-toggle="modal" data-bs-target={`#certificateModal${certificate.id}`}>
                                                <div className="p-4">
                                                    <img src={certificate.image_url || 'https://via.placeholder.com/150'} alt="Certificate" style={{ height: "100%", width: "100%", marginBottom: 20 }} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No certificates available at this time.</p>
                            )}
                        </div>
                    </div>
                </div>

                {certificates.map((certificate) => (
                    <div className="modal fade" id={`certificateModal${certificate.id}`} tabIndex={-1} aria-labelledby="certificateModalLabel" aria-hidden="true" key={certificate.id}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="certificateModalLabel">{certificate.certificate_name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="p-4">
                                        <img src={certificate.image_url || 'https://via.placeholder.com/150'} alt="Certificate" style={{ height: "100%", width: "100%", marginBottom: 20 }} />
                                        <h5 className="mb-3">Organization: {certificate.issuing_organization}</h5>
                                        <h5 className="mb-3">Date of Issue: {new Date(certificate.issue_date).toLocaleDateString()}</h5>
                                        <p>{certificate.description || 'No description available.'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* My Certificate End */}
            </div>

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


            {/* Teams End */}
            <div className="team" id="team">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Expert Team Members</h1>
                    </div>
                    <div className="row">
                        {teams.map((team) => (
                            <div className="col-lg-6 wow fadeInUp" key={team.id} data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={team.image_url} alt={team.name} />
                                    </div>
                                    <div className="team-text">
    <h2>{team.name}</h2>
    <h4>{team.professional_title}</h4>
    <div className="team-social">
        <a className="teambtn" href={`https://www.facebook.com/${team.facebook_link}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
        </a>
        <a className="teambtn" href={`https://www.instagram.com/${team.instagram_link}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
        </a>
        <a className="teambtn" href={`https://www.linkedin.com/in/${team.linkedin_link}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
        </a>
        <a className="teambtn" href={team.website_link.startsWith('http') ? team.website_link : `https://${team.website_link}`} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-globe" />
        </a>
    </div>
</div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team End */}




            <Footer />
        </>
    );
};

export default About;
