import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <h1>Company Dashboard</h1>
        <div className={styles.cards}>
          <div className={styles.card}>📊 Market Opportunities</div>
          <div className={styles.card}>🛠 Products & Services</div>
          <div className={styles.card}>👩‍💼 Leadership Team</div>
          <div className={styles.card}>⚙️ Operations</div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
