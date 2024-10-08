import prevention from "../assets/prevention.png";
import SectionTag from "./SectionTag";

const mpoxPrevention = [
  {
    title: "Avoid Close Contact",
    description:
      "Refrain from physical contact with people showing symptoms or infected animals.",
  },
  {
    title: "Isolate Infected Individuals",
    description:
      "Ensure those infected are isolated to prevent further spread.",
  },
  {
    title: "Use Protective Equipment",
    description:
      "Healthcare workers and caregivers should use gloves, masks, and gowns when caring for infected individuals.",
  },
  {
    title: "Maintain Hand Hygiene",
    description:
      "Wash hands frequently with soap and water or use hand sanitizer, especially after contact with infected individuals, animals, or contaminated surfaces.",
  },
  {
    title: "Disinfect Surfaces",
    description:
      "Regularly clean surfaces and objects that may be contaminated.",
  },
  {
    title: "Vaccination",
    description:
      "Get vaccinated if you are at high risk or in an area with an outbreak.",
  },
];

function Prevention() {
  return (
    <section className="px-8 md:px-16 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0">
        <div className=" w-full lg:w-1/2 space-y-4">
          <div className="space-y-6 xl:space-y-8">
            <SectionTag>mPox Prevention</SectionTag>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-[#59547d] font-bold">
              Methods of Preventing mPox virus
            </h1>
            <p className="text-[#59547d] text-sm sm:text-md lg:text-lg w-full lg:w-[90%]">
              Preventing the spread of monkeypox involves taking several
              precautions, especially in areas where the virus is present or
              during outbreaks. Since mPox spreads through close contact with
              infected individuals, animals, or contaminated materials,
              minimizing exposure is key. Vaccination is available for those at
              higher risk. Good hygiene practices, proper protective equipment,
              and avoiding contact with infected individuals or animals can
              significantly reduce the risk of transmission..
            </p>
          </div>
          <h4 className="text-xl text-[#59547d] font-medium">Key Prevention Measures:</h4>
          {mpoxPrevention.map((method) => (
          <li className="text-sm text-[#59547d] " key={method.title}>{method.title}</li>
        ))}
        </div>
       

        <div className="w-full lg:w-1/2 overflow-hidden  ">
          <img
            src={prevention}
            className="block w-full  h-auto max-h-[60vh] lg:max-h-[90vh] object-cover rounded-lg "
            alt="Infected body illustration"
          />
        </div>
      </div>
      
    </section>
  );
}

export default Prevention;
