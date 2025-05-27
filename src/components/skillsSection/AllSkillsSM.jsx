import { FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiMaterialdesign,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Material UI",
    icon: SiMaterialdesign,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
