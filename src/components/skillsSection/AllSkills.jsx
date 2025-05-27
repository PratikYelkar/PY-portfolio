import SingleSkill from "./SingleSkill";
import { FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql,  } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Java", icon: FaJava },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Python", icon: FaPython },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Git", icon: FaGitAlt },
];

const AllSkills = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide w-full">
      <div className="flex items-center gap-6 max-w-max px-4 py-6">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `${0}.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
