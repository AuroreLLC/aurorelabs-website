import DarkModeButton from "./DarkModeButton";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Footer = () => (
  <footer className="mt-auto w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto bg-white">
    <div className="pt-5 border-t border-gray-200 dark:border-neutral-700">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <div className="space-x-4 text-sm">
            <DarkModeButton />
            <Link className={styles.footerText} href="#">
              Privacy
            </Link>
            <Link className={styles.footerText} href="#">
              Status
            </Link>
            <p className={styles.footerText}>
              &copy; {new Date().getFullYear()} Aurore. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-1">
          <p className={styles.footerText}>Api</p>
          <p className={styles.footerText}>Carrers</p>
          <p className={styles.footerText}>Privacy Policy</p>
          <p className={styles.footerText}>Cookie Policy</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
