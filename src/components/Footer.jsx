import bg from "../assets/banner.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <div
      className=" text-white flex flex-col items-center space-y-4 py-12"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img src={logo} alt="" className="w-44" /> */}
      <div className="grid grid-cols-3 gap-4">
        <a
          href="https://www.linkedin.com/in/sumaiya0afrin/"
          target="_blank"
          className="relative flex items-center justify-center border border-[#11f7d5] 
                         rounded-full w-10 h-10 overflow-hidden text-[#11f7d5] 
                         transition-all duration-300 hover:text-black
                         before:absolute before:inset-0 before:bg-[#11f7d5] before:rounded-full
                         before:scale-0 before:opacity-0 before:transition-transform before:duration-300 
                         hover:before:scale-100 hover:before:opacity-100"
        >
          <FaLinkedinIn className="text-xl relative " />
        </a>

        <a
          href="https://github.com/sumaiya0afrin"
          target="_blank"
          className="relative flex items-center justify-center border border-[#11f7d5] 
                         rounded-full w-10 h-10 overflow-hidden text-[#11f7d5] 
                         transition-all duration-300 hover:text-black
                         before:absolute before:inset-0 before:bg-[#11f7d5] before:rounded-full
                         before:scale-0 before:opacity-0 before:transition-transform before:duration-300 
                         hover:before:scale-100 hover:before:opacity-100"
        >
          <LuGithub className="text-xl relative " />
        </a>
        <a
          href="http://"
          target="_blank"
          className="relative flex items-center justify-center border border-[#11f7d5] 
                         rounded-full w-10 h-10 overflow-hidden text-[#11f7d5] 
                         transition-all duration-300 hover:text-black
                         before:absolute before:inset-0 before:bg-[#11f7d5] before:rounded-full
                         before:scale-0 before:opacity-0 before:transition-transform before:duration-300 
                         hover:before:scale-100 hover:before:opacity-100"
        >
          {" "}
          <FaFacebookF className="text-xl relative " />
        </a>
      </div>
      <p className="openSans font-normal md:text-lg text-center">
        Copyright by{" "}
        <a href="http://" className="text-[#11f7d5] hover:text-white">
          SumaiyaAfrin
        </a>{" "}
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
