// ...existing code...
import Layout from "../components/Layout";
import styles from "../styles/swot.module.scss";

const swotData = {
  strengths: [
    "Technical expertise across software, hardware, networking, and cloud",
    "Innovative solutions tailored to client needs",
    "Trusted by clients for reliability and responsiveness",
    "Agile methodology and quick turnaround",
  ],
  weaknesses: [
    "High personnel dependence",
    "Limited resources for large-scale projects",
    "Exposure to cyber risks",
    "High employee turnover rates",
  ],
  opportunities: [
    "Rising demand for cloud solutions",
    "Adoption of AI, Blockchain, and IoT",
    "Expansion into new markets",
    "Strategic partnerships with vendors and institutions",
  ],
  threats: [
    "Highly competitive IT support market",
    "Rapid technology evolution",
    "Cybersecurity threats",
    "Economic uncertainty in South Africa",
  ],
};

const Swot = () => {
  return (
    <Layout>
      <div className={styles.swot}>
        <h1>SWOT Analysis</h1>
        <p>
          Inkanyez Solutions’ strategic assessment highlighting Strengths,
          Weaknesses, Opportunities, and Threats in the South African IT support
          market.
        </p>

        <div className={styles.swotGrid}>
          <div className={`${styles.swotBox} ${styles.strengths}`} >
            <h2>💪 Strengths</h2>
            <ul>
              {swotData.strengths.map((t, i) => (
                <li key={i} style={{ "--i": i } as React.CSSProperties}>{t}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.swotBox} ${styles.weaknesses}`} >
            <h2>⚠️ Weaknesses</h2>
            <ul>
              {swotData.weaknesses.map((t, i) => (
                <li key={i} style={{ "--i": i } as React.CSSProperties}>{t}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.swotBox} ${styles.opportunities}`} >
            <h2>🚀 Opportunities</h2>
            <ul>
              {swotData.opportunities.map((t, i) => (
                <li key={i} style={{ "--i": i } as React.CSSProperties}>{t}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.swotBox} ${styles.threats}`} >
            <h2>🌩️ Threats</h2>
            <ul>
              {swotData.threats.map((t, i) => (
                <li key={i} style={{ "--i": i } as React.CSSProperties}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Swot;
// ...existing code...