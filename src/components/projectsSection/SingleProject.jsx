import PropTypes from "prop-types";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      {/* Text & Link Section */}
      <div className="md:w-1/2 w-full">
        <h2 className="md:text-3xl sm:text-2xl text-orange font-bold">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer mt-2 ${
              align === "left" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            View Project <BsFillArrowUpRightCircleFill className="text-xl" />
          </a>
        ) : (
          <p
            className={`italic text-lightGrey mt-2 text-sm ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            In Development
          </p>
        )}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden z-10"></div>
        <img
          src={image}
          alt={`${name} preview`}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string, // Now accepts null or string
};

export default SingleProject;
