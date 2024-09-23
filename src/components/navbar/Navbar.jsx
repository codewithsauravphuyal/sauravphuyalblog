import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../js/main.js";


const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext); // Get currentUser and logout from AuthContext
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout(); // Perform logout
            navigate("/login"); // Redirect to login after logout
        } catch (error) {
            console.error("Logout failed", error); // Handle logout failure
        }
    };

    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-primary">Saurav Phuyal</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About Me</a>
                        <a href="/blog" className="nav-item nav-link">Blog</a>
                        <a href="/contact" className="nav-item nav-link">Contact</a>

                        {/* Conditional Rendering for Profile/Logout */}
                        {currentUser ? (
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    {currentUser.name || "Profile"}
                                </a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                    <Link className="dropdown-item" to="/create">Create Blogs</Link>
                                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        ) : null} {/* Only show profile and logout if user is logged in */}

                        {/* if you want to add login feature in navbar write this:

                         ) : (
                            <Link className="nav-link" to="/login">Login</Link>

                        )}*/}
                    </div>
                    <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
                        Hire Me!
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    );
};

export default Navbar;
