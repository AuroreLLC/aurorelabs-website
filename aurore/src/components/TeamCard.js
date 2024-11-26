const TeamCard = ({ Key, Name, Role, Img, LinkedIn }) => (
  <div className="text-center">
    <a href={LinkedIn}>
      <img
        className="rounded-xl sm:size-40 lg:size-50 mx-auto"
        src={Img}
        alt="Avatar"
      />
    </a>
    <div className="mt-2 sm:mt-4">
      <h3 className="text-sm font-medium font-bold text-[#7CADF5]  sm:text-base lg:text-lg ">
        {Name}
      </h3>
      <p className="text-xs text-white sm:text-sm lg:text-base">{Role}</p>
    </div>
  </div>
);
export default TeamCard;
