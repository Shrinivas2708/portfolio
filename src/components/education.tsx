// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";
import mitlogo from "/mit.jpeg";

const EducationData = [
  {
    name: "MIT ADT University",
    logo: mitlogo,
    from: "2023",
    to: "2027",
    in: "Bachelor of Technology (IT)",
  },
];

function Education() {
  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 19}>
        <p className="text-2xl font-semibold mb-6">Education</p>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {EducationData.map((v, i) => (
         <BlurFade delay={BLUR_DELAY * 20 + i * 0.05}  key={i}>
         <div
            key={i}
            className="flex items-center gap-5  rounded-xl bg-white/5 "
          >
            <img
              src={v.logo}
              alt={v.name}
              className="h-14 w-14 rounded-full object-cover border border-white/20"
            />

            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center flex-wrap">
                <p className="md:   text-lg font-medium">{v.name}</p>
                <span className="text-sm text-gray-800">
                  {v.from} – {v.to}
                </span>
              </div>
              <p className="text-sm text-gray-700">{v.in}</p>
            </div>
          </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default Education;
