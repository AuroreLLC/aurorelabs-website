import styles from "@/styles/AboutUs.module.css";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import {
  Main,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  Team,
} from "@/content/about";

const About = () => (
  <div className="container mx-auto">
    <main className="p-8 text-center grid rows-2 gap-4 max-w-[66rem]  mx-auto">
      <div className="mb-20 mx-auto sm:px-6 lg:px-8">
        <h1 className={styles.title}>{Main.title}</h1>
        <p className={styles.description}> {Main.description}</p>
        <Link
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          {Main.button}
        </Link>
      </div>

      <div className="mx-auto px-4 grid rows-5 gap-10 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={FirstSection.img}
              alt="Hero Image"
            />
          </div>
          <div>
            <h2 className={styles.subtitle}>{FirstSection.subtitle}</h2>
            <p className={styles.description}>{FirstSection.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className={styles.subtitle}> {SecondSection.subtitle}</h2>
          <div>
            <img src={SecondSection.img}></img>
          </div>
        </div>
        <div>
          <h2 className={styles.subtitle}> {ThirdSection.subtitle}</h2>
          <p className={styles.description}> {ThirdSection.description}</p>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <h2 className={styles.subtitle}> {FourthSection.subtitle}</h2>
            <p className={styles.description}>{FourthSection.description}</p>
          </div>
          <div>
            <h2 className={`flex flex-col items-center ${styles.subtitle}`}>
              {FourthSection.secondSubtitle}
            </h2>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {Team.map((member) => (
                  <TeamCard
                    key={member.key}
                    Name={member.name}
                    Role={member.role}
                    Img={member.img}
                    LinkedIn={member.LinkedIn}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default About;
