import { AiOutlineHome } from "react-icons/ai";
import { FaRegEnvelopeOpen, FaRegUser } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RiShapesLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import img from "../assets/skill.png";
import { useEffect, useState } from "react";
import { TbFileCertificate } from "react-icons/tb";
import { Link } from "react-scroll";
import { useLocation, Link as RouterLink } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.includes("/details");

  const [navColor, setnavColor] = useState("transparent");
  const [navPadding, setnavPadding] = useState("md:py-6");
  const [logoSize, setLogoSize] = useState("lg:text-6xl");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#071e1f") : setnavColor("transparent");
    window.scrollY > 10 ? setnavPadding("md:py-2.5") : setnavPadding("md:py-6");
    window.scrollY > 10
      ? setLogoSize("lg:text-5xl")
      : setLogoSize("lg:text-6xl");
  };
  const backgroundColor = isDetailsPage ? "#071e1f" : navColor;
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full py-2.5 shadow-lg ${navPadding}`}
      style={{
        backgroundColor: backgroundColor,
        transition: "all 1s",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="navbar justify-between    text-white p-0">
          <div>
            <RouterLink
              to="/"
              className={`text-4xl md:text-5xl font-bold flex items-center ${logoSize} transition-all duration-500`}
            >
              <MdArrowBackIos className="text-[#11f7d5] font-bold" />
              SA <MdArrowForwardIos className="text-[#11f7d5] font-bold" />
            </RouterLink>
          </div>

          <div className="flex-none">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn bg-transparent !border-[#11f7d5]"
                >
                  <RxHamburgerMenu className="text-[#11f7d5] md:text-xl" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul
                  className="menu bg-base-200 min-h-full md:w-80 p-4 text-lg md:text-xl text-white space-y-2"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* Sidebar content here */}
                  <li>
                    <Link
                      to="home"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <AiOutlineHome /> Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <FaRegUser /> About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <RiShapesLine /> Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="expertise"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <TbFileCertificate /> Expertise
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <IoBriefcaseOutline /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={1000}
                      className="hover:text-[#11f7d5]"
                    >
                      <FaRegEnvelopeOpen /> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <header className="max-w-6xl mx-auto">
    //   <div
    //     className="navbar  justify-between fixed z-10 max-w-6xl text-white py-8 px-6"
    //     style={{
    //       backgroundColor: navColor,
    //       height: navSize,
    //       transition: "all 1s",
    //       borderRadius: "20px",
    //       marginTop: navMargin,
    //     }}
    //   >
    //     <div>
    //       <a className="text-4xl md:text-6xl flex items-center">
    //         <MdArrowBackIos className="text-[#11f7d5] font-bold" />
    //         SA <MdArrowForwardIos className="text-[#11f7d5] font-bold" />
    //       </a>
    //     </div>
    //     <div className="flex-none">
    //       <div className="drawer drawer-end">
    //         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    //         <div className="drawer-content">
    //           {/* Page content here */}
    //           <label
    //             htmlFor="my-drawer-4"
    //             className="drawer-button btn bg-transparent"
    //           >
    //             <RxHamburgerMenu className="text-white md:text-xl" />
    //           </label>
    //         </div>
    //         <div className="drawer-side">
    //           <label
    //             htmlFor="my-drawer-4"
    //             aria-label="close sidebar"
    //             className="drawer-overlay"
    //           ></label>
    //           <ul
    //             className="menu bg-base-200 min-h-full md:w-80 p-4 text-lg md:text-xl text-white space-y-2"
    //             style={{
    //               backgroundImage: `url(${img})`,
    //               backgroundPosition: "center",
    //               backgroundRepeat: "no-repeat",
    //               backgroundSize: "cover",
    //             }}
    //           >
    //             {/* Sidebar content here */}
    //             <li>
    //               <a className="hover:text-[#11f7d5]">
    //                 <AiOutlineHome /> Home
    //               </a>
    //             </li>
    //             <li>
    //               <a className="hover:text-[#11f7d5]">
    //                 <FaRegUser /> About
    //               </a>
    //             </li>
    //             <li>
    //               <a className="hover:text-[#11f7d5]">
    //                 <RiShapesLine /> Skills
    //               </a>
    //             </li>
    //             <li>
    //               <a className="hover:text-[#11f7d5]">
    //                 <IoBriefcaseOutline /> Portfolio
    //               </a>
    //             </li>
    //             <li>
    //               <a className="hover:text-[#11f7d5]">
    //                 <FaRegEnvelopeOpen /> Contact
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
