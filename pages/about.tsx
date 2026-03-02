import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/home.module.scss"; 

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        {/* Hero Section */}
     {/*}   <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Empowering South Africa’s Digital Future</h1>
            <p>
              Inkanyez Solutions is a woman-led IT support company delivering
              innovative, reliable, and affordable technology solutions across
              public and private sectors.
            </p>
            <Link href="/contact">
              <button className={styles.ctaBtn}>Get in Touch</button>
            </Link>
          </div>
        </section>
*/}
<section className={styles.hero}>
  <div className={styles.heroContent}>
            <h1>Empowering South Africa’s Digital Future</h1>
           { /* paragraph with moving background images*
            <div className={styles.bgParagraph}>
              <div className={styles.bgSlider} aria-hidden="true">
                <div className={styles.track}>
                  <img src="/Onsite.jpg" className={styles.slide} alt="" />
                  <img src="/564.jpg" className={styles.slide} alt="" />
                  <img src="/675.jpg" className={styles.slide} alt="" />
                  {/* duplicated set for seamless loop *
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

            */}
         </div>

</section>

        {/* Vision & Mission */}
        <section className={styles.visionMission}>
          <div className={styles.vision}>
            <h2>🌍 Vision</h2>
            <p>
              To be a leading IT support service provider in South Africa,
              empowering communities through skills development and
              technological advancement.
            </p>
          </div>
          <div className={styles.mission}>
            <h2>🎯 Mission</h2>
            <p>
              To provide innovative, reliable, and responsive IT support
              services to government and private sector clients while
              contributing to socio-economic development through workforce
              training and empowerment.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.coreValues}>
  <h2>🌟 Our Core Values</h2>
  <ul>
    {[
      "Excellence – Delivering superior quality services",
      "Integrity – Conducting business with honesty & transparency",
      "Empowerment – Developing skills and uplifting communities",
      "Innovation – Leveraging modern technologies",
      "Inclusivity – Championing diversity & women in tech"
    ].map((value, i) => (
      <li key={i} style={{ "--i": i } as React.CSSProperties}>{value}</li>
    ))}
  </ul>
</section>
        <section className={styles.newsSection}>
  <h2>📰 Latest News</h2>
  <ul>
    {[
      "2025-09-19: Inkanyez Solutions launches new cloud training program for youth.",
      "2025-08-30: Awarded government contract for IT infrastructure support.",
      "2025-08-10: Partnered with Women in Tech SA for community workshops."
    ].map((news, i) => (
      <li key={i} style={{ "--i": i } as React.CSSProperties}>{news}</li>
    ))}
  </ul>
</section>
      </div>
    </Layout>
  );
}


/*import Layout from "../components/Layout";
import Link from "next/link";
import "../styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className="home">

        {/* Hero Section *}
        <section className="hero">
          <div className="hero-text">
            <h1>Empowering South Africa’s Digital Future</h1>
            <p>
              Inkanyez Solutions is a woman-led IT support company delivering
              innovative, reliable, and affordable technology solutions across
              public and private sectors.
            </p>
            <Link href="/contact">
              <button className="cta-btn">Get in Touch?{/* image *}</button>
            </Link>
          </div>
        </section>

        {/* Vision & Mission *}
        <section className="vision-mission">
          <div className="vision">
            <h2>🌍 Vision</h2>
            <p>
              To be a leading IT support service provider in South Africa,
              empowering communities through skills development and
              technological advancement.
            </p>
          </div>
          <div className="mission">
            <h2>🎯 Mission</h2>
            <p>
              To provide innovative, reliable, and responsive IT support
              services to government and private sector clients while
              contributing to socio-economic development through workforce
              training and empowerment.
            </p>
          </div>
        </section>

        {/* Core Values *}
        <section className="core-values">
          <h2>🌟 Our Core Values</h2>
          <ul>
            <li>Excellence – Delivering superior quality services</li>
            <li>Integrity – Conducting business with honesty & transparency</li>
            <li>Empowerment – Developing skills and uplifting communities</li>
            <li>Innovation – Leveraging modern technologies</li>
            <li>Inclusivity – Championing diversity & women in tech</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
*/