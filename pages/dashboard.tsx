import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.scss"; // ✅ import module

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <h1>Inkanyez Solutions Dashboard</h1>

        {/* Market Opportunities */}
        <section className={styles.card}>
          <h2>📊 Market Opportunities</h2>
          <ul>
              {[
                "Growing demand for reliable IT support in government, education, and private sectors",
                "Shift toward cloud adoption and smart systems",
                "Outsourcing IT to improve efficiency and reduce costs"
              ].map((item, i) => (
                <li key={i} style={{ "--i": i } as React.CSSProperties}>{item}</li>
              ))}
            </ul>
        </section>

        {/* Products & Services */}
        <section className={styles.card}>
          <h2>🛠 Products & Services</h2>
          <ul>
            <li>Managed IT Support (Helpdesk, Remote & Onsite)</li>
            <li>Network Infrastructure & Management</li>
            <li>Hardware & Software Solutions</li>
            <li>Cybersecurity Services</li>
            <li>Cloud & Virtualisation Services</li>
            <li>IT Consultancy & Project Management</li>
            <li>Training & Capacity Building</li>
          </ul>
        </section>

        {/* Core Values */}
        <section className={styles.card}>
          <h2>🌟 Core Values</h2>
          <ul>
            <li>Excellence – Delivering superior quality services</li>
            <li>Integrity – Honest and transparent operations</li>
            <li>Empowerment – Developing skills and uplifting communities</li>
            <li>Innovation – Leveraging modern technologies</li>
            <li>Inclusivity – Championing diversity and women in tech</li>
          </ul>
        </section>

        {/* Leadership */}
        <section className={styles.card}>
          <h2>👩‍💼 Leadership Team</h2>
          <ul>
            <li><strong>Tumelo Makabolane</strong> – CEO</li>
            <li><strong>Sello Mabina</strong> – Director of Human Resources</li>
            <li><strong>Thabo Kabelo Lefao</strong> – Director of Legal & Compliance</li>
            <li><strong>Mukhuleko Chabangu</strong> – CTO</li>
            <li><strong>Ntwariso Maluleke</strong> – COO</li>
            <li><strong>Thandeka Modiba</strong> – CFO</li>
            <li><strong>Norbet Chekwari</strong> – Director of Sales & Marketing</li>
          </ul>
        </section>

        {/* Operations */}
        <section className={styles.card}>
          <h2>⚙️ Operational Focus</h2>
          <ul>
            <li>Device Management (Deployment, Maintenance, Asset Tracking)</li>
            <li>Application Support (Installation, Updates, Troubleshooting)</li>
            <li>IT Infrastructure (Networks, Cloud, Cybersecurity)</li>
            <li>Remote Work Solutions (VDI, Collaboration Tools, Secure Access)</li>
            <li>Training & End-User Support (Help Desk, Knowledge Base)</li>
            <li>Custom IT Solutions & Consultancy</li>
            <li>Managed IT Services (Monitoring, Reporting, Backup & Recovery)</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
