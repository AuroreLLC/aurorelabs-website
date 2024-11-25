import styles from "@/styles/Carrers.module.css";
import SectionWithIcon from "@/components/SectionWithIcon";

const mainData = {
  title: "Innovate with us",
  description:
    "At Aurore, we believe in shaping the future through innovation, collaboration, and excellence. We are constantly evolving, and we’re always on the lookout for passionate individuals ready to grow with us.",
  subtitle: "Why Join Us?",
};
const data = [
  {
    key: 1,
    subtitle: "Innovation at the Core",
    description:
      "Be part of a team where groundbreaking ideas are not just welcomed they're encouraged. We harness the power of cutting-edge technology and creativity to solve real-world challenges.",
    iconPath: "/Images/Pages/Carrers/lightbulb.png",
    imageFirst: false,
  },
  {
    key: 2,
    subtitle: "Collaboration and Support",
    description:
      "We believe that the best results come from working together. You’ll collaborate with talented professionals from diverse fields, contributing your unique perspective to create solutions that make a difference.",
    iconPath: "/Images/Pages/Carrers/idea.png",
    imageFirst: true,
  },
  {
    key: 3,
    subtitle: "GROWTH OPPORTUNITIES",
    description:
      "Your development is important to us. From professional training to leadership opportunities, we invest in your growth so that we can succeed together.",
    iconPath: "/Images/Pages/Carrers/stocks.png",
    imageFirst: false,
  },
  {
    key: 4,
    subtitle: "Flexibility and Balance",
    description:
      "We understand that innovation thrives with freedom. Enjoy the flexibility to work in a way that suits your lifestyle, with options for remote work, flexible hours, and a culture that values work-life balance.",
    iconPath: "/Images/Pages/Carrers/balance.png",
    imageFirst: true,
  },
  {
    key: 5,
    subtitle: "Excellence in Everything We Do",
    description:
      "We set high standards for ourselves and our work. If you are someone who takes pride in delivering exceptional results, you'll feel right at home here.",
    iconPath: "/Images/Pages/Carrers/idealight.png",
    imageFirst: false,
  },
  {
    key: 6,
    subtitle: "Ready to Join the Team?",
    description:
      "If you’re looking for a dynamic environment where your skills will be valued and your ideas will drive real impact, Aurore is the place for you. Explore our open positions and take the next step in your career!",
    iconPath: null,
  },
];

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
