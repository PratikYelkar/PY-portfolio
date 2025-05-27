import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center">
        I approach each project as more than just code, it&apos;s a chance to create something meaningful. 
        My focus is on building solutions that are efficient, reliable, and actually helpful to users.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;