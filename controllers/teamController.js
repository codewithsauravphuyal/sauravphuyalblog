import { db } from "../config/dbConfig.js";

// Get all team members
export const getTeams = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, name, image_url, professional_title, facebook_link, website_link, linkedin_link, instagram_link FROM teams");
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching team members:', error.message);
        res.status(500).json({ error: 'Failed to retrieve team members' });
    }
};

// Add a team member
export const addTeamMember = async (req, res) => {
    try {
        const { name, image_url, professional_title, facebook_link, website_link, linkedin_link, instagram_link } = req.body;

        const values = [name, image_url, professional_title, facebook_link, website_link, linkedin_link, instagram_link];
        const [result] = await db.query("INSERT INTO teams (name, image_url, professional_title, facebook_link, website_link, linkedin_link, instagram_link) VALUES (?)", [values]);

        res.status(200).json({ id: result.insertId, ...req.body });
    } catch (error) {
        console.error('Error adding team member:', error.message);
        res.status(500).json({ error: 'Failed to add team member' });
    }
};

// Delete a team member
export const deleteTeamMember = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM teams WHERE id = ?", [id]);
        res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (error) {
        console.error('Error deleting team member:', error.message);
        res.status(500).json({ error: 'Failed to delete team member' });
    }
};
