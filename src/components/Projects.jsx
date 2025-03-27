import SectionTitle from "./SectionTitle";
import work from "../assets/work.gif";
import Project from "./Project";
import bg from "../assets/skill.png";
import img1 from "../assets/projects/dormdining.png";
import img2 from "../assets/projects/ecoventura.png";
import img3 from "../assets/projects/serviceboard.png";

import projectsData from "../../public/Projects.json";

const Projects = () => {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Hostel Management System",
  //     mockup: img2,
  //     description:
  //       "Hostel management system designed for university hostel operations.",
  //     liveLink: "https://dormdining-23acc.web.app/",
  //     github: "https://github.com/sumaiya0afrin/DormDining",
  //     techStack: [
  //       "React",
  //       "Tailwind",
  //       "Node.js",
  //       "Express.js",
  //       "MongoDB",
  //       "JWT",
  //     ],
  //     briefDesc:
  //       "This project aims to develop a Hostel Management system for a university, enabling administrators to manage student meals and food reviews using the MERN stack (MongoDB, Express.js, React.js, Node.js). Key features include student login, meal management by admins, and the ability to edit or delete food reviews and can manage their students. ",
  //   },
  //   {
  //     id: 2,
  //     title: "Eco-Adventure",
  //     description:
  //       "Blog-based web application designed to showcase eco-friendly travel adventures.",
  //     mockup: img1,
  //     liveLink: "https://ecoventura-af912.web.app/",
  //     techStack: ["React", "Tailwind", "firebase"],
  //     briefDesc:
  //       "  This project is a Service Review Application System, a platform designed to allow users to review and interact with services listed by others. Users can log in, add services, and share their experiences by posting reviews. They can also manage their reviews, and explore reviews of the services they've added. This system provides hands-on experience in building a full-stack application, integrating user authentication, managing CRUD operations, handling reviews, and ensuring secure database interactions.",
  //   },

  //   {
  //     id: 3,
  //     title: "Service Review System",
  //     description:
  //       "A platform designed to allow users to review and interact with services listed by others.",
  //     mockup: img3,
  //     liveLink: "https://servicescoreboard.web.app/",
  //     techStack: [
  //       "React",
  //       "Tailwind",
  //       "Node.js",
  //       "Express.js",
  //       "MongoDB",
  //       "firebase",
  //     ],
  //     briefDesc:
  //       " This project is a Service Review Application System, a platform designed to allow users to review and interact with services listed by others. Users can log in, add services, and share their experiences by posting reviews. They can also manage their reviews, and explore reviews of the services they've added. This system provides hands-on experience in building a full-stack application, integrating user authentication, managing CRUD operations, handling reviews, and ensuring secure database interactions.",
  //   },
  // ];

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
