import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import styles from "../styles/contact.module.scss"; 


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setPopupVisible(true), 800);
    return () => clearTimeout(id);
  }, []);

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
          <div className={styles.contactInfo}>
            <h2>📍 Company Info</h2>
            <p><strong>Inkanyez Solutions (Pty) Ltd</strong></p>
            <p>Company Reg: 2024/717005/07</p>
            <p>Email: <a href="mailto:info@inkanyezsolutions.co.za">info@inkanyez.co.za</a></p>
            <p>Phone: +27 68 514 4409</p>
            <p>Location: 13913 freedom Dr, Ivory Park,<br />Midrand, Johannesburg <br /> South Africa</p>
          </div>

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

      {/* WhatsApp floating button bottom-left */}
      <a
        href="https://wa.me/27685144409"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.whatsappButton} ${popupVisible ? styles.visible : ""}`}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.477 2 12c0 2.4.795 4.62 2.146 6.396L2 22l3.793-1.214A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>

      {/* small label that appears when popupVisible */}
      <div className={`${styles.whatsappLabel} ${popupVisible ? styles.visible : ""}`}>
        Chat on WhatsApp
      </div>
    </Layout>
  );
};

export default Contact;

