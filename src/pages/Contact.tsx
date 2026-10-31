import React, { useState, useEffect } from "react";
import "../css/contactUs.css";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }
    setSubmitted(true);
  };

  if (loading) {
    return <div className="loading-state">Loading... </div>;
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">If you have any questions or suggestions, feel free to reach out to us.</p>

      <div className="contact-content">
        <div className="contact-info-card">
          <h3>Get In Touch</h3>
          <p className="contact-info-desc">You can also contact us using the information below.</p>
          
          <div className="contact-details">
            <div>
              <span className="contact-label">Address</span>
              <strong>24 Nizami Street, Baku</strong>
            </div>
            <div>
              <span className="contact-label">Email</span>
              <strong>support@cyberstore.az</strong>
            </div>
            <div>
              <span className="contact-label">Phone</span>
              <strong>+994 12 345 67 89</strong>
            </div>
          </div>
        </div>


        <div className="contact-form-card">
          {submitted ? (
            <div className="success-message">
              <h2 className="success-title">Message Sent! </h2>
              <p className="success-desc">We will get back to you as soon as possible.</p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                className="new-message-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
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
                <label className="form-label">Email Address</label>
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
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="form-textarea" 
                />
              </div>

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;