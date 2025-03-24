import photo from "../assets/photo.png";
import { IoMdDownload } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";

const BannerCard = () => {
  return (
    <div className="card md:w-96  shadow-lg border border-[#11f7d5] !px-4 md:p-8">
      <div className="avatar justify-center">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src={photo} />
        </div>
      </div>
      <div className="card-body items-center text-center px-0 md:p-4 space-y-2">
        <h2 className="card-title text-xl md:text-2xl mb-0">Sumaiya Afrin</h2>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Web Designer",
            1000,
            "Tech Enthusiast",
            1000,
          ]}
          repeat={Infinity}
          className=" md:!text-lg"
        />

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
        <div className="text-wrap space-y-2">
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#11f7d5] text-xl" />
            <p className="">af.sumaiyaa@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 capitalize">
            <FaLocationDot className="text-[#11f7d5] text-xl" />
            <p className="text-left">dhaka, bangladesh</p>
          </div>
        </div>

        <div className="space-x-2">
          <div className="badge bg-[#11f7d5] border-0">JavaScript</div>
          <div className="badge bg-[#11f7d5] border-0">TailwindCSS</div>
          <div className="badge bg-[#11f7d5] border-0">React</div>
        </div>
        <div className="card-actions">
          <button className="btn bg-transparent border border-[#11f7d5] text-[#11f7d5] text-left">
            Download Resume <IoMdDownload className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
