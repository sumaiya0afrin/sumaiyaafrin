import { BsCode, BsCodeSlash } from "react-icons/bs";
import bg from "../assets/banner.png";
import { FaAnglesDown } from "react-icons/fa6";
import ReactCurvedText from "react-curved-text";
import { motion } from "motion/react";

import BannerCard from "./BannerCard";
import { FaRegEnvelopeOpen, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiShapesLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbFileCertificate } from "react-icons/tb";

const Banner = () => {
  return (
    <div>
      <div
        className="py-24 md:py-36 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="hero max-w-6xl mx-auto lg:justify-start px-6">
            <div className="hero-content flex-col lg:flex-row justify-between gap-12 p-0">
              <BannerCard />
              <div className="justify-items-start space-y-4 lg:space-y-6 px-4 md:px-0">
                <BsCode className="text-[#11f7d5] text-2xl font-bold" />
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-left">
                  I&apos;m <span className="text-[#11f7d5]">Sumaiya</span>,
                  <br />
                  FrontEnd Developer
                </h1>
                <p className="md:text-lg text-left md:w-xl ">
                  Let&apos;s Introduce Something Incredible and Creative.
                  Turning ideas into reality through code.
                </p>
                <BsCodeSlash className="text-[#11f7d5] text-2xl font-bold" />
                <div className="relative flex items-center justify-center md:size-32 rounded-full border cursor-pointer ">
                  <ReactCurvedText
                    width={120} // Reduced size for better fit
                    height={120}
                    cx={60} // Center of the circle
                    cy={70}
                    rx={45} // Radius for the curve
                    ry={50}
                    startOffset={40} // Adjusted to balance the text alignment
                    reversed={true}
                    text="My Projects"
                    textProps={{
                      style: {
                        fontSize: 14,
                        fill: "#11f7d5",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  <motion.span
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 text-2xl"
                  >
                    <FaAnglesDown className=" text-2xl" />
                  </motion.span>
                </div>
              </div>

              {/* menu can be placed here  */}
              <ul className="menu  rounded-box border border-[#11f7d5] text-xl space-y-3 absolute bg-[#071e1f] hidden lg:block">
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="Home"
                  >
                    <AiOutlineHome />
                  </a>
                </li>
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="About"
                  >
                    <FaRegUser />
                  </a>
                </li>
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="Skills"
                  >
                    <RiShapesLine />
                  </a>
                </li>
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="Expertise"
                  >
                    <TbFileCertificate />
                  </a>
                </li>
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="Portfolio"
                  >
                    <IoBriefcaseOutline />
                  </a>
                </li>
                <li>
                  <a
                    className="tooltip tooltip-left hover:text-[#11f7d5]"
                    data-tip="Contact"
                  >
                    <FaRegEnvelopeOpen />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
