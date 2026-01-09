const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const auth = require('../middleware/auth');

// Create note
router.post('/', auth, async (req, res) => {
  try {
    const note = new Note({
      ...req.body,
      user: req.user._id
    });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all user's notes
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.send(notes);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;