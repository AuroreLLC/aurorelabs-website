const SectionWithIcon = ({
  Key,
  Subtitle,
  Description,
  IconPath,
  Styles,
  imageFirst,
}) => (
  <div
    className={`grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center`}
  >
    {imageFirst ? (
      <>
        <div className="relative ms-2 flex justify-center">
          <img
            className="max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] object-contain"
            src={IconPath}
            alt="Icon"
          />
        </div>
        <div>
          <h2 className={Styles.subtitle}>{Subtitle}</h2>
          <p className={Styles.description}>{Description}</p>
        </div>
      </>
    ) : (
      <>
        <div>
          <h2 className={Styles.subtitle}>{Subtitle}</h2>
          <p className={Styles.description}>{Description}</p>
        </div>
        <div className="relative ms-2 flex justify-center">
          <img
            className="max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] object-contain"
            src={IconPath}
            alt=""
          />
        </div>
      </>
    )}
  </div>
);
export default SectionWithIcon;
