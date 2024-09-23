  import React, { useState } from "react";
  import Navbar from "../../components/navbar/Navbar.jsx"; // Assuming you have a custom Navbar component
  import Footer from "../../components/footer/Footer.jsx"; // Assuming you have a custom Footer component
  import ReactQuill from "react-quill";
  import "react-quill/dist/quill.snow.css"; // Quill's default CSS for the editor
  import axios from "axios";
  import { useLocation, useNavigate } from "react-router-dom";
  import moment from "moment";

  // Main Create Post component
  const Create = () => {
    const state = useLocation().state; // For editing an existing post
    const [value, setValue] = useState(state?.desc || ""); // Post description
    const [title, setTitle] = useState(state?.title || ""); // Post title
    const [file, setFile] = useState(null); // Post image file
    const [cat, setCat] = useState(state?.cat || ""); // Post category

    const navigate = useNavigate();

    // Function to handle file upload
    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("http://localhost:8800/api/upload", formData, {
          withCredentials: true, // Ensures cookies are sent
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    // Function to handle post creation or update
    const handleClick = async (e) => {
      e.preventDefault();
      const imgUrl = file ? await upload() : "";

      try {
        if (state) {
          // Update an existing post
          await axios.put(
            `http://localhost:8800/api/posts/${state.id}`,
            {
              title,
              desc: value,
              cat,
              img: imgUrl,
            },
            { withCredentials: true } // Ensures cookies are sent with the request
          );
        } else {
          // Create a new post
          await axios.post(
            "http://localhost:8800/api/posts/",
            {
              title,
              desc: value,
              cat,
              img: imgUrl,
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), // Post timestamp
            },
            { withCredentials: true } // Ensures cookies are sent with the request
          );
        }
        navigate("/blog"); // Navigate to homepage after successful post creation or update
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <Navbar />
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Create Post</h1>
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
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleClick}>
                  {state ? "Update Post" : "Create Post"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  };

  export default Create;
