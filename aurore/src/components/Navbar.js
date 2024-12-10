import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Navbar = () => (
  <header className="flex flex-wrap lg:px-8 sm:justify-start sm:flex-nowrap  w-full bg-white text-sm py-3 dark:bg-neutral-800">
    <nav className=" w-full mx-auto flex flex-wrap basis-full items-center justify-between border-b border-[#6B6B70] ">
      <div>
        <Link
          className="flex-none focus:outline-none focus:opacity-80"
          href="/"
          aria-label="Logo"
        >
          <img
            className="w-[10rem]  sm:hidden lg:block xl:block 2xl:block md:block h-auto"
            src="/Images/Branding/BlueLogo.png"
            alt="Logo"
          />
          <img
            className=" hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-[2rem] h-auto"
            src="/Images/Branding/CircleLogo.png"
            alt="Logo"
          />
          
        </Link>
      </div>
      <div className="sm:order-3 flex items-center gap-x-4">
        <button
          type="button"
          className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          id="hs-navbar-alignment-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar-alignment"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-navbar-alignment"
        >
          <svg
            className="hs-collapse-open:hidden shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            className="hs-collapse-open:block hidden shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Toggle</span>
        </button>
      </div>
      <div
        id="hs-navbar-alignment"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        aria-labelledby="hs-navbar-alignment-collapse"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
          <Link className={styles.navbarLinks} href="/intelligent-automation">
            Intelligent Automation
          </Link>
          <Link className={styles.navbarLinks} href="/about">
            About Us
          </Link>
          <Link className={styles.navbarLinks} href="/partners">
            Partners
          </Link>
          <Link className={styles.navbarLinks} href="/resources">
            Resources
          </Link>
          <Link className={styles.navbarLinks} href="/carrers">
            Carrers
          </Link>
            <Link href="/contact">
             <button
            type="button"
            className={styles.primaryButton}
            >
            Contact Us
            </button>
            </Link>
        </div>
      </div>
    </nav>
  </header>
);
export default Navbar;
