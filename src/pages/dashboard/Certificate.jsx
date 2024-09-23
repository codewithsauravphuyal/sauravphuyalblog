import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext'; // Adjust the import path as needed

const Certificate = () => {
  const { currentUser } = useContext(AuthContext); // Get the current user context
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    certificate_name: '',
    issuing_organization: '',
    issue_date: '',
    description: '',
    image_url: ''
  });

  // Fetch certificates from backend
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/certificates');
        setCertificates(response.data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setNewCertificate({ ...newCertificate, [e.target.name]: e.target.value });
  };

  // Function to handle adding certificates
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
        console.error('User not logged in.');
        return; // Handle the case where user is not logged in
    }

    try {
        // Log the currentUser and uid for debugging
        console.log('Current User:', currentUser);
        
        // Ensure uid is included
        const certificateData = {
            ...newCertificate,
            uid: currentUser.id // Update this line if 'id' is the correct field for uid
        };

        console.log('Certificate Data:', certificateData); // Log data being sent

        const response = await axios.post('http://localhost:8800/api/certificates', certificateData);
        setCertificates([...certificates, response.data]); // Add the new certificate to the existing list
        setNewCertificate({
            certificate_name: '',
            issuing_organization: '',
            issue_date: '',
            description: '',
            image_url: ''
        }); // Reset form
    } catch (error) {
        console.error('Error adding certificate:', error.response ? error.response.data : error.message);
    }
};

  // Function to handle deleting certificates
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/certificates/${id}`);
      setCertificates(certificates.filter(certificate => certificate.id !== id)); // Remove the deleted certificate from the list
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h2>Certificates Management</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addCertificateModal"
        >
          Add New Certificate
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Organization</th>
              <th>Issue Date</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate) => (
              <tr key={certificate.id}>
                <td>{certificate.id}</td>
                <td>{certificate.certificate_name}</td>
                <td>{certificate.issuing_organization}</td>
                <td>{new Date(certificate.issue_date).toLocaleDateString()}</td>
                <td>{certificate.description}</td>
                <td>
                  <img src={certificate.image_url || 'https://via.placeholder.com/150'} alt="Certificate" style={{ width: '100px' }} />
                </td>
                <td>
                  <button onClick={() => handleDelete(certificate.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Certificate Modal */}
      <div className="modal fade" id="addCertificateModal" tabIndex={-1} aria-labelledby="addCertificateModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCertificateModalLabel">Add New Certificate</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="certificate_name" className="form-label">Certificate Name</label>
                  <input type="text" className="form-control" name="certificate_name" value={newCertificate.certificate_name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="issuing_organization" className="form-label">Issuing Organization</label>
                  <input type="text" className="form-control" name="issuing_organization" value={newCertificate.issuing_organization} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="issue_date" className="form-label">Issue Date</label>
                  <input type="date" className="form-control" name="issue_date" value={newCertificate.issue_date} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" name="description" value={newCertificate.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image_url" className="form-label">Image URL</label>
                  <input type="text" className="form-control" name="image_url" value={newCertificate.image_url} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Certificate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
