import { BsCode, BsCodeSlash } from "react-icons/bs";
const Myself = () => {
  return (
    <div className="bg-[#071e1f]">
      <div className=" text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-left z-10">
          <BsCode className="text-[#11f7d5] text-2xl font-bold" />
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
            Some Like of Me
          </h2>

          <p className="text-gray-300">
            I find joy in every step of the development process. Beyond coding,
            I explore new ideas, and love unwinding with a good book.
          </p>
          <BsCodeSlash className="text-[#11f7d5] text-2xl font-bold" />
          <button className="btn bg-transparent border border-[#11f7d5] text-[#11f7d5] text-left">
            Message Me
          </button>
        </div>

        {/* Right Content - Gradient Circles */}
        <div className="absolute w-80 h-80 md:w-96 md:h-96 flex items-center justify-center  md:z-10 right-0 md:right-12 top-1/2 transform -translate-y-1/2">
          <div className="absolute w-44 h-44 bg-gradient-to-br from-black to-[#11f7d5] rounded-full top-0 left-10 animate-pulse"></div>
          <div className="absolute w-56 h-56 bg-gradient-to-br from-black to-[#11f7d5] rounded-full bottom-0 right-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
