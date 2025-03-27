import { BiSolidTrafficBarrier } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { HiSparkles } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const project = location.state?.project;

  const challenges = project.challenges;
  const improvements = project.improve;
  return (
    <main>
      <section className="!pt-32 md:!pt-42 pb-20 px-6">
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={project.mockup} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body md:text-lg">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.briefDesc}</p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-semibold">Technology Stack:</span>
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="badge bg-[#11f7d5] border-0 px-3 py-1 text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-6">
              <table className="table min-w-full">
                {/* head */}
                <thead>
                  <tr className="capitalize">
                    <th>challenges</th>
                    <th>future improvements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="content-start space-y-3">
                      {challenges.map((ch, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <BiSolidTrafficBarrier className="text-xl text-[#11f7d5] flex-shrink-0" />
                          <span className="capitalize">{ch}</span>
                        </div>
                      ))}
                    </td>
                    <td className="content-start space-y-3">
                      {improvements.map((imp, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <HiSparkles className="text-xl text-[#11f7d5] flex-shrink-0" />
                          <span className="capitalize">{imp}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-actions items-center gap-4 self-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                                      "
              >
                <FaGithub className="text-4xl md:text-5xl" />
              </a>
              <div className="size-24 md:size-28 rounded-full content-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center border border-[#071e1f] 
                                       rounded-full size-24 md:size-28 overflow-hidden text-[#071e1f] 
                                       transition-all duration-300 hover:text-[#11f7d5]
                                       before:absolute before:inset-0 before:bg-[#071e1f] before:rounded-full
                                       before:scale-0 before:opacity-0 before:transition-transform before:duration-300 
                                       hover:before:scale-100 hover:before:opacity-100 text-sm md:text-base"
                >
                  <span className="relative ">
                    Live Preview{" "}
                    <GoArrowUpRight className="text-xl md:text-3xl justify-self-center" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
