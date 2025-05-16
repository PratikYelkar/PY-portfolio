import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AI NewsSphere (MERN)",
    year: "2025",
    align: "left",
    image: "images/AI-NewsSphere.png", 
    link: "https://github.com/PratikYelkar/AI-NewsSphere.git", 
  },
  {

    name: "Resume Ranker",
    year: "2024",
    align: "right",
    image: "images/ResumeRanker.jpg",
    link: "https://github.com/PratikYelkar/Resume-Ranker--frontend",
  },
  {
    name: "QR-Based Ticket Entry System",
    year: "2023",
    align: "left",
    image: "images/QRTicketEntry.png",
    link: "https://github.com/PratikYelkar/National-Museum",
  },
  {
    name: "Emotion Based Music Player",
    year: "2021",
    align: "right",
    image: "images/emotion-music.png",
    link: "https://github.com/PratikYelkar/Emotion-Based-Music-Player",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
