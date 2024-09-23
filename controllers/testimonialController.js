import { db } from "../config/dbConfig.js";

// Get all testimonials
export const getTestimonials = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, client_name, client_profession, testimonial_text, image_url FROM testimonials");
        if (!rows.length) {
            return res.status(404).json({ message: 'No testimonials found' });
        }
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching testimonials:', error.message);
        res.status(500).json({ error: 'Failed to retrieve testimonials', details: error.message });
    }
};

// Add a testimonial
export const addTestimonial = async (req, res) => {
    try {
      const { client_name, client_profession, testimonial_text, image_url, uid } = req.body;
  
      // Ensure the uid is valid
      const [user] = await db.query("SELECT * FROM users WHERE id = ?", [uid]);
      if (!user.length) {
        return res.status(400).json("User does not exist.");
      }
  
      const values = [client_name, client_profession, testimonial_text, image_url, uid];
      const [result] = await db.query("INSERT INTO testimonials (`client_name`, `client_profession`, `testimonial_text`, `image_url`, `uid`) VALUES (?)", [values]);
  
      return res.status(200).json({ id: result.insertId, client_name, client_profession, testimonial_text, image_url, uid });
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  

// Update a testimonial
export const updateTestimonial = async (req, res) => {
    const { client_name, client_profession, testimonial_text, image_url } = req.body;
    const { id } = req.params;
    try {
        await db.query(
            "UPDATE testimonials SET client_name = ?, client_profession = ?, testimonial_text = ?, image_url = ? WHERE id = ?",
            [client_name, client_profession, testimonial_text, image_url, id]
        );
        res.status(200).json({ message: 'Testimonial updated successfully' });
    } catch (error) {
        console.error('Error updating testimonial:', error.message);
        res.status(500).json({ error: 'Failed to update testimonial', details: error.message });
    }
};

// Delete a testimonial
export const deleteTestimonial = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM testimonials WHERE id = ?", [id]);
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Error deleting testimonial:', error.message);
        res.status(500).json({ error: 'Failed to delete testimonial', details: error.message });
    }
};
