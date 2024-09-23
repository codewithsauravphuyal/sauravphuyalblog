import express from 'express';
import {
  getAllCertificates,
  addCertificate,
  updateCertificate,
  deleteCertificate
} from '../controllers/certificateController.js';

const router = express.Router();

router.get("/", getAllCertificates); // Fetch all certificates
router.post("/", addCertificate); // Add a new certificate
router.put("/:id", updateCertificate); // Update a certificate by ID
router.delete("/:id", deleteCertificate); // Delete a certificate by ID

export default router;
