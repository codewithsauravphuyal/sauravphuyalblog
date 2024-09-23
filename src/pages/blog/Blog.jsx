import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { formatDistanceToNow, parseISO } from 'date-fns';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8800/api/posts`);
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching posts:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [cat]);

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    try {
      const date = parseISO(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error("Invalid date format:", dateString);
      return "Unknown time";
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const handleReadMoreClick = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <>
      <Navbar />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Blogs</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Blogs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
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
            <div>
              {Array.isArray(sortedPosts) && sortedPosts.length > 0 ? (
                <div className="row g-4">
                  {sortedPosts.map((post) => (
                    <div className="col-lg-4 col-md-6" key={post.id}>
                      <div className="blog-item bg-light rounded p-4">
                        <div className="position-relative overflow-hidden mb-4">
                          <img
                            className="img-fluid rounded"
                            src={`../upload/${post.img}`}
                            alt={post.title || "Blog Image"}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                          />
                          <div className="position-absolute bottom-0 start-0 bg-primary text-white py-2 px-3">
                            <i className="far fa-clock me-2"></i> {formatDate(post.date)}
                          </div>
                        </div>
                        <h5 className="mb-3">{post.title || "Untitled Post"}</h5>
                        <p className={`text-muted mb-4 truncate-text ${expandedPostId === post.id ? 'show-more' : ''}`}>
                          {getText(post.desc ? post.desc : "No description available.")}
                        </p>
                        <a className="btn btn-primary" href={`/post/${post.id}`}>
                          Read More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="container text-center">
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
