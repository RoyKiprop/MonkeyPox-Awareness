import symptoms from "../assets/symptoms.png";
import SectionTag from "./SectionTag";

function Symptoms() {
  return (
    <section className="px-20 py-16 bg-gray-100">
      <div className="flex space-x-10">
        <div className="w-1/2 space-y-8">
          <SectionTag>mPox Symptoms</SectionTag>
          <h1 className="text-5xl text-[#59547d] font-bold">
            What Are The Main Symptoms?
          </h1>
          <p className="text-[#59547d] text-md w-[90%] ">
            Monkeypox affects individuals differently depending on their health
            and exposure. It is a viral zoonotic disease that typically causes
            mild to moderate symptoms, including fever, swollen lymph nodes, and
            a distinctive rash. Most people recover within 2 to 4 weeks without
            requiring specific treatment. However, individuals with weakened
            immune systems, children, pregnant women, and those with
            pre-existing skin conditions are at a higher risk of severe illness.
            Though less contagious and deadly than smallpox, monkeypox can still
            result in complications like secondary infections, respiratory
            distress, or in rare cases, death.
          </p>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden ">
          <img
            src={symptoms}
            className="block w-full  h-auto max-h-[50vh] md:max-h-[90vh] object-cover rounded-lg "
            alt="Infected body illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Symptoms;
