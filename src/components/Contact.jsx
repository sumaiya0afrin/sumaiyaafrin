import { FaLocationCrosshairs, FaPhone } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import chat from "../assets/chat.gif";
import { IoMailOpen } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";

const Contact = () => {
  return (
    <section className="pb-[60px] md:pb-[75px] lg:pb-[100px]">
      <div className="px-6">
        <SectionTitle title="get in touch" image={chat} />

        <div className="grid md:grid-cols-3 lg:grid-cols-3 justify-items-center py-6 space-y-4 md:space-y-0 gap-4 md:gap-6">
          <div className="capitalize shadow-lg py-10 rounded-3xl w-full flex flex-col items-center">
            <span className="text-3xl text-[#11f7d5]">
              <FaLocationCrosshairs className="filter drop-shadow-[0_5px_10px_rgba(17,247,213,0.8)]" />
            </span>

            <h4 className="text-lg md:text-xl lg:text-2xl md:mt-2 font-semibold">
              location
            </h4>
            <p className="md:text-lg font-medium">dhaka, bangladesh</p>
          </div>

          <div className="capitalize shadow-lg py-10 rounded-3xl w-full flex flex-col items-center">
            <span className="text-3xl text-[#11f7d5]">
              <IoMailOpen className="filter drop-shadow-[0_5px_10px_rgba(17,247,213,0.8)]" />
            </span>

            <h4 className="text-lg md:text-xl lg:text-2xl md:mt-2 font-semibold">
              email
            </h4>
            <p className="md:text-lg font-medium lowercase">
              <a href="mailto:af.sumaiya@gmail.com">af.sumaiya@gmail.com</a>
            </p>
          </div>

          <div className="capitalize shadow-lg py-10 rounded-3xl w-full flex flex-col items-center">
            <span className="text-3xl text-[#11f7d5]">
              <FaPhone className="filter drop-shadow-[0_5px_10px_rgba(17,247,213,0.8)]" />
            </span>

            <h4 className="text-lg md:text-xl lg:text-2xl md:mt-2 font-semibold">
              phone
            </h4>
            <p className="md:text-lg font-medium">+880 123456789</p>
          </div>
        </div>

        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <div className="md:card-body">
            <h5 className="md:text-lg text-left mb-4">
              Interested in collaborating? Send me a message to say hello or to
              ask any queries you may have.
            </h5>
            <form>
              <fieldset className="fieldset">
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    className="input w-full"
                    placeholder="Name*"
                  />
                  <input
                    type="email"
                    required
                    className="input w-full"
                    placeholder="Email address*"
                  />
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Phone number (optional)"
                  />
                </div>

                <textarea
                  type="text"
                  className="input h-20 w-full mt-2 pt-2"
                  placeholder="Message.."
                />

                <button className="btn bg-transparent border border-[#071e1f] text-[#071e1f] text-left shadow-xl mt-4">
                  Send Message <TiArrowForward className="text-xl" />
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
