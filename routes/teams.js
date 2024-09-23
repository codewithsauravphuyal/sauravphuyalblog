import express from 'express';
import { getTeams, addTeamMember, deleteTeamMember } from '../controllers/teamController.js';

const router = express.Router();

router.get("/", getTeams);
router.post("/", addTeamMember);
router.delete("/:id", deleteTeamMember);

export default router;
