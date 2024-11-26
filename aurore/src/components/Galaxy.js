const Galaxy = () => (
  <div className="relative w-[500px] h-[500px] mx-auto">
    <div className="absolute w-full h-full rounded-full border-dashed border-2 border-white"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="/Images/Branding/Logo.png"
        alt="Aurous"
        className="w-48 h-48 rounded-full bg-gray-300 object-contain"
      />
    </div>

    <div className="absolute top-2 left-[40%]">
      <img
        src="/Images/Pages/Partners/huloop_automation_logo.svg.png"
        alt="HuLoop"
        className="w-32 h-32 object-contain"
      />
    </div>
    <div className="absolute top-[40%] right-2">
      <img
        src="/Images/Pages/Partners/IL.png"
        alt="Innovin Labs"
        className="w-32 h-32 object-contain"
      />
    </div>
    <div className="absolute bottom-2 right-[40%]">
      <img
        src="/Images/Pages/Partners/AutoIt.png"
        alt="AutoIt"
        className="w-32 h-32 object-contain"
      />
    </div>
    <div className="absolute bottom-[40%] left-2">
      <img
        src="/Images/Pages/Partners/behamics.png"
        alt="Behamics"
        className="w-32 h-32 object-contain"
      />
    </div>
    <div className="absolute bottom-[20%] left-[15%]">
      <img
        src="/Images/Pages/Partners/BigCommerce.png"
        alt="BigCommerce"
        className="w-32 h-32 object-contain"
      />
    </div>
  </div>
);
export default Galaxy;
