import styles from "@/styles/Partners.module.css";
import { data } from "@/content/partners";
import Galaxy from "@/components/Galaxy";
const Partners = () => (
  <div className="container mx-auto">
    <main className="p-8 text-center grid rows-2 gap-4 max-w-[66rem]  mx-auto">
      <div className="flex flex-col items-start">
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className={styles.subtitle}>{data.subtitle}</h2>
        <Galaxy />
      </div>
    </main>
  </div>
);
export default Partners;
