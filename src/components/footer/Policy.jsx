import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Footer from './Footer.jsx';

export default function Policy() {
    return (
        <>
            <Navbar />
            {/* Header End */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Privacy Policy</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Privacy Policy</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}

            {/* Privacy Policy Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Our Privacy Policy
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Section 1: Introduction */}
                            <div className="mb-5">
                                <h3 className="mb-3">1. Introduction</h3>
                                <p>
                                    Welcome to <strong>sauravphuyal.com.np</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website. By accessing our site, you consent to the data practices described in this policy. We adhere to the data protection regulations in Nepal, ensuring that your personal data is managed responsibly and ethically.
                                </p>
                            </div>

                            {/* Section 2: Information We Collect */}
                            <div className="mb-5">
                                <h3 className="mb-3">2. Information We Collect</h3>
                                <p>
                                    We may collect the following types of information when you visit our website:
                                </p>
                                <ul>
                                    <li><strong>Personal Information:</strong> This includes details such as your name, email address, phone number, and any other information you provide when you register, subscribe to our newsletter, or contact us.</li>
                                    <li><strong>Usage Data:</strong> We automatically collect information about your interactions with our website, such as your IP address, browser type, pages visited, and the time and date of your visits.</li>
                                    <li><strong>Cookies:</strong> We use cookies to enhance your experience on our site. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. You can choose to disable cookies in your browser settings, but this may affect your ability to access certain features of our site.</li>
                                </ul>
                            </div>

                            {/* Section 3: How We Use Your Information */}
                            <div className="mb-5">
                                <h3 className="mb-3">3. How We Use Your Information</h3>
                                <p>
                                    The information we collect from you may be used in the following ways:
                                </p>
                                <ul>
                                    <li><strong>To Improve Our Website:</strong> We continually strive to enhance our offerings based on the information and feedback we receive from you.</li>
                                    <li><strong>To Personalize User Experience:</strong> Your information helps us to better respond to your individual needs.</li>
                                    <li><strong>To Process Transactions:</strong> We may use your information to process your orders and manage your account.</li>
                                    <li><strong>To Send Periodic Emails:</strong> We may use the email address you provide to send you information and updates, as well as company news and promotions.</li>
                                    <li><strong>To Improve Customer Service:</strong> Your information helps us respond more effectively to your customer service requests and support needs.</li>
                                </ul>
                            </div>

                            {/* Section 4: Data Protection Measures */}
                            <div className="mb-5">
                                <h3 className="mb-3">4. Data Protection Measures</h3>
                                <p>
                                    We implement a variety of security measures to maintain the safety of your personal information. These measures include encryption, firewalls, and secure server hosting. While we strive to use commercially acceptable means to protect your personal information, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                                </p>
                            </div>

                            {/* Section 5: Disclosure of Your Information */}
                            <div className="mb-5">
                                <h3 className="mb-3">5. Disclosure of Your Information</h3>
                                <p>
                                    We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release information when it’s release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property or safety.
                                </p>
                            </div>

                            {/* Section 6: Third-Party Services */}
                            <div className="mb-5">
                                <h3 className="mb-3">6. Third-Party Services</h3>
                                <p>
                                    Our website may contain links to third-party websites or services that are not operated by us. We do not control the content, privacy policies, or practices of any third-party sites or services. Therefore, we encourage you to review the privacy policies of any third-party services you visit.
                                </p>
                            </div>

                            {/* Section 7: Your Rights */}
                            <div className="mb-5">
                                <h3 className="mb-3">7. Your Rights</h3>
                                <p>
                                    Under Nepal's data protection laws, you have the right to access, correct, delete, or restrict the processing of your personal data. If you would like to exercise any of these rights, please contact us using the contact details provided below.
                                </p>
                            </div>

                            {/* Section 8: Changes to This Privacy Policy */}
                            <div className="mb-5">
                                <h3 className="mb-3">8. Changes to This Privacy Policy</h3>
                                <p>
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                                </p>
                            </div>

                            {/* Section 9: Contact Us */}
                            <div className="mb-5">
                                <h3 className="mb-3">9. Contact Us</h3>
                                <p>
                                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                                </p>
                                <p>
                                    Email: <a href="mailto:codewithsauravphuyal@gmail.com">codewithsauravphuyal@gmail.com</a><br />
                                    Phone: +977-9746984367<br />
                                    Address: Sundarharaincha-03, Gachhiya, Morang, Province No. 1, Nepal, 56611
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Privacy Policy End */}

            <Footer />
        </>
    );
}
