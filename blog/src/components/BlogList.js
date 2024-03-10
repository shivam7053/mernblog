// client/src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs from backend API
        axios.get('/api/blogs')
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    return (
        <div>
            <h2>All Blogs</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <p>Author: {blog.author.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
