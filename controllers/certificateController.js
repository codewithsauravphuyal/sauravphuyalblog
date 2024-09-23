import { db } from "../config/dbConfig.js";

// Get all certificates
export const getAllCertificates = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM certificates");
        if (!rows.length) {
            return res.status(404).json({ message: 'No certificates found' });
        }
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching certificates:', error.message);
        res.status(500).json({ error: 'Failed to retrieve certificates', details: error.message });
    }
};

// Add a certificate
export const addCertificate = async (req, res) => {
    const { uid, certificate_name, issuing_organization, issue_date, description, image_url } = req.body;
    try {
        await db.query(
            "INSERT INTO certificates (uid, certificate_name, issuing_organization, issue_date, description, image_url) VALUES (?, ?, ?, ?, ?, ?)",
            [uid, certificate_name, issuing_organization, issue_date, description, image_url]
        );
        res.status(201).json({ message: 'Certificate added successfully' });
    } catch (error) {
        console.error('Error adding certificate:', error.message);
        res.status(500).json({ error: 'Failed to add certificate', details: error.message });
    }
};

// Update a certificate
export const updateCertificate = async (req, res) => {
    const { certificate_name, issuing_organization, issue_date, description, image_url } = req.body;
    const { id } = req.params;
    try {
        await db.query(
            "UPDATE certificates SET certificate_name = ?, issuing_organization = ?, issue_date = ?, description = ?, image_url = ? WHERE id = ?",
            [certificate_name, issuing_organization, issue_date, description, image_url, id]
        );
        res.status(200).json({ message: 'Certificate updated successfully' });
    } catch (error) {
        console.error('Error updating certificate:', error.message);
        res.status(500).json({ error: 'Failed to update certificate', details: error.message });
    }
};

// Delete a certificate
export const deleteCertificate = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM certificates WHERE id = ?", [id]);
        res.status(200).json({ message: 'Certificate deleted successfully' });
    } catch (error) {
        console.error('Error deleting certificate:', error.message);
        res.status(500).json({ error: 'Failed to delete certificate', details: error.message });
    }
};
