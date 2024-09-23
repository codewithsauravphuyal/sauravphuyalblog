import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's default CSS for the editor
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Main Edit Post component
const Edit = () => {
  const { id } = useParams(); // Get post ID from URL
  const location = useLocation();
  const state = location.state; // Get state from useLocation if passed
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [imgPreview, setImgPreview] = useState(state?.img || ""); // State to hold image preview URL

  const navigate = useNavigate();

  // Fetch post data if state is not available (e.g., page refresh)
  useEffect(() => {
    if (!state) {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
          const postData = res.data;
          setTitle(postData.title);
          setValue(postData.desc);
          setCat(postData.cat);
          setImgPreview(postData.img); // Set the image URL for preview
        } catch (err) {
          console.log(err);
        }
      };
      fetchPost();
    }
  }, [state, id]);

  // Function to handle file upload
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData, {
        withCredentials: true,
      });
      console.log(res.data); // Check the response from the server
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  // Function to handle post update
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = file ? await upload() : imgPreview; // Use the existing image URL if no new file is uploaded

    try {
      // Update an existing post
      await axios.put(
        `http://localhost:8800/api/posts/${id}`,
        {
          title,
          desc: value,
          cat,
          img: imgUrl,
        },
        { withCredentials: true }
      );
      navigate("/blog");
    } catch (err) {
      console.log(err);
    }
  };

  // Update image preview when file is selected
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result); // Display the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Edit Post</h1>
        </div>
      </div>

      <div className="add container mt-5">
        <div className="row">
          <div className="col-md-8 content">
            <input
              type="text"
              className="form-control mb-4"
              value={title}
              placeholder="Enter post title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="editorContainer mb-4">
              <ReactQuill
                className="editor"
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>

          <div className="col-md-4 menu">
            <div className="item mb-4">
              <h2>Categories</h2>
              {["travel", "education", "personal development", "web development", "design"].map((category) => (
                <div className="form-check" key={category}>
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={cat === category}
                    name="cat"
                    value={category}
                    id={category}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}
            </div>

            <div className="item">
              <h2>Publish</h2>
              <div className="mb-4">
                <label htmlFor="file" className="form-label">Upload Image</label>
                <input
                  className="form-control"
                  type="file"
                  id="file"
                  onChange={handleFileChange} // Updated file change handler
                />
                {/* Image Preview */}
                {imgPreview && (
                  <div className="mt-4">
                    <img
                      src={file ? imgPreview : `../upload/${imgPreview}`} // If a file is selected, show the new image, else show the existing one from the server
                      alt="Post"
                      style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
              <button className="btn btn-primary w-100" onClick={handleClick}>
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Edit;
