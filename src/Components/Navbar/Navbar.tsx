import Logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">

        
        <button className="text-gray-500 text-xl md:hidden">
          ☰
        </button>

     
        <img
          src={Logo}
          alt="DevStack"
          className="w-20 md:w-auto"
        />

        <ul className="hidden md:flex gap-6 items-center font-semibold text-sm">
          <li className="cursor-pointer hover:text-[#DB2777]">Home</li>
          <li className="cursor-pointer hover:text-[#DB2777]">
            Technologies
          </li>
          <li className="cursor-pointer hover:text-[#DB2777]">
            Projects
          </li>
          <li className="cursor-pointer hover:text-[#DB2777]">
            About
          </li>
          <li className="cursor-pointer hover:text-[#DB2777]">
            Contact
          </li>
        </ul>

       
        <div className="flex gap-2 items-center text-[10px] md:text-sm font-semibold">
          <button>Sign In</button>

          <button className="rounded-full bg-[#D91B7E] text-white py-1.5 px-3 md:py-2 md:px-4">
            Sign Up
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200" />
    </nav>
  );
};

export default Navbar;