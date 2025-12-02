import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const newsItems = [
  { text: "2025-09-19: Inkanyez Solutions launches new cloud training program for youth.", img: "/news1.jpg" },
  { text: "2025-08-30: Awarded government contract for IT infrastructure support.", img: "/news2.jpg" },
  { text: "2025-08-10: Partnered with Women in Tech SA for community workshops.", img: "/news3.jpg" },
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        {/* HERO SECTION */}
        {/*<section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Empowering South Africa’s Digital Future</h1>
            <p>
              Inkanyez Solutions is a <strong>woman-led</strong> IT support
              company dedicated to delivering innovative, reliable, and
              affordable technology solutions — helping organisations
              stay connected, secure, and productive.
            </p>
            <Link href="/contact">
              <button className={styles.ctaBtn}>Get Started</button>
            </Link>
          </div>
        </section>*/}
        <section>
          <div className={styles.heroContent}>
            <h1>Empowering South Africa’s Digital Future</h1>

            {/* paragraph with moving background images */}
            <div className={styles.bgParagraph}>
              <div className={styles.bgSlider} aria-hidden="true">
                <div className={styles.track}>
                  <img src="/Onsite.jpg" className={styles.slide} alt="" />
                  <img src="/564.jpg" className={styles.slide} alt="" />
                  <img src="/675.jpg" className={styles.slide} alt="" />
                  {/* duplicated set for seamless loop */}
                  <img src="/Onsite.jpg" className={styles.slide} alt="" />
                  <img src="/564.jpg" className={styles.slide} alt="" />
                  <img src="/675.jpg" className={styles.slide} alt="" />
                </div>
              </div>

              <p>
                Inkanyez Solutions is a <strong>woman-led</strong> IT support
                company dedicated to delivering innovative, reliable, and
                affordable technology solutions — helping organisations
                stay connected, secure, and productive.
              </p>
            </div>

            <Link href="/contact">
              <button className={styles.ctaBtn}>Get Started</button>
            </Link>
         </div>
        </section>

        {/* QUICK STATS / IMPACT SECTION */}
        <section className={styles.stats}>
          <div className={styles.stat}>
            <h2>1+</h2>
            <p>Corporate & Government Clients Supported</p>
          </div>
          <div className={styles.stat}>
            <h2>98%</h2>
            <p>Client Satisfaction & SLA Compliance</p>
          </div>
          <div className={styles.stat}>
            <h2>45 min</h2>
            <p>Average Resolution Target (End-User Support)</p>
          </div>
          <div className={styles.stat}>
            <h2>100%</h2>
            <p>South African & Woman-Led Ownership</p>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className={styles.services}>
          <h2>Our Core Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Managed IT Support</h3>
              <p>
                End-User Computing, Helpdesk, and On-site Support — ensuring 
                systems stay operational with minimal downtime.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Cloud & Virtualisation</h3>
              <p>
                Secure cloud migration and virtualisation services to modernise 
                enterprise operations.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Cybersecurity Solutions</h3>
              <p>
                Protecting clients through risk assessments, firewalls, and 
                awareness training.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Network Infrastructure</h3>
              <p>
                Design, cabling, and optimisation for robust and scalable networks.
              </p>
            </div>
          </div>
          <Link href="/services">
            <button className={styles.secondaryBtn}>Explore All Services</button>
          </Link>
        </section>

        {/* EMPOWERMENT & VALUES SECTION */}
        <section className={styles.empowerment}>
          <div className={styles.empowermentText}>
            <h2>Empowering Through Technology</h2>
            <p>
              At Inkanyez Solutions, we don’t just deliver IT services —
              we build opportunities. Our commitment to workforce development,
              inclusivity, and women empowerment sets us apart in the
              technology sector.
            </p>
            <ul>
              <li>Skills development for youth & women</li>
              <li>Collaboration with public & private partners</li>
              <li>Promoting innovation through digital transformation</li>
            </ul>
          </div>
          <div className={styles.empowermentImage}>
            <img src="/inkanye.jpg" alt="Inkanyez Solutions Team" />
          </div>
        </section>
        <section className={styles.newsSection}>
          <h2>📰 Latest News</h2>

          <ul className={styles.newsList}>
            {newsItems.map((n, i) => (
              <li
                key={i}
                className={styles.newsItem}
                style={{ "--i": i } as React.CSSProperties}
                aria-live={i === 0 ? "polite" : undefined}
              >
                <div className={styles.avatar}>
                  <img src={n.img} alt={`news ${i + 1}`} />
                </div>

                <div className={styles.newsContent}>
                  <p>{n.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
{/* CLIENTS & PARTNERS SECTION * 
        <section className={styles.partners}>
          <h2>Trusted by Leading Organisations</h2>
          <p>
            We are proud to collaborate with government departments,
            educational institutions, and private companies across South Africa
            to deliver innovative IT solutions that keep operations running
            smoothly.
          </p>

          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <img src="/logos/eskom.png" alt="Eskom" />
              <p>National energy support partner providing on-site IT services.</p>
            </div>
            <div className={styles.partnerCard}>
              <img src="/logos/dhet.png" alt="Department of Higher Education" />
              <p>Assisting with IT infrastructure support for learning institutions.</p>
            </div>
            <div className={styles.partnerCard}>
              <img src="/logos/unisa.png" alt="UNISA" />
              <p>Supporting e-learning systems and campus connectivity.</p>
            </div>
            <div className={styles.partnerCard}>
              <img src="/logos/private.png" alt="Private Sector" />
              <p>Delivering managed IT services to private businesses nationwide.</p>
            </div>
          </div>

          <Link href="/projects">
            <button className={styles.secondaryBtn}>View Case Studies</button>
          </Link>
        </section>*/}
      </div>
    </Layout>
  );
}
