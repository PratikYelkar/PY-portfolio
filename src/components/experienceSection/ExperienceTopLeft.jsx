import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="4" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center">
        Gained practical experience by building full-stack solutions, developing scalable frontend and backend applications, and working on real-world problems through academic and internship-based projects.
      </p>
      <ExperienceInfo number="3" text="Internships" />
    </div>
  );
};

export default ExperienceTopLeft;
