import HandwashSteps from "./HandWashSteps";
import SectionTag from "./SectionTag";

function WashHands() {
  return (
    <section className="bg-[#59547d] px-8 lg:px-20 py-16 mb-10">
      <div className="space-y-10">
        <div className="flex flex-col items-center space-y-5 ">
        <div className="flex justify-center"><SectionTag>Wash Your Hands</SectionTag></div>
          <h1 className="text-white text-2xl mx-auto w-full text-center md:text-4xl font-bold">How to wash your hands properly</h1>
        </div>
        <div>
            <HandwashSteps/>
        </div>
      </div>
    </section>
  );
}

export default WashHands;
