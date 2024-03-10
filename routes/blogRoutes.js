// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware'); // Middleware to verify JWT token
const Blog = require('../models/Blog');

// Get all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username'); // Populate author field with username
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blogs' });
    }
});

// Create a new blog (requires authentication)
router.post('/blogs', verifyToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({
            title,
            content,
            author: req.user.userId, // User ID from JWT token
        });
        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog' });
    }
});

module.exports = router;
