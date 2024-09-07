import applysoap from "../assets/applysoap.png";
import rubBack from "../assets/rubBack.png";
import rubHands from "../assets/rubHands.png";
import rubThumb from "../assets/rubThumb.png";
import rubTips from "../assets/rubTips.png";
import oneHand from "../assets/oneHand.png";

function HandwashSteps() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Apply soap',
      description: 'and rub your hands together',
      imgSrc: applysoap, 
    },
    {
      stepNumber: 2,
      title: 'Rub your hands',
      description: 'together and clean between your fingers',
      imgSrc: rubHands,
    },
    {
      stepNumber: 3,
      title: 'Use one hand',
      description: 'to rub the back of the other hand and vice versa',
      imgSrc: oneHand,
    },
    {
      stepNumber: 4,
      title: 'Rub the back',
      description: 'of your fingers against your palms',
      imgSrc: rubBack,
    },
    {
      stepNumber: 5,
      title: 'Rub your thumb',
      description: 'using your other hand and vice versa',
      imgSrc: rubThumb,
    },
    {
      stepNumber: 6,
      title: 'Rub your tips',
      description: 'of your fingers on the palm of your other hand',
      imgSrc: rubTips,
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-10   ">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center  ">
          <div className="relative bg-[#413b67] p-4 rounded-full">
            <img
              src={step.imgSrc}
              alt={`Step ${step.stepNumber}`}
              className="w-28 h-28 object-cover"
            />
            <div className="bg-[#2bc2af] text-white w-8 h-8 rounded-full flex items-center justify-center absolute top-0 left-0">
              {step.stepNumber}
            </div>
          </div>
          <h3 className="text-white font-bold mt-4">{step.title}</h3>
          <p className="text-white opacity-75">{step.description}</p>

        </div>
      ))}
    </div>
  );
};

export default HandwashSteps;
