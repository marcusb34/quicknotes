require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");

// Add these near your other middleware
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("QuickNotes API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
