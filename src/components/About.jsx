import { FaFlag, FaGraduationCap } from "react-icons/fa";

import code from "../assets/code.gif";
import SectionTitle from "./SectionTitle";
import { LuLanguages } from "react-icons/lu";
import { MdInterests } from "react-icons/md";
import { TiArrowForward } from "react-icons/ti";

const About = () => {
  return (
    <section className="text-black">
      <div className=" px-6">
        {/* Right Side - Content */}
        <div className="text-left ">
          <SectionTitle title="about me" image={code} />
          <p className="md:text-lg leading-relaxed mb-2">
            Assalamualikum! I&apos;m a passionate programmer who truly believes
            that coding has the power to change the world. My journey into
            programming began with the simple curiosity of how things work
            behind the scenes, and it quickly grew into a mission to make a
            difference through modern web systems.
          </p>

          {/* Skills */}
          <div>
            <ul className="space-y-3 grid md:grid-cols-2 lg:grid-cols-3">
              <li className="capitalize flex items-center gap-2">
                <span
                  className=" flex items-center justify-center border border-[#11f7d5] 
                    rounded-full w-10 h-10 overflow-hidden text-[#071e1f] 
                    "
                >
                  <FaFlag />
                </span>{" "}
                Nationality: Bangladeshi
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="flex items-center justify-center border border-[#11f7d5] 
                    rounded-full w-10 h-10 overflow-hidden text-[#071e1f] "
                >
                  <FaGraduationCap />
                </span>{" "}
                Degree: BSc in CSE
              </li>
              <li className="capitalize flex items-center gap-2">
                <span
                  className="flex items-center justify-center border border-[#11f7d5] 
                    rounded-full w-10 h-10 overflow-hidden text-[#071e1f]"
                >
                  <LuLanguages />
                </span>
                Languages: Bangla, English, Hindi, Urdu
              </li>
              <li className="capitalize flex items-center gap-2">
                <span
                  className="flex items-center justify-center border border-[#11f7d5] 
                    rounded-full w-10 h-10 overflow-hidden text-[#071e1f]"
                >
                  <MdInterests />
                </span>
                Interested: crafting, coding
              </li>
            </ul>
          </div>

          <div className="mt-4 lg:mt-6">
            <button className="btn bg-transparent border border-[#071e1f] text-[#071e1f] text-left shadow-xl">
              Send Message <TiArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
