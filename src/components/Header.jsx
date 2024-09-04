import Logo from "./Logo"
import Navbar from "./Navbar"


function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-lg p-6 my-5 mx-20 text-[#575379]">
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Header
