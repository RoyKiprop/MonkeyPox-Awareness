import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#59547d] text-white px-8 lg:px-20 py-12">
      <div className="container mx-auto flex flex-wrap justify-between  gap-8">
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <Logo />
          <div className="flex space-x-4 mt-10">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-black hover:bg-[#25c0b0] hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-black hover:bg-[#25c0b0] hover:text-white transition-colors"
            >
              <BsTwitterX size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-black hover:bg-[#25c0b0] hover:text-white transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-black hover:bg-[#25c0b0] hover:text-white transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto mt-3">
          <h3 className="text-xl font-bold mb-4 text-left">Sections</h3>
          <div>
            <ul className="flex flex-wrap gap-x-4 gap-y-4 md:flex-col ">
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/about">
                  About
                </NavLink>
              </li>
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/symptoms">
                  Symptoms
                </NavLink>
              </li>
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/prevention">
                  Prevention
                </NavLink>
              </li>
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/chatbot">
                  Chatbot
                </NavLink>
              </li>
              <li className="flex-1 min-w-[120px]">
                <NavLink className="hover:text-[#25c0b0]" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-3">
          <h3 className="text-xl font-bold mb-2">About</h3>
          <p className="text-sm leading-relaxed">
            <span className="font-bold text-xl text-[#25c0b0]">Monkeypox </span>
            is a viral zoonotic disease caused by the monkeypox virus, a member
            of the Orthopoxvirus genus. It was first discovered in 1958, and
            while it primarily occurs in central and western African countries,
            outbreaks in other regions have become more frequent in recent
            years.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-400 pt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Monkeypox Info. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
