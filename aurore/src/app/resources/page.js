import { cards, subtitles } from "@/content/resources";
import BlogCards from "@/components/BlogCards";
import styles from "@/styles/Resources.module.css";

const resources = () => (
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className={`${styles.subtitle} md:text-4xl md:leading-tight`}>
        {subtitles.subtitle}
      </h2>
      <h2 className={`${styles.subtitle} md:text-4xl md:leading-tight`}>
        {subtitles.secondSubtitle}
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <BlogCards
          key={card.key}
          Subtitle={card.subtitle}
          Description={card.description}
          Img={card.img}
          ButtonRef={card.buttonRef}
          Styles={styles}
        />
      ))}
    </div>
  </div>
);

export default resources;
