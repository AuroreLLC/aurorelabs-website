const LandingCard = ({ boldText, text, img }) => (
  <div className="flex-col">
    <div className="w-full">
      <img src={img} className="w-auto h-[22rem]" alt="image" />
    </div>
    <div>
      <p className=" inline font-bold text-[#003865] text-base">{boldText}</p>
      <p className="inline text-[#003865] text-base"> {text}</p>
    </div>
  </div>
);
export default LandingCard;
