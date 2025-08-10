// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";
const SkillsData = [
  {
    name: "JavaScript",
    imgUrl:
      "https://ik.imagekit.io/3ikmrta4w/javascript-logo-svgrepo-com.svg?updatedAt=1754850718617",
  },
  {
    name: "Go",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/go-svgrepo-com.svg",
  },
  {
    name: "NodeJS",

    imgUrl: "https://ik.imagekit.io/3ikmrta4w/node-js-svgrepo-com.svg",
  },
  {
    name: "Kubernetes",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/kubernetes-svgrepo-com.svg ",
  },
  {
    name: "Docker",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/docker-icon-svgrepo-com.svg",
  },
  {
    name: "Figma",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/figma-svgrepo-com.svg",
  },
  {
    name: "Postgresql",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/postgresql-svgrepo-com.svg",
  },
  {
    name: "MongoDB",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/mongodb-svgrepo-com.svg",
  },
  {
    name: "Express",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/express-svgrepo-com.svg",
  },
  {
    name: "TypeScript",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/typescript-logo-svgrepo-com.svg",
  },
  {
    name: "Tailwind",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/tailwind-svgrepo-com.svg",
  },
  {
    name: "Socket.io",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/socket-svgrepo-com.svg",
  },
  {
    name: "Git",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/git-svgrepo-com.svg",
  },
  {
    name: "Prisma",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/prisma-svgrepo-com.svg",
  },
  {
    name: "NextJS",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/next-js-svgrepo-com.svg",
  },
  {
    name: "ReactJS",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/react-svgrepo-com.svg",
  },
  {
    name: "Nginx",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/nginx-svgrepo-com.svg",
  },
  {
    name: "Java",
    imgUrl: "https://ik.imagekit.io/3ikmrta4w/java-svgrepo-com.svg",
  },
];
function Skills() {
  const firstArr = SkillsData.slice(0, 5);
  const secondArr = SkillsData.slice(9, 14);
  const thirdArr = SkillsData.slice(14, SkillsData.length + 1);
  return (
    <div className="mt-[5rem] flex flex-col gap-4  ">
      <BlurFade delay={BLUR_DELAY * 9}>
        <h1 className="text-2xl font-semibold">Skills</h1>
      </BlurFade>
      <div className=" flex flex-col space-y-2 mt-2">
        <div className="flex gap-3 ">
        {firstArr.map((v, i) => {
          return (
            <BlurFade delay={BLUR_DELAY * 10 + i * 0.05}>
                <div
              className="flex items-center justify-between gap-2 rounded-full border border-black/10 px-4 py-2"
              key={i}
            >
              <img src={v.imgUrl} alt="" className="h-8 w-8 rounded-lg" />
              <p className="font-medium">{v.name}</p>
            </div>
            </BlurFade>
          );
        })}
      </div>
      <div className="flex gap-3 ">
        {secondArr.map((v, i) => {
          return (
            <BlurFade delay={BLUR_DELAY * 11 + i * 0.05}>
                <div
              className="flex items-center justify-between gap-2 rounded-full border border-black/10 px-4 py-2"
              key={i}
            >
              <img src={v.imgUrl} alt="" className="h-8 w-8 rounded-lg" />
              <p className="font-medium">{v.name}</p>
            </div>
            </BlurFade>
          );
        })}
      </div>
      <div className="flex gap-3 mx-auto   ">
        {thirdArr.map((v, i) => {
          return (
            <BlurFade delay={BLUR_DELAY * 13 + i * 0.05}>
                <div
              className="flex items-center justify-between gap-2 rounded-full border border-black/10 px-4 py-2"
              key={i}
            >
              <img src={v.imgUrl} alt="" className="h-8 w-8 rounded-lg" />
              <p className="font-medium">{v.name}</p>
            </div>
            </BlurFade>
          );
        })}
      </div>
      <div>
<BlurFade delay={BLUR_DELAY * 14}>
    <p className="text-black/70 text-center">... and more</p>
      
</BlurFade>
</div>
      </div>
    </div>
  );
}

export default Skills;
