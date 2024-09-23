import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Table from './Table';
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import Certificate from './Certificate';
import Testimonials from './Testimonials'; 
import Team from './Team'; 

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate(); // Initialize navigation

    // Redirect if user is not logged in
    useEffect(() => {
        if (!currentUser) {
            navigate('/login'); // Change to your login route
        }
    }, [currentUser, navigate]);

    const [newPassword, setNewPassword] = useState('');
    const [image, setImage] = useState(null);
    const [activePage, setActivePage] = useState('dashboard');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        // Implement password change logic here
        console.log('Change password to:', newPassword);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    useEffect(() => {
        const handleNavToggle = () => {
            $('#navbarSupportedContent').slideToggle(300);
        };

        $(".navbar-toggler").click(handleNavToggle);

        const updateSelector = () => {
            const tabsNewAnim = $('#navbarSupportedContent');
            const activeItemNewAnim = tabsNewAnim.find('.active');
            const itemPosNewAnimTop = activeItemNewAnim.position().top;
            const itemPosNewAnimLeft = activeItemNewAnim.position().left;
            const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();

            $(".hori-selector").css({
                "top": itemPosNewAnimTop + "px",
                "left": itemPosNewAnimLeft + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });

            $("#navbarSupportedContent").on("click", "li", function () {
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                const activeWidthNewAnimHeight = $(this).innerHeight();
                const activeWidthNewAnimWidth = $(this).innerWidth();
                const itemPosNewAnimTop = $(this).position().top;
                const itemPosNewAnimLeft = $(this).position().left;

                $(".hori-selector").css({
                    "top": itemPosNewAnimTop + "px",
                    "left": itemPosNewAnimLeft + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        };

        setTimeout(updateSelector, 0);
        $(window).on('resize', updateSelector);

        return () => {
            $(".navbar-toggler").off("click", handleNavToggle);
            $(window).off('resize', updateSelector);
        };
    }, []);

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return <div>Dashboard Content</div>;
            case 'table':
                return <Table />;
            case 'certificate':
                return <Certificate />;
            case 'testimonials':
                return <Testimonials />;
            case 'team':
                return <Team />;
            case 'profile':
            default:
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <img
                                        src={image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                        className="card-img-top rounded-circle mx-auto mt-3"
                                        alt="Profile"
                                        style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-3">{currentUser.name}</h5>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Profile Information</h4>
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value={currentUser.name || 'N/A'}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={currentUser.username}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={currentUser.email}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="newPassword" className="form-label">Change Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="newPassword"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                            </div>
                                            <button className="btn btn-primary" onClick={handlePasswordChange}>
                                                Change Password
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <>
            <Navbar />
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left" />
                            <div className="right" />
                        </div>
                        <li className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('dashboard')}>
                                <i className="fas fa-tachometer-alt" />
                                Dashboard
                            </a>
                        </li>
                        <li className={`nav-item ${activePage === 'table' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('table')}>
                                <i className="fa fa-table" />
                                Blog Table
                            </a>
                        </li>
                        <li className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('profile')}>
                                <i className="far fa-user" />
                                Profile
                            </a>
                        </li>
                        <li className={`nav-item ${activePage === 'certificate' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('certificate')}>
                                <i className="fa fa-trophy" />
                                Certificate
                            </a>
                        </li>
                        <li className={`nav-item ${activePage === 'testimonials' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('testimonials')}>
                                <i className="fas fa-comments" />
                                Testimonials
                            </a>
                        </li>
                        <li className={`nav-item ${activePage === 'team' ? 'active' : ''}`}>
                            <a className="nav-link" href="javascript:void(0);" onClick={() => setActivePage('team')}>
                                <i className="fa fa-users" />
                                Teams
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {currentUser && renderContent()} {/* Only render content if logged in */}

            <Footer />
        </>
    );
};

export default Dashboard;
