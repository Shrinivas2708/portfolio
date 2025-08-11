import { BlurFade } from "./blur-fade";
import { BLUR_DELAY, SkillsData } from "../lib/utils";



function Skills() {
  return (
    <div className="mt-[3rem] md:mt-[5rem] flex flex-col gap-4">
      <BlurFade delay={BLUR_DELAY * 9}>
        <h1 className="text-2xl font-semibold">Skills</h1>
      </BlurFade>

      <div className="mt-2 grid grid-cols-3  md:grid-cols-4 gap-3">
        {SkillsData.map((skill, i) => (
          <BlurFade key={i} delay={BLUR_DELAY * 10 + i * 0.05}>
            <div className="flex items-center md:gap-2 gap-1 rounded-full border border-black/10 px-2 md:px-4 py-2 bg-white/70 hover:shadow-md transition">
              <img
                src={skill.imgUrl}
                alt={skill.name}
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-lg"
              />
              <p className="font-medium text-xs md:text-base">{skill.name}</p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={BLUR_DELAY * 12}>
        <p className="text-black/70 text-center mt-3">... and more</p>
      </BlurFade>
    </div>
  );
}

export default Skills;
