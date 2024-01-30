import express from "express";
const router = express.Router();
import {
  getAllNotes,
  createNote,
  deleteNoteById,
  editNote,
  updateNoteById,
} from "../controllers/keynoteController.js";

router.get("/", getAllNotes);
router.get("/:id", editNote);
router.post("/:id", updateNoteById);
router.post("/:id", deleteNoteById);
router.put("/new", createNote)
export default router;
