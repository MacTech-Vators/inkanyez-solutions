import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.scss"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
       <img src="/logss.png" alt="Inkanyez Solutions Logo" width={260} height={60} /></Link>
        {/*<Link href="/">Inkanyez Solutions</Link>*/}
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/projects">Projects</Link></li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span>Company ▾</span>
          {isOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href={"/roadmap"}>Road Map</Link></li>
              <li><Link href="/swot">SWOT Analysis</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




/*import Link from "next/link";
import { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Inkanyez Solutions</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span>Services ▾</span>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><Link href="/#support">IT Support</Link></li>
              <li><Link href="/#cloud">Cloud Services</Link></li>
              <li><Link href="/#training">Training</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { useState } from "react";
import "../styles/navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Inkanyez Solutions</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/projects">Projects</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span>Company ▾</span>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/swot">SWOT Analysis</Link></li>
                <li><Link href="/contact">Contact</Link></li>

            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
*/
