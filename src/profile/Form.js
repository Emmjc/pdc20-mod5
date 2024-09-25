import React, { useState } from "react";
import './Form.css'; // Import the CSS file

function Forms({ user, onUpdate }) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        username: user.username,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>

            <button type="submit">Update Profile</button>
        </form>
    );
}

export default Forms;
