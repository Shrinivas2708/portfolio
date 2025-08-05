import React from "react";
import { FloatingDock } from "./floating-dock";
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandX, IconHome, IconMail } from "@tabler/icons-react";

function Navbar() {
     const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-700 " />
      ),
      href: "mailto:ssherikar2005@gmail.com",
    },
 
    {
      title: "Leetcode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-700 " />
      ),
      href: "https://leetcode.com/u/Shrinivas_2708/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-700 " />
      ),
      href: "https://www.linkedin.com/in/shrinivas-sherikar-a77980231/",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-700 " />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-700 " />
      ),
      href: "https://www.instagram.com/itzzz_shriii/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-700 " />
      ),
      href: "https://x.com/ItzzzShri",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-700 " />
      ),
      href: "https://github.com/Shrinivas2708",
    },
  ];
  return (
    <div className="fixed top-10 left-1/2 z-50 h-[50px]  -translate-x-1/2 rounded-2xl ">
        <FloatingDock items={links} >

        </FloatingDock>
    </div>
  );
}
export default Navbar;
