import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic here
        console.log("Form submitted");
        // You might want to send the form data to a server or email service.
    };

    return (
        <div className="contact-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/contactMe.jpg)` }}>
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p className="contact-detail">Email: <a href="mailto:thi_thien_trang.reagan@uconn.edu">thi_thien_trang.reagan@uconn.edu</a></p>
                <p className="contact-detail">LinkedIn: <a href="https://www.linkedin.com/in/trangreagan116" target="_blank" rel="noopener noreferrer">trangreagan116</a></p>
                <p>This is a project from CSE2102. Thank you for your time. Please let me know if you have any questions.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <textarea id="message" name="message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactPage;
