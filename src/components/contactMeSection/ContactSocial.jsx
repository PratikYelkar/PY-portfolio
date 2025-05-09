import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/pratik-yelkar/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/PratikYelkar"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/prat.ik_8585/"
        Icon={FaInstagram}
      />
      
    </div>
  );
};

export default ContactSocial;
