import Layout from "../components/Layout";
import styles from "../styles/services.module.scss";

const serviceData = [
  {
    title: "1. Managed IT Support",
    items: [
      "Remote & onsite technical assistance",
      "24/7 helpdesk support",
      "System health monitoring",
      "Preventative maintenance",
    ],
  },
  {
    title: "2. Network Infrastructure & Management",
    items: [
      "LAN/WAN setup and management",
      "Wi-Fi design & optimisation",
      "Network security & firewall configuration",
      "VPN & secure remote access",
    ],
  },
  {
    title: "3. Hardware & Software Solutions",
    items: [
      "Servers, desktops, laptops, peripherals",
      "Software licensing & updates",
      "Integration & asset lifecycle planning",
    ],
  },
  {
    title: "4. Cybersecurity Services",
    items: [
      "Vulnerability assessments",
      "Antivirus & malware protection",
      "Data encryption & backup",
      "Incident response & recovery",
    ],
  },
  {
    title: "5. Cloud & Virtualisation Services",
    items: [
      "Cloud migration & hosting (Microsoft 365, Azure, AWS, Google Cloud)",
      "Data storage & disaster recovery",
      "Virtual Desktop Infrastructure (VDI)",
    ],
  },
  {
    title: "6. IT Consultancy & Project Management",
    items: [
      "ICT strategy development",
      "Technology roadmap planning",
      "Systems integration & upgrades",
      "Digital transformation support",
    ],
  },
  {
    title: "7. Training & Capacity Building",
    items: [
      "End-user IT skills training",
      "Cybersecurity awareness programs",
      "Customised technical training",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <div className={styles.services}>
        <h1>Our Services</h1>
        <p>
          Inkanyez Solutions provides a comprehensive range of IT support and technology solutions 
          designed to keep organisations running efficiently, securely, and cost-effectively.
        </p>

        <div className={styles.servicesGrid}>
          {serviceData.map((service, idx) => (
            <div
              className={styles.serviceCard}
              key={service.title}
              style={{ "--delay": `${0.2 + idx * 0.13}s` } as React.CSSProperties}
            >
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i} style={{ "--i": i } as React.CSSProperties}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;

/*import Layout from "../components/Layout";
import styles from "../styles/services.module.scss";

const Services = () => {
  return (
    <Layout>
      <div className={styles.services}>
        <h1>Our Services</h1>
        <p>
          Inkanyez Solutions provides a comprehensive range of IT support and technology solutions 
          designed to keep organisations running efficiently, securely, and cost-effectively.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h2>1. Managed IT Support</h2>
            <ul>
              <li>Remote & onsite technical assistance</li>
              <li>24/7 helpdesk support</li>
              <li>System health monitoring</li>
              <li>Preventative maintenance</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>2. Network Infrastructure & Management</h2>
            <ul>
              <li>LAN/WAN setup and management</li>
              <li>Wi-Fi design & optimisation</li>
              <li>Network security & firewall configuration</li>
              <li>VPN & secure remote access</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>3. Hardware & Software Solutions</h2>
            <ul>
              <li>Servers, desktops, laptops, peripherals</li>
              <li>Software licensing & updates</li>
              <li>Integration & asset lifecycle planning</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>4. Cybersecurity Services</h2>
            <ul>
              <li>Vulnerability assessments</li>
              <li>Antivirus & malware protection</li>
              <li>Data encryption & backup</li>
              <li>Incident response & recovery</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>5. Cloud & Virtualisation Services</h2>
            <ul>
              <li>Cloud migration & hosting (Microsoft 365, Azure, AWS, Google Cloud)</li>
              <li>Data storage & disaster recovery</li>
              <li>Virtual Desktop Infrastructure (VDI)</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>6. IT Consultancy & Project Management</h2>
            <ul>
              <li>ICT strategy development</li>
              <li>Technology roadmap planning</li>
              <li>Systems integration & upgrades</li>
              <li>Digital transformation support</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>7. Training & Capacity Building</h2>
            <ul>
              <li>End-user IT skills training</li>
              <li>Cybersecurity awareness programs</li>
              <li>Customised technical training</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
*/