// src/blog/BlogPostItem.jsx
import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const BlogPostItem = ({ posts, expandedPostId, onReadMoreClick }) => {
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

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="text-center mb-5">Insights and Updates</h1>
        <div className="row g-4">
          {posts.length === 0 ? (
            <div className="col-12 text-center">
              <p>No blogs available.</p>
            </div>
          ) : (
            posts.map((post) => (
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
                  <a
                    className="btn btn-primary"
                    href={`/post/${post.id}`}
                    onClick={() => onReadMoreClick(post.id)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostItem;
