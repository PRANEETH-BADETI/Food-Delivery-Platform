import React from 'react';
import './Contact.css';
import { assets } from '../../assets/assets';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Have a question about your order, or want to hire the developer behind this platform? We're here for it.</p>
      </div>

      <div className="contact-container">
        {/* Official Platform Contact Form */}
        <div className="contact-form-section">
          <h3>Platform Support</h3>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject (e.g., Missing Item, Late Delivery)" required />
            <textarea rows="5" placeholder="How can we help you today?" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Developer / Recruiter Focus Section */}
        <div className="developer-card">
          <div className="dev-card-body">
            <h3>Hi, We are the Developers!</h3>
            <p className="dev-pitch">
              We built this Next-Gen Agentic Food Delivery Platform to showcase my expertise in the <b>MERN Stack</b>, <b>Generative AI</b>, and system routing. 
            </p>
            
            <div className="dev-highlights">
              <h4>Technical Arsenal:</h4>
              <div className="tech-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>RAG & Vector DBs</span>
              </div>
            </div>

            <div className="dev-contact-links">
              <div className="social-buttons">
                {/* You can update these with your actual profile links */}
                <a href="https://www.linkedin.com/in/praneeth-badeti-2b0866289/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  <img src={assets.linkedin_icon} alt="LinkedIn" />
                  Connect
                </a>
                <a href="praneethbadeti@gmail.com" className="social-btn email">
                  ✉️ Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;