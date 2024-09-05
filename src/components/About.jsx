import AboutTabs from "./AboutTabs";

import virus from "../assets/virus.jpg";
import Stats from "./Stats";

function About() {
  return (
    <section className="px-20 bg-gray-50 p-16">
      <div className="flex flex-col items-center mb-10 space-y-6 lg:space-y-8 ">
        <div className="flex justify-center w-full">
          <div className="p-1 rounded-xl bg-[#2dc6b3] w-[15%]">
            <h5 className="text-white text-center text-md">About mPox Virus</h5>
          </div>
        </div>

        <h1 className="text-2xl lg:text-4xl font-semibold mx-auto w-full lg:w-[60%] text-center text-[#59547d]">
          Monkeypox Virus Disease Outbreak Situation across the World
        </h1>
      </div>
      <div>
        <div className="flex space-x-10 mt-8 lg:mt-0">
          <div className="w-full lg:w-3/5 ">
            <img
              src={virus}
              className="block w-full  h-auto max-h-[50vh] md:max-h-[75vh] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              alt="Infected body illustration"
            />
          </div>
          <AboutTabs />
        </div>
      </div>
      <div className="mt-16">
        <Stats/>
      </div>
    </section>
  );
}

export default About;
