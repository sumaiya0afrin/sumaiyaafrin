import { useEffect, useState } from "react";
import { CiSaveUp1 } from "react-icons/ci";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`btn fixed bottom-5 right-10 bg-[#071e1f] text-[#11f7d5] border border-[#11f7d5] py-6 md:py-7 rounded-lg shadow-2xl transition-opacity cursor-pointer z-50 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <CiSaveUp1 size={26} />
    </button>
  );
};

export default ScrollToTop;
