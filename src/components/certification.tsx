// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";
import sihLogo from "/sih.png";

const CertificationData = [
  {
    name: "Smart India Hackathon",
    position: "Runner Up",
    link: "s",
    logo: sihLogo,
    in: "2024",
  },
];

function Certification() {
  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 21}>
        <p className="text-2xl font-semibold mb-6">
          Certifications & Hackathons
        </p>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {CertificationData.map((v, i) => (
             <BlurFade delay={BLUR_DELAY * 22 + i * 0.05}  key={i}>
                 <div
            className="flex items-center gap-5  rounded-xl bg-white/5 "
          >
            <img
              src={v.logo}
              alt={v.name}
              className="h-14 w-14 rounded-full object-cover border border-white/20"
            />

            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-lg font-medium">{v.name}</p>
                <span className="ext-sm text-gray-800">{v.in}</span>
              </div>

              <p className="text-sm text-gray-700">{v.position}</p>

              {v.link && (
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
             </BlurFade>
         
        ))}
      </div>
    </div>
  );
}

export default Certification;
