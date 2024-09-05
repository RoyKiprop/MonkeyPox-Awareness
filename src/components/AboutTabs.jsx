import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabsData = [
  {
    label: "Overview",
    value: "one",
    content: `
        Monkeypox is a viral zoonotic disease caused by the monkeypox virus, a member of the Orthopoxvirus genus.
        It is transmitted from animals to humans and can also spread through close contact with an infected person.
        The virus causes a disease similar to smallpox but is less severe, with symptoms like fever, rash, and swollen lymph nodes.
        Monkeypox was first discovered in 1958, and while it primarily occurs in central and western African countries, 
        outbreaks in other regions have become more frequent in recent years. Symptoms usually last 2 to 4 weeks, and 
        the disease often resolves on its own without the need for specific treatment.
      `,
  },
  {
    label: "Treatment",
    value: "two",
    content: `
        Treatment for monkeypox is mainly supportive, focusing on relieving symptoms and preventing complications.
        Common approaches include pain management, hydration, and rest. Antiviral medications like Tecovirimat (TPOXX)
        and Cidofovir may be used in severe cases or for high-risk patients. Vaccination with smallpox vaccines like 
        Jynneos can help prevent infection, especially if given soon after exposure. Maintaining isolation and 
        careful skin care to prevent secondary infections are also key aspects of treatment.
      `,
  },
];

function AboutTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const contentVariants = {
    initial: { borderRadius: "50%", opacity: 0 },
    animate: { borderRadius: "0%", opacity: 1 },
    exit: { borderRadius: "50%", opacity: 0 },
  };
  
  

  return (
    <div className="flex flex-col w-full lg:w-2/5">
      <div className="flex bg-[#f2fbfa]">
        {tabsData.map((item, index) => (
          <button
            className={`${
              index === activeTab &&
              "border-b-4 text-[#29c8b3] border-[#29c8b3]"
            }  py-4 w-1/2 font-semibold text-xl text-[#59547d]`}
            key={item.label}
            onClick={() => setActiveTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="text-[#59547d] text-md font-normal"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {tabsData[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutTabs;
