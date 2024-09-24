import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function TermsAndCondition() {
    return (
        <>
            <Navbar />
            {/* Header Start */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Terms and Conditions</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Terms and Conditions</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}

            {/* Terms and Conditions Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Terms and Conditions
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Section 1 */}
                            <div className="mb-5">
                                <h3 className="mb-3">1. Introduction</h3>
                                <p>
                                    Welcome to sauravphuyal.com.np. This website serves as a personal blog and resource platform dedicated to sharing insights, tutorials, code snippets, and personal notes primarily in the fields of programming, technology, and web development. By accessing this website, you agree to comply with the following terms and conditions. If you do not agree with these terms, please refrain from using this website.
                                </p>
                                <p>
                                    The terms and conditions herein apply to all visitors, users, and anyone accessing the services provided through this website. These terms may be updated from time to time, and your continued use of the site constitutes acceptance of any modifications made.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="mb-5">
                                <h3 className="mb-3">2. Intellectual Property Rights</h3>
                                <p>
                                    All content available on sauravphuyal.com.np, including but not limited to text, code snippets, blog posts, images, graphics, and other materials, is the intellectual property of Saurav Phuyal or its content creators. This content is protected by copyright, trademark, and other intellectual property laws.
                                </p>
                                <p>
                                    Users are granted permission to view, download, and print the content for personal, non-commercial use only. Any redistribution, reproduction, or republishing of the materials without written consent from the website owner is strictly prohibited.
                                </p>
                                <p>
                                    If you wish to use any of the content for commercial purposes or wish to inquire about licensing, please contact us at <a href="mailto:codewithsauravphuyal@gmail.com">codewithsauravphuyal@gmail.com</a>.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div className="mb-5">
                                <h3 className="mb-3">3. User Responsibilities</h3>
                                <p>
                                    As a user of this website, you agree to use the site in accordance with these Terms and Conditions and applicable laws. You agree not to:
                                </p>
                                <ul>
                                    <li>Use this website for any unlawful purpose or in a way that could damage, disable, overburden, or impair the website.</li>
                                    <li>Engage in any activity that interferes with the security or performance of the website.</li>
                                    <li>Attempt to gain unauthorized access to any part of the website, other user accounts, or any computer systems or networks connected to the site.</li>
                                    <li>Use any automated means to access the site, including robots, spiders, or data mining tools.</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div className="mb-5">
                                <h3 className="mb-3">4. Limitation of Liability</h3>
                                <p>
                                    To the fullest extent permitted by law, sauravphuyal.com.np, its owner, and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or any content provided therein. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
                                </p>
                                <p>
                                    The website makes no warranties or representations about the accuracy or completeness of the content or the reliability of any advice, opinions, or statements made on the site. Users rely on the information provided at their own risk.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-5">
                                <h3 className="mb-3">5. Third-Party Links</h3>
                                <p>
                                    This website may contain links to third-party websites that are not owned or controlled by sauravphuyal.com.np. I have no control over the content, privacy policies, or practices of any third-party websites. Therefore, I cannot be held responsible for any damages or losses caused by your interactions with these external sites.
                                </p>
                                <p>
                                    You are encouraged to read the terms and conditions and privacy policies of any third-party websites you visit.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-5">
                                <h3 className="mb-3">6. Privacy Policy</h3>
                                <p>
                                    Your privacy is important to me. The collection, use, and disclosure of personal information are governed by the <a href="/policy">Privacy Policy</a> of this website. By using the site, you consent to the processing of your personal information as outlined in the privacy policy.
                                </p>
                                <p>
                                    I will not sell, rent, or lease your personal information to third parties without your explicit consent. However, I may use your information to communicate with you regarding new posts, updates, or relevant content.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-5">
                                <h3 className="mb-3">7. Changes to Terms and Conditions</h3>
                                <p>
                                    I reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these terms periodically for any changes. Your continued use of the site after modifications signifies your acceptance of the revised terms.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-5">
                                <h3 className="mb-3">8. Governing Law</h3>
                                <p>
                                    These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of Nepal.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-5">
                                <h3 className="mb-3">9. Contact Information</h3>
                                <p>
                                    If you have any questions, comments, or concerns regarding these Terms and Conditions, please contact me at <a href="mailto:codewithsauravphuyal@gmail.com">codewithsauravphuyal@gmail.com</a>. I am committed to addressing your inquiries and ensuring a positive user experience on this website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Terms and Conditions End */}

            <Footer />
        </>
    );
}
