import Layout from "../components/Layout";
import styles from "../styles/projects.module.scss"; // ✅ import SCSS module

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <h1>Our Projects & Case Studies</h1>
        <p>
          At Inkanyez Solutions, we partner with government, private companies,
          and educational institutions to deliver impactful IT support,
          cloud migration, and digital transformation solutions.
        </p>

        <div className={styles.projectsGrid}>
          {/* Example Project 1 */}
          <div className={styles.projectCard}>
            <h2>Government Department – IT Support Rollout</h2>
            <p>
              Provided SLA-driven IT support services for a national government
              department, including device management, network optimization, and
              helpdesk support.
            </p>
            <p className={styles.outcome}>
              <strong>Outcome:</strong> Improved efficiency and reduced downtime.
            </p>
          </div>

          {/* Example Project 2 */}
          <div className={styles.projectCard}>
            <h2>Educational Institution – Cloud Migration</h2>
            <p>
              Migrated an entire university system to Microsoft 365 and Azure,
              enabling secure remote learning and collaboration tools.
            </p>
            <p className={styles.outcome}>
              <strong>Outcome:</strong> Enhanced e-learning capabilities and collaboration.
            </p>
          </div>

          {/* Example Project 3 */}
          <div className={styles.projectCard}>
            <h2>SME – Cybersecurity Enhancement</h2>
            <p>
              Conducted vulnerability assessments, implemented firewalls, and
              provided cybersecurity awareness training for staff.
            </p>
            <p className={styles.outcome}>
              <strong>Outcome:</strong> Strengthened security and minimized risks.
            </p>
          </div>

          {/* Example Project 4 */}
          <div className={styles.projectCard}>
            <h2>Municipality – Smart Infrastructure Support</h2>
            <p>
              Supported the municipality in implementing smart systems for
              service delivery, including IoT integration and secure network
              infrastructure.
            </p>
            <p className={styles.outcome}>
              <strong>Outcome:</strong> Better service monitoring and efficiency.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
