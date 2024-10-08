import AboutTabs from "./AboutTabs";
import virus from "../assets/virus.jpg";
import Stats from "./Stats";
import SectionTag from "./SectionTag";

function About() {
  return (
    <section className="px-8 md:px-16 lg:px-20 py-12 bg-gray-50">
  
      <div className="flex flex-col items-center mb-10 space-y-6 lg:space-y-8">
        <div className="flex justify-center">
          <SectionTag>About mPox</SectionTag>
        </div>
        <h1 className="text-md md:text-3xl lg:text-4xl font-semibold w-full lg:w-[60%] text-center text-[#59547d]">
          Monkeypox Virus Disease Outbreak Situation across the World
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 mt-8">
        <div className="w-full lg:w-3/5">
          <img
            src={virus}
            className="block w-full h-auto max-h-[50vh] md:max-h-[75vh] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            alt="Infected body illustration"
          />
        </div>
        <AboutTabs />
      </div>

     
      <div className="mt-8 md:mt-12 lg:mt-16">
        <Stats />
      </div>
    </section>
  );
}

export default About;
