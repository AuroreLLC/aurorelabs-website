import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ServicesSection from "@/components/ServicesSection";
import { FirstSection } from "@/content/home";
import { SecondSection } from "@/content/home";

const Home = () => (
  <div className="container mx-auto">
    <main className="p-8 text-center">
      <div className="mx-auto px-4 grid rows-3 gap-10 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className={styles.title}>{FirstSection.title}</h1>
            <h2 className={styles.subtitle}>{FirstSection.subtitle}</h2>
            <p className={styles.description}>{FirstSection.paragraph}</p>
            <div className="mt-7  w-full">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href={FirstSection.buttonRef}
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={FirstSection.img}
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="justify-items-center text-center">
          <h2 className={styles.sectionTitle}> Intelligent Automations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={SecondSection.img}
              alt="Hero Image"
            />
          </div>
          <div>
            <h1 className={styles.title}>{SecondSection.title}</h1>
            <h2 className={styles.subtitle}>{SecondSection.subtitle}</h2>
            <p className={styles.description}>{SecondSection.paragraph}</p>
            <div className="mt-7  w-full">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href={FirstSection.buttonRef}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <ServicesSection />
  </div>
);

export default Home;
