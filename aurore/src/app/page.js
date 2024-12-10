import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FirstSection } from "@/content/home";
import { SecondSection } from "@/content/home";

const Home = () => (
  <div className="container max-w-[100rem] h-screen">
    <main className="px-4 py-4 pt-2 pb-2 text-center">
      <div className="mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-2 grid-rows-2  gap-2 md:gap-8 xl:gap-1 md:items-center">
          <div className="flex">
            <h1 className={styles.title}>{FirstSection.title}</h1>
          </div>
          <div className="flex-col">
            <div className="mx-auto">
              <img src="/Images/Pages/Home/Microscope.png" className="w-auto h-[20rem]" alt="image"/>
            </div>
            <div>
              <p className=" inline font-bold text-[#003865] text-base">A Research Update</p>
              <p className="inline text-[#003865] text-base"> AI, LLMs, Digital Agents and Innovation</p>
            </div>
          </div>
          <div className="flex-col">
            <div className="mx-auto">
              <img src="/Images/Pages/Home/Microscope.png" className="w-auto h-[20rem]" alt="image"/>
            </div>
            <div>
              <p className=" inline font-bold text-[#003865] text-base">A Research Update</p>
              <p className="inline text-[#003865] text-base"> AI, LLMs, Digital Agents and Innovation</p>
            </div>
          </div>
          <div className="flex-col">
            <div className="mx-auto">
              <img src="/Images/Pages/Home/Microscope.png" className="w-auto h-[20rem]" alt="image"/>
            </div>
            <div>
              <p className=" inline font-bold text-[#003865] text-base">A Research Update</p>
              <p className="inline text-[#003865] text-base"> AI, LLMs, Digital Agents and Innovation</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
);

export default Home;
