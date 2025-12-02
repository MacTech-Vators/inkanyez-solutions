import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
