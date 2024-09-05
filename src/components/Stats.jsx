import image from "../assets/image.png";
import death from "../assets/death.png";
import active from "../assets/active.png";
function Stats() {
  return (
    <div className=" px-20 rounded-2xl">
      <div className=" flex items-center justify-between py-4  bg-[#29c8b3] rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-2  w-full border-r-2 border-white ">
          <img
            src={active}
            alt="Active Cases Icon"
            className="w-16 h-16 "
          />
          <h2 className="text-4xl font-bold text-white">200</h2>
          <p className="text-white">Active Cases</p>
        </div>
        <div className="flex flex-col items-center space-y-2 w-full border-r-2 border-white">
          <img
            src={image}
            alt="Active Cases Icon"
            className="w-16 h-16"
          />
          <h2 className="text-4xl font-bold text-white">200</h2>
          <p className="text-white">Recovered Cases</p>
        </div>
        <div className="flex flex-col items-center space-y-2 w-full ">
          <img
            src={death}
            alt="Active Cases Icon"
            className="w-16 h-16"
          />
          <h2 className="text-4xl font-bold text-white">200</h2>
          <p className="text-white">Death Cases</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
