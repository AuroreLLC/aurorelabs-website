import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FirstSection } from "@/content/home";
import LandingCard from "@/components/LandingCard";

const Home = () => (
  <div className="w-full h-screen">
    <main className="px-8 py-4 pt-2 pb-2">
      <div className="w-full">
        <div className="grid sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2  w-full sm:gap-2  md:gap-2 xl:gap-2 ">
          <div className="md:align my-auto">
            <h1 className= {styles.title}>{FirstSection.title}</h1>
          </div>
          <LandingCard
            boldText={"Intelligent Automations"}
            text={"Create, run, and scale intelligent automations"}
            img={"/Images/Pages/Home/Microscope.png"}
          ></LandingCard>
          <LandingCard
            boldText={"A Research Update"}
            text={"AI, LLMs, Digital Agents and Innovation"}
            img={"/Images/Pages/Home/Microscope.png"}
          ></LandingCard>
          <LandingCard
            boldText={"AURORE LABS"}
            text={"Transforming Ideas into Reality"}
            img={"/Images/Pages/Home/Microscope.png"}
          ></LandingCard>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
