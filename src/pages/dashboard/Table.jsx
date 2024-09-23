import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import "../../css/bootstrap.min.css";
import "../../css/style.css";

const Table = () => {
    const { authToken, currentUser } = useContext(AuthContext); // Get currentUser from AuthContext
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get('http://localhost:8800/api/posts', {
                    headers: { 'Authorization': `Bearer ${authToken}` }
                });

                console.log("Fetched posts:", res.data); // Log all posts fetched from the API
                console.log("Logged-in user:", currentUser); // Log the current user

                // Filter posts based on the current user's ID
                const filteredData = res.data.filter(post => String(post.uid) === String(currentUser.id));
                console.log("Filtered posts:", filteredData); // Log posts filtered by user

                setData(filteredData); // Set the filtered posts to state
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (currentUser) {
            fetchData();
        }
    }, [authToken, currentUser]);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        } catch (error) {
            console.error("Invalid date format:", dateString);
            return "Unknown date";
        }
    };

    // Function to handle status updates (Activate/Deactivate)
    const onStatusUpdate = async (id, newStatus) => {
        try {
            const res = await axios.put(`http://localhost:8800/api/posts/${id}`,
                { status: newStatus }, // Update post status to 'active' or 'inactive'
                {
                    headers: { 'Authorization': `Bearer ${authToken}` }
                }
            );
            console.log("Status update response:", res.data); // Log the API response

            // Update the state after a successful response
            setData(prevData =>
                prevData.map(post =>
                    post.id === id ? { ...post, status: newStatus } : post // Update status in state
                )
            );
        } catch (err) {
            console.error("Error updating status:", err.response ? err.response.data : err.message);
            setError("Failed to update status. Please try again.");
        }
    };

    if (loading) {
        return <div
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
            ;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((post) => (
                            <tr key={post.id}>
                                <td>
                                    <img
                                        src={`../upload/${post.img}`}
                                        alt={post.title || "Image"}
                                        style={{ width: '50px', height: 'auto', objectFit: 'cover' }}
                                    />
                                </td>
                                <td>{post.title}</td>
                                <td>{formatDate(post.date)}</td>
                                <td>
                                    {post.status === "active" ? (
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => onStatusUpdate(post.id, "inactive")}
                                        >
                                            Deactivate
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onStatusUpdate(post.id, "active")}
                                        >
                                            Activate
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No posts available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
