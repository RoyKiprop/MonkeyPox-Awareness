import image from "../assets/image.png";
import death from "../assets/death.png";
import active from "../assets/active.png";

function Stats() {
  return (
    <div className="px-8 md:px-16 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 bg-[#29c8b3] rounded-2xl space-y-6 md:space-y-0 md:space-x-6">
        
     
        <div className="flex flex-col items-center justify-center space-y-2 w-full md:w-1/3 border-b-2 pb-5 md:pb-0 md:border-b-0 md:border-r-2 border-white">
          <img src={active} alt="Active Cases Icon" className="w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">200</h2>
          <p className="text-white text-sm md:text-base">Active Cases</p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2 w-full md:w-1/3 border-b-2 pb-5 md:pb-0 md:border-b-0 md:border-r-2 border-white">
          <img src={image} alt="Recovered Cases Icon" className="w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">200</h2>
          <p className="text-white text-sm md:text-base">Recovered Cases</p>
        </div>
        
      
        <div className="flex flex-col items-center justify-center space-y-2 w-full md:w-1/3">
          <img src={death} alt="Death Cases Icon" className="w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">200</h2>
          <p className="text-white text-sm md:text-base">Death Cases</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

