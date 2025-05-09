import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Python Development Intern",
    company: "Coding Raja Technologies",
    date: "Jul 2024 – Sep 2024",
    responsibilities: [
      "Developed a Budget Tracker app enhancing financial tracking efficiency by 25%.",
      "Streamlined data workflows with Python and JSON, reducing errors by 20%.",
      "Designed real-time dashboards for improved user experience.",
    ],
  },
  {
    job: "AI/ML Intern",
    company: "Proazure Software Solutions",
    date: "Jan 2020 – Jan 2021",
    responsibilities: [
      "Earned recognition as a top performer in AI/ML training projects.",
      "Performed advanced data preprocessing and model optimization using Python and Pandas.",
      "Implemented and evaluated ML models with improved prediction accuracy.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Self-driven",
    date: "2025 – Present",
    responsibilities: [
      "Built Resume Ranker using Django, React.js, and Python; reduced evaluation time by 30%.",
      "Developed a Deepfake Detection system using ResNext and LSTM with 85% accuracy.",
      "Led development for QR-Based Ticket System using full-stack technologies and secure booking logic.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-10">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
