import React from "react";
import coffee from "/coffee.jpg";
import bulb from "/bulb.jpg";
import { ContainerTextFlip } from "./text-flip";
function Hero() {
  return (
    <div >
      <div className="h-30 w-30 rounded-full border border-black/10"></div>
      <div className="mt-5 space-y-2">
        <p className="text-lg md:text-2xl font-semibold">Hey it's,</p>
        <h1 className="text-3xl font-extrabold md:text-6xl">Shrinivas Sherikar</h1>
        <div className="text-md mt-4 flex items-center gap-2 font-bold text-black/20 md:gap-3 md:text-2xl">
          <span className="">I turn caffeine </span>

          <div className="h-10 w-10 rotate-6 rounded-xl border border-black/15 p-[3px] md:h-14 md:w-14 md:rounded-2xl">
            <img
              src={coffee}
              alt="coffee"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <span>&</span>
<div className="h-10 w-10 -rotate-6 rounded-xl border border-black/15 p-[3px] shadow-[0_0_15px_rgba(255,255,0,0.5)] md:h-14 md:w-14 md:rounded-2xl">
            <img
              src={bulb}
              alt="bulb"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <span> ideas</span>

          
        </div>
        <div className="text-md flex items-center gap-1 font-bold text-black/20 md:text-2xl">
          <p>into apps that </p>
          <ContainerTextFlip />
        </div>
        <div className="mt-8 flex items-center md:gap-3 gap-2">
          <div className="cursor-pointer rounded-4xl border bg-black px-3 py-3 md:px-4 md:py-3 text-white flex">
           <span className="text-xs md:text-base"> Download CV</span>
          </div>
          <div className="flex items-center gap-3 rounded-4xl bg-[#E1F9DC] px-3 py-3 md:px-4 md:py-3 ">
            <TargetStatic />
            <span className="text-[#178D00] text-xs md:text-base">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function TargetStatic() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
      <div className="h-2 w-2 rounded-full bg-[#178D00]"></div>
    </div>
  );
}

export default Hero;
