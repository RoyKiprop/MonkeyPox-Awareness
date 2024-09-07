import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden lg:block text-sm  font-semibold ">
      <ul className="flex justify-center space-x-10">
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="home">HOME</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="symptoms">SYMPTOMS</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="prevention">PREVENTION</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="chatbot">CHATBOT</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="blog">BLOG</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
