import Link from "next/link";
import React from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  // default coords (Johannesburg). Change to your exact lat/lng as needed.
  const lat = -26.2041;
  const lng = 28.0473;
  const zoom = 14;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={styles.footerSection}>
          <h3>Inkanyez Solutions</h3>
          <p>
            Innovative, reliable, and affordable IT support solutions for South
            Africa.
          </p>
          
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/leadership">Leadership</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/swot">SWOT Analysis</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
        {/*  <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@inkanyez.co.za">
              info@inkanyez.co.za
            </a>
          </p>
          <p>Phone: +27 63 176 1071</p>*/}
          <h3>Location</h3>
          <p>123 Inkanyez Street<br/>Johannesburg, South Africa</p>

          <div className={styles.mapContainer} aria-hidden={false}>
            <iframe
              title="Inkanyez Solutions location"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Inkanyez Solutions location"
            />
            <a className={styles.mapLink} href={mapsLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
        </div>

        {/* Location Map *
        <div className={styles.footerSection}>
          <h3>Location</h3>
          <p>123 Inkanyez Street<br/>Johannesburg, South Africa</p>

          <div className={styles.mapContainer} aria-hidden={false}>
            <iframe
              title="Inkanyez Solutions location"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Inkanyez Solutions location"
            />
            <a className={styles.mapLink} href={mapsLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>*/}</div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Inkanyez Solutions (Pty) Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;