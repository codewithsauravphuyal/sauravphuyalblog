import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

const Register = () => {
    const [inputs, setInputs] = useState({
        name:"",
        username: "",
        email: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <>
            <Navbar />
            {/* Header End */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Register
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
                                Register
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}
            {/* Register Start */}
            <div className="container-xxl py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <div className="col-md-6 col-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.5s">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Register
                        </h1>
                        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="tab-content">
                                <div id="tab" className="tab-pane fade show p-0 active">
                                    <div className="login-item p-4 mb-4">
                                        <p className="mb-4 text-center">
                                            Please fill in the form below to create an account.
                                        </p>
                                        <form>
                                            <div className="row g-3">
                                                {/* Username field */}
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name='name'
                                                            placeholder="Full Name"
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="name">Full Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="username"
                                                            name='username'
                                                            placeholder="Username"
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="username">Username</label>
                                                    </div>
                                                </div>

                                                {/* Email field */}
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name='email'
                                                            placeholder="Email"
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="email">Email</label>
                                                    </div>
                                                </div>

                                                {/* Password field */}
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password"
                                                            name='password'
                                                            placeholder="Password"
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="password">Password</label>
                                                    </div>
                                                </div>

                                                {/* Submit button */}
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3" onClick={handleSubmit} type="submit">
                                                        Register
                                                    </button>
                                                </div>

                                                {/* Error message */}
                                                {err && <p className="text-danger text-center">{err}</p>}

                                                {/* Login link */}
                                                <div className="col-12">
                                                    <p className="text-center">
                                                        <span>Already have an account?</span> <Link to="/login">Login</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Register End */}

            <Footer />
        </>
    );
}

export default Register;
