// client/src/components/CreateBlogForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateBlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreateBlog = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/blogs', { title, content });
            console.log('Blog created successfully');
            // Redirect to blog list or handle success message
        } catch (error) {
            console.error('Error creating blog:', error);
            // Handle error (display error message, etc.)
        }
    };

    return (
        <div>
            <h2>Create New Blog</h2>
            <form onSubmit={handleCreateBlog}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Create Blog</button>
            </form>
        </div>
    );
};

export default CreateBlogForm;
