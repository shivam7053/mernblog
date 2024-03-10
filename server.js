// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env
const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


app.use('/api/auth', authRoutes); // Use auth routes at /api/auth
app.use('/api', blogRoutes); // Use blog routes at /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
