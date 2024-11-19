'use client'
import { useState } from 'react';
import { sendEmail } from '../services/emailService';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendEmail(formData);
        alert('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
        </form>
    );
};

export default ContactForm;
