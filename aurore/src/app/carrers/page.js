import styles from "@/styles/Carrers.module.css";
import SectionWithIcon from "@/components/SectionWithIcon";


const Carrers = () => (
  <div className="container mx-auto">
    <main className="p-8 text-center grid rows-2 gap-4 max-w-[66rem]  mx-auto">
      <div className="mb-20 mx-auto sm:px-6 lg:px-8">
        <h1 className={styles.title}>{mainData.title}</h1>
        <p className={styles.description}> {mainData.description}</p>
      </div>

      <div className="mx-auto px-4 grid rows-7 gap-10 sm:px-6 lg:px-8">
        <div className="">
          <h1 className=
          {`font-bold text-4xl mx-auto ${styles.subtitleText} text-center `}>
            {mainData.subtitle}
          </h1>
        </div>
        {data.map((section) => (
          <SectionWithIcon
            key={section.key}
            Subtitle={section.subtitle}
            Description={section.description}
            IconPath={section.iconPath}
            imageFirst={section.imageFirst}
            Styles={styles}
          />
        ))}
      </div>
    </main>
  </div>
);

export default Carrers;
