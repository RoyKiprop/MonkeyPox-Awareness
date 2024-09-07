import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { PiChatCircleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const routes = [
  {
    title: "HOME",
    href: "#",
    Icon: IoHome,
  },
  {
    title: "SYMPTOMS",
    href: "#",
  },
  {
    title: "PREVENTION",
    href: "#",
  },
  {
    title: "ABOUT",
    href: "#",
    Icon: PiChatCircleBold,
  },
  {
    title: "CHATBOT",
    href: "#",
    Icon: TbMessageChatbotFilled,
  },
];

function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const divRef = useRef(null);

  useClickAway(divRef, () => setOpen(false));

  return (
    <div className="lg:hidden" ref={divRef}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[5rem] p-4 pt-0 bg-white "
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-[#29c8b3] text-white font-bold"
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between w-full p-5 rounded-xl bg-[#29c8b3]"
                      to={route.href}
                    >
                      <span className="flex gap-1 text-md">{route.title}</span>
                      {Icon && <Icon className="text-xl" />}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
