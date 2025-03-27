import SectionTitle from "./SectionTitle";
import work from "../assets/work.gif";
import Project from "./Project";
import bg from "../assets/skill.png";
import img1 from "../assets/projects/dormdining.png";
import img2 from "../assets/projects/ecoventura.png";
import img3 from "../assets/projects/serviceboard.png";

import projectsData from "../../public/Projects.json";

const Projects = () => {
  const images = {
    "dormdining.png": img1,
    "ecoventura.png": img2,
    "serviceboard.png": img3,
  };

  return (
    <div
      id="projects"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="px-6 text-white max-w-6xl mx-auto pt-8 lg:pt-16 pb-16 lg:pb-32">
        <SectionTitle title="my portfolio" image={work} />

        {projectsData.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            desc={project.description}
            briefDesc={project.briefDesc}
            techStack={project.techStack}
            mockup={images[project.mockup]}
            liveLink={project.liveLink}
            github={project.github}
            challenges={project.challenges}
            improve={project.improvements}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
