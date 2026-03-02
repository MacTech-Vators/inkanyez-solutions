import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.scss";
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <><div className={styles.layout}>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div><Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />
          {/* other meta tags/styles */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html></>
  );
};

export default Layout;
