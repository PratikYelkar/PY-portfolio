import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="yelkarpratik111@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="8308890959" Image={FiPhone} />
      <SingleInfo text="Pune, Maharshtra" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
