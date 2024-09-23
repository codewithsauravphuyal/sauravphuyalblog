import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext'; // Adjust the import path as needed

const Testimonials = () => {
  const { currentUser } = useContext(AuthContext); // Access currentUser from AuthContext
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    client_name: '',
    client_profession: '',
    testimonial_text: '',
    image_url: ''
  });

  const modalRef = useRef(null); // Reference to the modal

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  // Function to handle adding testimonials
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      console.error('User not logged in.');
      return; // Prevent submission if user is not logged in
    }

    try {
      const testimonialData = {
        ...newTestimonial,
        uid: currentUser.id // Include uid in the testimonial data
      };
      const response = await axios.post('http://localhost:8800/api/testimonials', testimonialData);
      setTestimonials([...testimonials, response.data]);
      setNewTestimonial({
        client_name: '',
        client_profession: '',
        testimonial_text: '',
        image_url: ''
      });
      
      // Close the modal
      const modalElement = modalRef.current;
      const modal = new window.bootstrap.Modal(modalElement);
      modal.hide();

    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  // Function to handle deleting testimonials
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/testimonials/${id}`);
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container mt-5">
        <h2>Testimonials Management</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addTestimonialModal"
        >
          Add New Testimonial
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Profession</th>
              <th>Testimonial</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td>{testimonial.id}</td>
                <td>{testimonial.client_name}</td>
                <td>{testimonial.client_profession}</td>
                <td>{testimonial.testimonial_text}</td>
                <td>
                  <img src={testimonial.image_url || 'https://via.placeholder.com/150'} alt="Testimonial" style={{ width: '100px' }} />
                </td>
                <td>
                  <button onClick={() => handleDelete(testimonial.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Testimonial Modal */}
      <div className="modal fade" id="addTestimonialModal" ref={modalRef} tabIndex={-1} aria-labelledby="addTestimonialModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTestimonialModalLabel">Add New Testimonial</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="client_name" className="form-label">Client Name</label>
                  <input type="text" className="form-control" name="client_name" value={newTestimonial.client_name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="client_profession" className="form-label">Client Profession</label>
                  <input type="text" className="form-control" name="client_profession" value={newTestimonial.client_profession} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="testimonial_text" className="form-label">Testimonial Text</label>
                  <textarea className="form-control" name="testimonial_text" value={newTestimonial.testimonial_text} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image_url" className="form-label">Image URL</label>
                  <input type="text" className="form-control" name="image_url" value={newTestimonial.image_url} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Testimonial</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
