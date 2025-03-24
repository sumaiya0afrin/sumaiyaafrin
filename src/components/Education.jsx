import SectionTitle from "./SectionTitle";
import book from "../assets/book.gif";
import { useState } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaSchool,
  FaTools,
} from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { PiCertificateFill, PiShapesFill } from "react-icons/pi";
import { BiCodeCurly } from "react-icons/bi";
import { MdAnimation } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section className="pb-[60px] md:pb-[75px] lg:pb-[100px]">
      <div className="px-6">
        <SectionTitle title="my expertise" image={book} />
      </div>

      <div className="lg:flex gap-4 p-8 bg-gradient-to-br from-black to-[#11f7d5] space-y-4 lg:space-y-0 min-h-screen">
        {/* Sidebar */}
        <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                activeTab === "education"
                  ? "bg-[#071e1f] text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("education")}
            >
              <FaGraduationCap /> My Education
            </li>
            <li
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                activeTab === "awards"
                  ? "bg-[#071e1f] text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("awards")}
            >
              <PiCertificateFill /> Certifications
            </li>
            <li
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                activeTab === "skills"
                  ? "bg-[#071e1f] text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              <FaLaptopCode /> Computer Skill
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
          {activeTab === "education" && (
            <div>
              {/* High School */}
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <FaGraduationCap className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Southeast University
                    </h3>
                    <p>B.Sc. in CSE | 2020 (Feb) - 2024 (Nov)</p>
                    <p className="text-left text-sm">
                      The most exciting phase—my journey at{" "}
                      <b>Southeast University</b>, where I pursued a{" "}
                      <b>
                        Bachelor of Science in Computer Science & Engineering
                        (BSc in CSE)
                      </b>
                      . University life was a rollercoaster of learning,
                      projects. Research on{" "}
                      <i>
                        &quot;Identifying Abusive Bangla Text on Feminism Using
                        Machine Learning&quot;
                      </i>
                      . Exploring how artificial intelligence could analyze
                      social media conversations and detect abusive content was
                      both fascinating and impactful. It fueled my passion for
                      data science, natural language processing.
                    </p>
                  </div>
                </div>
              </div>

              {/* College & University */}
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <FaSchoolFlag className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Mohammadpur Model School & College
                    </h3>
                    <p>Higher Secondary Certificate</p>
                    <p className="text-sm">
                      Higher secondary was an exciting new chapter at{" "}
                      <b>Mohammadpur Model School & College</b>, where I
                      completed my <b>Higher Secondary Certificate (HSC)</b>.
                      The transition to advanced studies was both challenging
                      and rewarding, as I developed a deeper appreciation for
                      technology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <FaSchool className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Kishalaya Girls&apos; High School
                    </h3>
                    <p>Secondary School Certificate</p>
                    <p className="text-sm">
                      It all started at <b>Kishalaya Girls&apos; High School</b>
                      , where I took my first steps into the world of learning.
                      From acing my <b>Primary School Certificate (PSC)</b> to
                      tackling the
                      <b> Junior School Certificate (JSC)</b>, those early years
                      were filled with excitement, friendships, and a growing
                      fascination. I pursued my{" "}
                      <b>Secondary School Certificate (SSC)</b>, diving deeper
                      into mathematics and science. It was here that I first
                      realized how much I enjoyed logical thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "awards" && (
            <div className="mb-6">
              <div className="flex items-start gap-2">
                <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                  <LiaCertificateSolid className="text-[#11f7d5]" />
                </span>
                <div className="justify-items-start text-left">
                  <h3 className="text-lg font-semibold">
                    Complete Web Development
                  </h3>

                  <p className="text-left text-sm">
                    I have successfully completed the Complete Web Development
                    Course from Programming Hero, earning the Certificate of
                    Completion with Excellence. This journey has been incredibly
                    rewarding, providing me with a comprehensive understanding
                    of web development technologies.
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "skills" && (
            <div>
              {/* High School */}
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <BiCodeCurly className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Programming & Development
                    </h3>

                    <ul className="list-disc ml-4">
                      <li>C, Python (basic), PHP (basic)</li>
                      <li>JavaScript, ES6, HTML5, CSS3, Tailwind CSS</li>
                      <li>React.js, Node.js</li>
                      <li>
                        WordPress & WordPress Theme Customization (familiar)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <MdAnimation className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Animation & UI Enhancements
                    </h3>

                    <ul className="list-disc text-left ml-4">
                      <li>Framer Motion (React animations)</li>
                      <li>AOS (Animate On Scroll)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* College & University */}
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <FaTools className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">
                      Development Tools & Platforms
                    </h3>

                    <ul className="list-disc text-left ml-4">
                      <li>Git & GitHub</li>
                      <li>Code Blocks, VS Code, Jupyter Notebook, Figma</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="bg-[#071e1f]  text-white p-2 rounded-full">
                    <PiShapesFill className="text-[#11f7d5]" />
                  </span>
                  <div className="justify-items-start text-left">
                    <h3 className="text-lg font-semibold">Other Skills</h3>

                    <ul className="list-disc text-left ml-4">
                      <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                      <li>Database Knowledge (MongoDB, MySQL)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
