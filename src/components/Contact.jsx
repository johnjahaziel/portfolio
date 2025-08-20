import { useState } from "react";
import "../css/contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add email service integration here
    };

    return (
        <div className="contact-section">
            <div className="contact-header">
                <h1 className="contact-title">LET'S</h1>
                <h2 className="contact-subtitle">CONNECT</h2>
                <p className="contact-description">
                    "Ready to collaborate on something extraordinary? Let's turn ideas into reality."
                </p>
                <p className="contact-sub-description">
                    Whether you have a project in mind, want to discuss opportunities, or simply want to connect, 
                    I'm always excited to hear from creative minds.
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">✉</div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <p>johnjahaziel@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="contact-icon">📱</div>
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-details">
                            <h3>Location</h3>
                            <p>Kerala, India</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h3 className="form-title">Send me a message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="form-textarea"
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="contact-footer">
                <p className="footer-text">Let's build something beautiful together</p>
                <div className="footer-code">
                    <span className="code-comment">// Send me a message</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
