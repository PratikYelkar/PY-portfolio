import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[370px] md:w-[280px] sm:h-auto sm:w-full bg-[#0f0f0f] border border-orange rounded-2xl shadow-md mt-12 p-6 hover:scale-105 transition-transform duration-300"
    >
      <p className="text-lg font-semibold text-cyan mb-1">{experience.job}</p>
      <p className="text-md text-orange mb-1">{experience.company}</p>
      <p className="text-sm text-lightGrey mb-4 italic">{experience.date}</p>
      <ul className="list-disc list-inside space-y-2 text-sm text-lightGrey">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};
SingleExperience.propTypes = {
  experience: PropTypes.shape({
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SingleExperience;
