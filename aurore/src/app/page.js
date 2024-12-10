import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FirstSection } from "@/content/home";
import LandingCard from "@/components/LandingCard";

const Home = () => (
  <div className="w-full  h-screen">
    <main className="px-8 py-4 pt-2 pb-2">
      <div className="w-full">
        <div className="grid md:grid-cols-2 grid-cols-2 grid-rows-2 w-full gap-7 md:gap-2 xl:gap-2 ">
          <div className="">
            <h1 className={styles.title}>{FirstSection.title}</h1>
          </div>
          <LandingCard boldText={"Intelligen Automations"} text={"Create, run, and scale intelligent automations"} img={"/Images/Pages/Home/Microscope.png"}></LandingCard>
          <LandingCard boldText={"A Research Update"} text={"AI, LLMs, Digital Agents and Innovation"} img={"/Images/Pages/Home/Microscope.png"}></LandingCard>
          <LandingCard boldText={"AURORE LABS"} text={"Transforming Ideas into Reality"} img={"/Images/Pages/Home/Microscope.png"}></LandingCard>
        </div>

      </div>
    </main>
  </div>
);

export default Home;
