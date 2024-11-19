const Section = ({ title, description, buttonText }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 my-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
        {buttonText}
      </button>
    </div>
  );
};

export default Section;