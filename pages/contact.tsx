import Layout from "../components/Layout";
import { useState } from "react";
import styles from "../styles/contact.module.scss"; // ✅ import SCSS module

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with Inkanyez Solutions for enquiries, collaborations, or IT support. 
          We’d love to hear from you.
        </p>

        <div className={styles.contactContainer}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2>📍 Company Info</h2>
            <p><strong>Inkanyez Solutions (Pty) Ltd</strong></p>
            <p>Company Reg: 2024/717005/07</p>
            <p>Email: <a href="mailto:info@inkanyezsolutions.co.za">info@inkanyezsolutions.co.za</a></p>
            <p>Phone: +27 11 123 4567</p>
            <p>Location: Johannesburg, South Africa</p>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2>✉️ Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
