import Logo from "./Logo"
import Navbar from "./Navbar"


function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white rounded-lg px-8 lg:px-20  py-4 text-[#575379]">
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Header
