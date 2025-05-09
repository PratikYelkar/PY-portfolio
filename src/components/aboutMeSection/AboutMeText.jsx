import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I&apos;m Pratik — a dedicated software developer and aspiring full-stack engineer.
        I have hands-on experience working with a wide range of technologies including Java, MongoDB, Express.js, Data Analytics, SQL, Python, JavaScript, Node.js, React.js, Spring Boot, and Git.
        My focus is on building responsive, efficient, and scalable web applications using modern development practices.
        I’m committed to continuous learning and enjoy solving real-world challenges through clean, maintainable code.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
