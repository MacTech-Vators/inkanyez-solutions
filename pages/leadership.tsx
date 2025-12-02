import Layout from "../components/Layout";
import styles from "../styles/leadership.module.scss"; // ✅ import SCSS module

const Leadership = () => {
  return (
    <Layout>
      <div className={styles.leadership}>
        <h1>Leadership Team</h1>
        <p>
          Inkanyez Solutions is led by a strong and diverse leadership team
          dedicated to driving innovation, inclusivity, and service excellence.
        </p>

        <div className={styles.leadersGrid}>
          <div className={styles.leaderCard}>
            <h3>Tumelo Makabolane</h3>
            <p>Chief Executive Officer (CEO)</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Sello Mabina</h3>
            <p>Director of Human Resources</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Thabo Kabelo Lefao</h3>
            <p>Director of Legal & Compliance</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Mukhuleko Chabangu</h3>
            <p>Chief Technology Officer (CTO)</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Ntwariso Maluleke</h3>
            <p>Chief Operating Officer (COO)</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Thandeka Modiba</h3>
            <p>Chief Financial Officer (CFO)</p>
          </div>
          <div className={styles.leaderCard}>
            <h3>Norbet Chekwari</h3>
            <p>Director of Sales & Marketing</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leadership;
