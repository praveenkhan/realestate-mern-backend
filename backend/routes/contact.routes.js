import express from "express";
import { createContact } from "../controllers/contactController.js";
import Contact from "../models/Contact.model.js";

const router = express.Router();

// POST contact
router.post("/", createContact);

// GET all contacts (admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
