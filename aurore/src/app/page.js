import Link from "next/link";
import styles from "@/styles/Home.module.css";

import ServicesSection from "@/components/ServicesSection";

const Home = () => (
  <div className="container mx-auto">
      <main className="p-8 text-center">
        <h1 className={styles.title}>
          Innovative Software Solutions for Your Business
        </h1>
        <p className={styles.description}>
          Welcome to AuRore, where we provide top-notch software services to help your business thrive.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/services">
            <button className={`${styles.button} ${styles.buttonPrimary}`}> Services </button>
          </Link>
          <Link href="/about">
            <button className={`${styles.button} ${styles.buttonSecondary}`}> About the company </button>
          </Link>
        </div>
      </main>
    <ServicesSection />
  </div>
);

export default Home;
