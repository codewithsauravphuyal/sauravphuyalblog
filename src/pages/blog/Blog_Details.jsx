import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { AuthContext } from '../../context/authContext';
import { FaEllipsisV } from 'react-icons/fa';

const CommentActions = ({ comment, handleReply, handleDelete, handleEdit }) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn text-primary"
                type="button"
                id={`dropdownMenuButton-${comment.id}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <FaEllipsisV />
            </button>
            <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${comment.id}`}>
                <li>
                    <button className="dropdown-item text-primary" onClick={() => handleReply(comment.id)}>
                        Reply
                    </button>
                </li>
                {/* <li>
                    <button className="dropdown-item text-danger" onClick={() => handleDelete(comment.id)}>
                        Delete
                    </button>
                </li> */}
                <li>
                    <button className="dropdown-item text-warning" onClick={() => handleEdit(comment.id, comment.comment, comment.email, comment.website, comment.name)}>
                        Edit
                    </button>
                </li>
            </ul>
        </div>
    );
};

const Blog_Details = () => {
    const { currentUser } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: currentUser ? currentUser.username : '',
        email: currentUser ? currentUser.email : '',
        website: '',
        comment: '',
        parent_id: null,
    });
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedComment, setEditedComment] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedWebsite, setEditedWebsite] = useState('');
    const [editedName, setEditedName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const postResponse = await axios.get(`http://localhost:8800/api/posts/${id}`);
                setPost(postResponse.data);

                const relatedResponse = await axios.get('http://localhost:8800/api/posts?related=true');
                setRelatedPosts(relatedResponse.data);

                // Fetch comments here
                const commentsResponse = await axios.get(`http://localhost:8800/api/comments/${id}`);
                setComments(commentsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPostDetails();
    }, [id]);


    // Separate delete function for posts
    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
                withCredentials: true // Ensures cookies are sent with the request if needed
            });
            console.log("Post deleted successfully");
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error.response ? error.response.data : error.message);
        }
    };

    // Separate delete function for comments
    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`http://localhost:8800/api/comments/${commentId}`);
            setComments(comments.filter(comment => comment.id !== commentId));
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Editing Comment ID:", editingCommentId);
            console.log("Edited Comment Data:", {
                comment: editedComment,
                email: editedEmail,
                website: editedWebsite,
                name: currentUser ? currentUser.username : editedName
            });
    
            if (editingCommentId) {
                const response = await axios.put(`http://localhost:8800/api/comments/${editingCommentId}`, {
                    comment: editedComment,
                    email: editedEmail,
                    website: editedWebsite,
                    name: currentUser ? currentUser.username : editedName
                });
                console.log("Update Response:", response.data);
                // Reset state after successful update
                setEditingCommentId(null);
                setEditedComment('');
                setEditedEmail('');
                setEditedWebsite('');
            } else {
                const response = await axios.post(`http://localhost:8800/api/comments`, {
                    ...newComment,
                    post_id: id
                });
                console.log("Post Response:", response.data);
                // Reset state after successful post
                setNewComment({
                    name: currentUser ? currentUser.username : '',
                    email: currentUser ? currentUser.email : '',
                    website: '',
                    comment: '',
                    parent_id: null,
                });
            }
    
            // Refresh comments after submission
            const commentsResponse = await axios.get(`http://localhost:8800/api/comments/${id}`);
            setComments(commentsResponse.data);
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };
    


    const handleReply = (parentId) => {
        setNewComment({ ...newComment, parent_id: parentId });
    };

    const handleEdit = (commentId, commentText, email, website, name) => {
        setEditingCommentId(commentId);
        setEditedComment(commentText);
        setEditedEmail(email);
        setEditedWebsite(website);
        setEditedName(name);
    };

    const renderComments = (commentsList, parentId = null) => {
        return commentsList
            .filter(comment => comment.parent_id === parentId) // Filter comments by parentId
            .map(comment => (
                <div key={comment.id} className="comment-item mb-4 p-4 border rounded bg-light">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6 className="mb-1">
                                {comment.website ? (
                                    <a
                                        href={comment.website.startsWith('http://') || comment.website.startsWith('https://')
                                            ? comment.website
                                            : `http://${comment.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {comment.name}
                                    </a>
                                ) : (
                                    comment.name
                                )}
                            </h6>
                            <small className="text-muted">
                                {new Date(comment.date).toLocaleDateString()}
                                {comment.edited ? ' (edited)' : ''}
                            </small>
                            <span className="mx-2">|</span>
                            <small className="text-muted text-primary" style={{ cursor: 'pointer' }} onClick={() => handleReply(comment.id)}>
                                Reply
                            </small>
                            <p className="mt-2">{comment.comment}</p>
                        </div>
                        <CommentActions
                            comment={comment}
                            handleReply={handleReply}
                            handleDelete={handleDeleteComment}
                            handleEdit={handleEdit}
                        />
                    </div>
                    <div className="ms-4">
                        {renderComments(comments, comment.id)} {/* Render replies recursively */}
                    </div>
                </div>
            ));
    };


    if (!post) return <div>Post not found.</div>;

    return (
        <>
            <Navbar />
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Blog Detail</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item text-white active" aria-current="page">
                                Blog Detail
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-5">
                                <img
                                    className="flex-shrink-0 img-fluid border rounded"
                                    src={`../upload/${post.img}`}
                                    alt="Blog Header"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="mb-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h1 className="display-4 mb-3">{post.title}</h1>
                                </div>
                                <p className="text-muted mb-4">
                                    <i className="far fa-calendar-alt me-2"></i> Published on {new Date(post.date).toLocaleDateString()}
                                    <span className="mx-2">|</span>
                                    <i className="far fa-user me-2"></i> {post.username}

                                    {/* Conditional Rendering of Edit and Delete based on logged-in user */}
                                    {currentUser && currentUser.username === post.username && (
                                        <>
                                            <span className="mx-2">|</span>
                                            <Link to={`/edit/${post.id}`} state={post}>
                                                <button className="btn btn-primary me-2">
                                                    <i className="fas fa-edit"></i> Edit
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </button>
                                        </>
                                    )}
                                </p>
                                <div className="comment-item mb-4 p-4 border rounded bg-light" dangerouslySetInnerHTML={{ __html: post.desc ? post.desc : "No description available." }} />
                                <div className="mb-5">
                                    <h4 className="mb-4">Comments</h4>
                                    {renderComments(comments)}
                                </div>

                                <div className="comment-item mb-4 p-4 border rounded bg-light">
                                    <h4 className="mb-4">Leave a Comment</h4>
                                    <form onSubmit={handleCommentSubmit}>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    value={editingCommentId ? editedName : newComment.name}
                                                    onChange={(e) => {
                                                        if (!editingCommentId) setNewComment({ ...newComment, name: e.target.value });
                                                    }}
                                                    required={!currentUser}
                                                    disabled={editingCommentId ? true : false}
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    value={editingCommentId ? editedEmail : newComment.email}
                                                    onChange={(e) => {
                                                        if (!editingCommentId) setNewComment({ ...newComment, email: e.target.value });
                                                    }}
                                                    required={!currentUser}
                                                    disabled={editingCommentId ? true : false}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Website"
                                                    value={editingCommentId ? editedWebsite : newComment.website}
                                                    onChange={(e) => {
                                                        if (!editingCommentId) setNewComment({ ...newComment, website: e.target.value });
                                                    }}
                                                    disabled={editingCommentId ? true : false}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    placeholder="Comment"
                                                    value={editingCommentId ? editedComment : newComment.comment}
                                                    onChange={(e) => {
                                                        if (editingCommentId) setEditedComment(e.target.value);
                                                        else setNewComment({ ...newComment, comment: e.target.value });
                                                    }}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">
                                                    {editingCommentId ? 'Update Comment' : 'Post Comment'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="col-lg-4">
                            <div className="bg-light rounded p-5">
                                <h4 className="mb-4">Other Posts You May Like</h4>
                                {relatedPosts.map(relatedPost => (
                                    <div key={relatedPost.id} className="d-flex align-items-center mb-3">
                                        <img
                                            className="img-fluid rounded"
                                            src={`../upload/${relatedPost.img}`}
                                            alt={relatedPost.title}
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <div className="ms-3">
                                            <h5 className="mb-2">{relatedPost.title}</h5>
                                            <Link className="btn btn-primary btn-sm" to={`/post/${relatedPost.id}`}>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Blog_Details;