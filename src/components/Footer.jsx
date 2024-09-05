import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#59547d] text-white px-20 py-8">
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
          <h3 className="text-xl font-bold mb-4 text-center md:text-left">
            Sections
          </h3>
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/symptoms">
                Symptoms
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/prevention">
                Prevention
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/chatbot">
                Chatbot
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-[#25c0b0]" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

      
        <div className="w-full md:w-1/3 mt-3">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="text-sm leading-relaxed">
            <span className="font-bold text-xl text-[#25c0b0]">Monkeypox </span>is a viral zoonotic disease caused by the monkeypox virus,
            a member of the Orthopoxvirus genus. It was first discovered in
            1958, and while it primarily occurs in central and western African
            countries, outbreaks in other regions have become more frequent in
            recent years. 
          </p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-400 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Monkeypox Info. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
