import { BLUR_DELAY } from "../lib/utils";
import { BlurFade } from "./blur-fade";
const ExperienceData = [
  {
    from: "Feb 2025",
    to: "Aug 2025",
    company: " Backend Intern at Attain Studio",
  },
  {
    from: "2023",
    to: "Present",
    company: "Full Stack Developer as Freelancer",
  },
];
function Experience() {
  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 17}>
        <p className="text-2xl font-semibold">Experience</p>
      </BlurFade>
      
        <div className="mt-5 flex flex-col gap-2">
            {ExperienceData.map((v, i) => {
          return (
           <BlurFade delay={BLUR_DELAY * 18 + i * 0.05}  key={i}>
            <div className=" grid grid-cols-2 justify-around  text-sm md:text-base ">
              <div className=" text-gray-400 text-end md:pr-15 pr-5 flex justify-end items-center">
                <p>{v.from} - {v.to} </p>
              </div>
              <div className=" font-medium ">
                <p>{v.company}</p>
                
              </div>
            </div>
           </BlurFade>
          );
        })}
        </div>
    </div>
  );
}

export default Experience;
