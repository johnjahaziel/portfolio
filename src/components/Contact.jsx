import emailjs from "emailjs-com";
import { useState } from "react";
import location from "../assets/loca.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
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

        emailjs.send(
        "service_o0xo888",
        "template_idhoo3o",
        {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        },
        "MP-2XBcxpP1x6fMak"
        )
        .then((result) => {
        console.log("Message Sent:", result.text);
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
        console.error("Error:", error.text);
        alert("❌ Failed to send message. Please try again.");
        });
    };

    return (
        <div className="contact-section">
        <div className="contact-content">
            {/* --- LEFT SIDE --- */}
            <div className="contact-left">
            <div className="contact-header">
                <h1 className="contact-title">Let's</h1>
                <h2 className="contact-subtitle">CONNECT</h2>
                <p className="contact-description">
                "Ready to collaborate on something extraordinary? Let's turn ideas into reality."
                </p>
                <p className="contact-sub-description">
                Whether you have a project in mind, want to discuss opportunities, or simply want to connect, 
                I'm always excited to hear from creative minds.
                </p>
            </div>

            <div className="contact-info">
                <div className="contact-item">
                <div className="contact-icon"><img src={mail} alt="" /></div>
                <div className="contact-details"><h3>Email</h3><p>johnjahaziel@gmail.com</p></div>
                </div>

                <div className="contact-item">
                <div className="contact-icon"><img src={phone} alt="" /></div>
                <div className="contact-details"><h3>Phone</h3><p>9791277570</p></div>
                </div>

                <div className="contact-item">
                <div className="contact-icon"><img src={location} alt="" /></div>
                <div className="contact-details"><h3>Location</h3><p>Kovilpatti, India</p></div>
                </div>
            </div>
            </div>

            {/* --- RIGHT SIDE (FORM) --- */}
            <div className="contact-form-container">
            <h3 className="form-title">contact</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Your Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                </div>

                <div className="form-group">
                <label>Your Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                </div>

                <div className="form-group">
                <label>Your Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
            </div>
        </div>

        <div className="contact-footer">
            <p className="footer-text">Let's build something beautiful together</p>
            <div className="footer-code"><span className="code-comment">// Send me a message</span></div>
        </div>
        </div>
    );
};

export default Contact;
