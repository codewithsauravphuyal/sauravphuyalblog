import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Team = () => {
    const [formData, setFormData] = useState({
        name: '',
        imageUrl: '',
        professionalTitle: '',
        facebookLink: '',
        websiteLink: '',
        linkedinLink: '',
        instagramLink: '',
    });
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeams();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Map form data to match the backend requirements
        const payload = {
            name: formData.name,
            image_url: formData.imageUrl,
            professional_title: formData.professionalTitle,
            facebook_link: formData.facebookLink,
            website_link: formData.websiteLink,
            linkedin_link: formData.linkedinLink,
            instagram_link: formData.instagramLink,
        };

        try {
            const response = await axios.post('http://localhost:8800/api/teams', payload);
            setTeams([...teams, response.data]);
            resetForm();
            document.querySelector('[data-bs-dismiss="modal"]').click();
        } catch (error) {
            console.error('Error adding team member:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/api/teams/${id}`);
            setTeams(teams.filter(team => team.id !== id));
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            imageUrl: '',
            professionalTitle: '',
            facebookLink: '',
            websiteLink: '',
            linkedinLink: '',
            instagramLink: '',
        });
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h2 className="mb-4">Team Management</h2>
                <button
                    className="btn btn-primary mb-4"
                    data-bs-toggle="modal"
                    data-bs-target="#addTeamModal"
                >
                    Add New Team Member
                </button>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Profession</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>LinkedIn</th>
                                <th>Instagram</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team) => (
                                <tr key={team.id}>
                                    <td>
                                        <img
                                            src={team.image_url}
                                            alt="Team Member"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                    </td>
                                    <td>{team.name}</td>
                                    <td>{team.professional_title}</td>
                                    <td>{team.website_link}</td>
                                    <td>{team.facebook_link}</td>
                                    <td>{team.linkedin_link}</td>
                                    <td>{team.instagram_link}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(team.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Team Member Modal */}
            <div className="modal fade" id="addTeamModal" tabIndex={-1} aria-labelledby="addTeamModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTeamModalLabel">Add New Team Member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                                    <input type="text" className="form-control" id="imageUrl" value={formData.imageUrl} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="professionalTitle" className="form-label">Professional Title</label>
                                    <input type="text" className="form-control" id="professionalTitle" value={formData.professionalTitle} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="facebookLink" className="form-label">Facebook Link</label>
                                    <input type="text" className="form-control" id="facebookLink" value={formData.facebookLink} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="websiteLink" className="form-label">Website Link</label>
                                    <input type="text" className="form-control" id="websiteLink" value={formData.websiteLink} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="linkedinLink" className="form-label">LinkedIn Link</label>
                                    <input type="text" className="form-control" id="linkedinLink" value={formData.linkedinLink} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="instagramLink" className="form-label">Instagram Link</label>
                                    <input type="text" className="form-control" id="instagramLink" value={formData.instagramLink} onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Add Team Member</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
