import Layout from "../components/Layout";
import styles from "../styles/roadmap.module.scss"; // ✅ import SCSS module

const Roadmap = () => {
  return (
    <Layout>
      <div className={styles.roadmap}>
        <h1>Company Roadmap & Milestones</h1>
        <p>
          Inkanyez Solutions is committed to growth and excellence. Here’s our
          timeline of milestones and future goals.
        </p>

        <div className={styles.timeline}>
          {/* Milestone 1 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h2>Month 1–3</h2>
              <p>Finalize company structure, branding, and marketing materials.</p>
              <p className={styles.outcome}><strong>Outcome:</strong> Professional identity ready for market.</p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h2>Month 4–6</h2>
              <p>Secure first 3 IT support contracts (mix of public and private).</p>
              <p className={styles.outcome}><strong>Outcome:</strong> Revenue generation and portfolio building.</p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h2>Month 7–12</h2>
              <p>Establish SLA-driven support systems and monitoring tools.</p>
              <p className={styles.outcome}><strong>Outcome:</strong> Higher client satisfaction and retention.</p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h2>Year 2</h2>
              <p>Expand into cloud solutions, cybersecurity, and training services.</p>
              <p className={styles.outcome}><strong>Outcome:</strong> Diversified service offering.</p>
            </div>
          </div>

          {/* Milestone 5 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h2>Year 3</h2>
              <p>Open satellite offices in 2 provinces.</p>
              <p className={styles.outcome}><strong>Outcome:</strong> Increased market reach.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
