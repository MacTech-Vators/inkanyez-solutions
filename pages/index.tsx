import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/index.module.scss";
import { motion, easeOut } from "framer-motion";

const variants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: easeOut },
  }),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const newsItemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: easeOut } },
};

const newsItems = [
  { text: "2025-09-19: Inkanyez Solutions launches new cloud training program for youth.", img: "/564.jpg" },
  { text: "2025-08-30: Awarded government contract for IT infrastructure support.", img: "/675.jpg" },
  { text: "2025-08-10: Partnered with Women in Tech SA for community workshops.", img: "/876.png" },
];

function ServiceCard({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <motion.div custom={index} initial="hidden" animate="visible" variants={variants} className={styles.serviceCard}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        {/* HERO SECTION */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={variants}
          custom={0}
        >
          <div className={styles.heroContent}>
            <motion.h1 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              Empowering South Africa’s Digital Future
            </motion.h1>
           {/*} <img src="../Runway.jpeg" alt="Inkanyez Solutions" />*/}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              Inkanyez Solutions is a <strong>woman-led</strong> IT support company dedicated to delivering innovative, reliable, and affordable technology solutions — helping organisations stay connected, secure, and productive.
            </motion.p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className={styles.ctaBtn}>Get Started</motion.button>
            </Link>
          </div>
        </motion.section>

        {/* QUICK STATS / IMPACT SECTION */}
        <motion.section className={styles.stats} initial="hidden" animate="visible" variants={container}>
          {(
            [
              { heading: "1+", text: "Corporate & Government Clients Supported" },
              { heading: "98%", text: "Client Satisfaction & SLA Compliance" },
              { heading: "45 min", text: "Average Resolution Target (End-User Support)" },
              { heading: "100%", text: "South African & Woman-Led Ownership" },
            ]
          ).map((s, i) => (
            <motion.div key={i} className={styles.stat} variants={variants} custom={i}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* SERVICES OVERVIEW */}
        <section className={styles.services}>
          <h2>Our Core Services</h2>
          <motion.div className={styles.servicesGrid} initial="hidden" animate="visible" variants={container}>
            <ServiceCard index={0}>
              <h3>Managed IT Support</h3>
              <p>End-User Computing, Helpdesk, and On-site Support — ensuring systems stay operational with minimal downtime.</p>
            </ServiceCard>
            <ServiceCard index={1}>
              <h3>Cloud & Virtualisation</h3>
              <p>Secure cloud migration and virtualisation services to modernise enterprise operations.</p>
            </ServiceCard>
            <ServiceCard index={2}>
              <h3>Cybersecurity Solutions</h3>
              <p>Protecting clients through risk assessments, firewalls, and awareness training.</p>
            </ServiceCard>
            <ServiceCard index={3}>
              <h3>Network Infrastructure</h3>
              <p>Design, cabling, and optimisation for robust and scalable networks.</p>
            </ServiceCard>
          </motion.div>
          <Link href="/services">
            <button className={styles.secondaryBtn}>Explore All Services</button>
          </Link>
        </section>

        {/* EMPOWERMENT & VALUES SECTION */}
        <section className={styles.empowerment}>
          <div className={styles.empowermentText}>
            <h2>Empowering Through Technology</h2>
            <p>
              At Inkanyez Solutions, we don’t just deliver IT services — we build opportunities. Our commitment to workforce development, inclusivity, and women empowerment sets us apart in the technology sector.
            </p>
            <ul>
              <li>Skills development for youth & women</li>
              <li>Collaboration with public & private partners</li>
              <li>Promoting innovation through digital transformation</li>
            </ul>
          </div>
          <div className={styles.empowermentImage}>
            <img src="/Onsite.jpg" alt="Inkanyez Solutions Team" />
          </div>
        </section>

        <section className={styles.newsSection}>
          <h2>📰 Latest News</h2>

          <motion.ul className={styles.newsList} initial="hidden" animate="visible" variants={container}>
            {newsItems.map((n, i) => (
              <motion.li
                key={i}
                className={styles.newsItem}
                style={{ "--i": i } as React.CSSProperties}
                aria-live={i === 0 ? "polite" : undefined}
                variants={newsItemVariants}
                custom={i}
              >
                <div className={styles.avatar}>
                  <img src={n.img} alt={`news ${i + 1}`} />
                </div>

                <div className={styles.newsContent}>
                  <p>{n.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </Layout>
  );
}
