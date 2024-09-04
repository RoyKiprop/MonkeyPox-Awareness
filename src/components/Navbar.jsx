import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-sm  font-semibold ">
      <ul className="flex justify-center space-x-10">
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="home">HOME</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="services">ABOUT</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="team">SYMPTOMS</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="career">PREVENTION</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="sos">CHATBOT</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#25c0b0]" to="sos">BLOG</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
