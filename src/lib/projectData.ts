import hosticVid from "/hostic.mp4";
import muzzVid from "/muzz.mp4";
import writeflowVid from "/writeflow.mp4";
import writeflow from "/writeflow.png";
import hostic from "/Hostic.png";
import muzz from "/muzz.png";
import logify from "/logify.jpeg";
import logifyVid from "/logify.mp4";

export const ProjectData = [
  {
    title: "Hostic",
    imgLink: hostic,
    videoLink: hosticVid,
    description:
      "Developed a frontend hosting platform inspired by Vercel, enabling rapid deployment of static sites with Docker-based builds, Express backend, and MongoDB integration.",
    stack: ["Express", "MongoDB", "React", "Docker"],
    link: "https://hostic.shriii.xyz",
    repoLink: "https://github.com/",
    category: "Full Stack Project",
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
    category: "Full Stack Project",
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
    category: "Full Stack Project",
  },
  {
    title: "Logify",
    imgLink: logify,
    videoLink: logifyVid,
    description:
      "Created a colorful, zero-dependency CLI logger for Node.js — with timestamps, log levels, and custom styling built-in.",
    stack: ["Node", "npm"],
    link: "https://www.npmjs.com/package/logify-cli",
    repoLink: "https://www.npmjs.com/package/logify-cli",
    category: "CLI App",
  },
];

export const Categories = [
  "Full Stack Project",
  "Mobile App Project",
  "CLI App",
  "Web3",
];
