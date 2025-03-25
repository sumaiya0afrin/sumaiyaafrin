import SectionTitle from "./SectionTitle";
import work from "../assets/work.gif";
import Project from "./Project";
import bg from "../assets/skill.png";
import img1 from "../assets/projects/ecoventura.png";
import img2 from "../assets/projects/dormdining.png";
import img3 from "../assets/projects/serviceboard.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hostel Management System",
      mockup: img2,
      description:
        "Hostel management system designed for university hostel operations.",
      liveLink: "https://liveproject2.com",
      detailsLink: "https://detailsproject2.com",
      techStack: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
    },
    {
      id: 2,
      title: "Eco-Adventure",
      description:
        "Blog-based web application designed to showcase eco-friendly travel adventures.",
      mockup: img1,
      liveLink: "https://liveproject1.com",
      detailsLink: "https://detailsproject1.com",
      techStack: ["React", "Tailwind", "firebase"],
    },

    {
      id: 3,
      title: "Service Review System",
      description:
        "A platform designed to allow users to review and interact with services listed by others.",
      mockup: img3,
      liveLink: "https://liveproject3.com",
      detailsLink: "https://detailsproject3.com",
      techStack: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "firebase",
      ],
    },
  ];
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

        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            desc={project.description}
            techStack={project.techStack}
            mockup={project.mockup}
            liveLink={project.liveLink}
            detailsLink={project.detailsLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
