import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}
export const BLUR_DELAY : number= 0.04
export const SkillsData = [
  { name: "JavaScript", imgUrl: "https://ik.imagekit.io/3ikmrta4w/javascript-logo-svgrepo-com.svg?updatedAt=1754850718617" },
  { name: "Go", imgUrl: "https://ik.imagekit.io/3ikmrta4w/go-svgrepo-com.svg" },
  { name: "NodeJS", imgUrl: "https://ik.imagekit.io/3ikmrta4w/node-js-svgrepo-com.svg" },
  { name: "Kubernetes", imgUrl: "https://ik.imagekit.io/3ikmrta4w/kubernetes-svgrepo-com.svg" },
  { name: "Docker", imgUrl: "https://ik.imagekit.io/3ikmrta4w/docker-icon-svgrepo-com.svg" },
  { name: "Figma", imgUrl: "https://ik.imagekit.io/3ikmrta4w/figma-svgrepo-com.svg" },
  { name: "Postgresql", imgUrl: "https://ik.imagekit.io/3ikmrta4w/postgresql-svgrepo-com.svg" },
  { name: "MongoDB", imgUrl: "https://ik.imagekit.io/3ikmrta4w/mongodb-svgrepo-com.svg" },
  { name: "Express", imgUrl: "https://ik.imagekit.io/3ikmrta4w/express-svgrepo-com.svg" },
  { name: "TypeScript", imgUrl: "https://ik.imagekit.io/3ikmrta4w/typescript-logo-svgrepo-com.svg" },
  { name: "Tailwind", imgUrl: "https://ik.imagekit.io/3ikmrta4w/tailwind-svgrepo-com.svg" },
  { name: "Socket.io", imgUrl: "https://ik.imagekit.io/3ikmrta4w/socket-svgrepo-com.svg" },
  { name: "Git", imgUrl: "https://ik.imagekit.io/3ikmrta4w/git-svgrepo-com.svg" },
  { name: "Prisma", imgUrl: "https://ik.imagekit.io/3ikmrta4w/prisma-svgrepo-com.svg" },
  { name: "NextJS", imgUrl: "https://ik.imagekit.io/3ikmrta4w/next-js-svgrepo-com.svg" },
  { name: "ReactJS", imgUrl: "https://ik.imagekit.io/3ikmrta4w/react-svgrepo-com.svg" },
  { name: "Nginx", imgUrl: "https://ik.imagekit.io/3ikmrta4w/nginx-svgrepo-com.svg" },
  { name: "Java", imgUrl: "https://ik.imagekit.io/3ikmrta4w/java-svgrepo-com.svg" },
  { name: "GraphQL", imgUrl: "https://ik.imagekit.io/3ikmrta4w/graphql-svgrepo-com.svg?updatedAt=1754935752857" },
  { name: "Tanstack",imgUrl: "https://ik.imagekit.io/3ikmrta4w/tanstack.png"},
  { name: "Hono",imgUrl: "https://ik.imagekit.io/3ikmrta4w/hono.png"}
];

