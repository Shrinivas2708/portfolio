// import React from 'react'

import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { BLUR_DELAY, SkillsData } from "../lib/utils";
import { BlurFade } from "./blur-fade";
import { LinkPreview } from "./link-preview";
import hosticVid from "/hostic.mp4"
import muzzVid from "/muzz.mp4"
import writeflowVid from "/writeflow.mp4"
import writeflow from "/writeflow.png"
// import hostic from "/hostic.png"
import hostic from "/Hostic.png"
import muzz from "/muzz.png"
import { useState } from "react";

const ProjectData = [
  {
    title: "Hostic",
    imgLink: hostic,
    videoLink: hosticVid,
    description:
      "Developed a frontend hosting platform inspired by Vercel, enabling rapid deployment of static sites with Docker-based builds, Express backend, and MongoDB integration.",
    stack: ["Express", "MongoDB", "React", "Docker"],
    link: "https://hostic.shriii.xyz",
    repoLink: "https://github.com/",
    category:"Full Stack Project"
  },
  {
    title: "Muzz",
    imgLink: muzz,
    videoLink: muzzVid,
    description:
      "Built a real-time collaborative music streaming web app where users can create rooms, queue songs, and vote tracks using Socket.IO, MongoDB, and Express.",
    stack: ["Express", "MongoDB", "React", "Socket"],
    link: "https://muzz.shriii.xyz",
    repoLink: "https://github.com/Shrinivas2708/muzz",
    category:"Full Stack Project"
  },
  {
    title: "Writeflow",
    imgLink: writeflow,
    videoLink: writeflowVid,
    description:
      "Created an AI-powered blogging platform with automated summaries, tag suggestions, and cover image generation using GraphQL API, Prisma ORM, and PostgreSQL.",
    stack: ["Express", "Postgresql", "React", "Prisma", "GraphQL"],
    link: "https://writeflow.shriii.xyz",
    repoLink: "https://github.com/Shrinivas2708/writeflow",
    category:"Full Stack Project"
  },
];
const categories = ["Full Stack Project","Mobile App Project","CLI App","Web3"]
function Projects() {
  const [activeCategory,setActiveCategory]=useState("Full Stack Project")
const filteredProjects = ProjectData.filter((p)=>p.category===activeCategory)
console.log(activeCategory)
  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 13}>
        <p className="text-2xl font-semibold">Projects</p>
      </BlurFade>
      <BlurFade delay={BLUR_DELAY * 14}>
        <div className=" mt-4 flex gap-2 border-b border-gray-300 divide-x divide-gray-300 text-sm md:text-base overflow-x-auto scrollbar-hide ">
        {
          categories.map((v,i)=>{
            return <p key={i} className={` whitespace-nowrap w-full p-3 text-center cursor-pointer  ${activeCategory === v ? "font-semibold text-blue-500" : ""}`} onClick={()=>setActiveCategory(v)}>{v}</p>
          })
        }
      </div>
      </BlurFade>
      <div className="mt-5 flex flex-col gap-3">
        {filteredProjects.map((v, i) => {
          return (
            <BlurFade delay={BLUR_DELAY * 15 + i * 0.05} key={i}>
              <LinkPreview url={v.videoLink} link={v.link}>
                <div className="flex cursor-pointer flex-col gap-3 rounded-xl border border-black/10 p-2 px-3 md:flex-row ">
                  {/* Image */}
                  <div className="pointer-events-none w-full md:w-[300px] flex items-center">
                    <img
                      src={v.imgLink}
                      alt={v.title}
                      className="h-auto w-full rounded-lg object-cover "
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-xl font-semibold md:text-2xl">
                      {v.title}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-justify">{v.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {v.stack.map((skill, i) => {
                        const data = SkillsData.find((vv) =>
                          vv.name.toLowerCase().includes(skill.toLowerCase()),
                        );
                        if (!data) return null;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-2 py-1 transition"
                          >
                            <img
                              src={data.imgUrl}
                              alt={data.name}
                              className="h-4 w-4 rounded-lg"
                            />
                            <p className="text-xs font-light md:text-sm">
                              {data.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div className="flex justify-end gap-2 md:pr-3 text-gray-300 md:mt-2">
                      <IconBrandGithub
                        onClick={() => window.open(v.repoLink)}
                        className="h-5 w-5 md:h-6 md:w-6"
                      />
                      <IconLink
                        onClick={() => window.open(v.link)}
                        className="h-5 w-5 md:h-6 md:w-6"
                      />
                    </div>
                  </div>
                </div>
              </LinkPreview>
            </BlurFade>
          );
        })}
      </div>
      <BlurFade delay={BLUR_DELAY * 16}>
        <div className="flex justify-center mt-3"><p className="p-2 text-gray-500 border border-gray-300 rounded-lg cursor-pointer">View more</p></div>
   
      </BlurFade>
    
    </div>
  );
}

export default Projects;
