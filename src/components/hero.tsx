import React from "react";
import coffee from "/coffee.jpg";
import bulb from "/bulb.jpg";
import { ContainerTextFlip } from "./text-flip";
function Hero() {
  return (
    <div className="p-5">
      <div className="h-28 w-28 rounded-full border border-black/10"></div>
      <div className="mt-3 space-y-2">
        <p className="text-4xl font-medium">Hey it's,</p>
        <h1 className="text-2xl font-bold md:text-6xl">Shrinivas Sherikar</h1>
        <div className="flex items-center gap-3 text-2xl text-black/40 font-medium">
          <span className="">I turn caffeine </span>

         

            <div className="h-14 w-14 rotate-6 rounded-2xl border border-black/15 p-[3px]">
              <img
                src={coffee}
                alt="coffee"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            <span>and ideas</span>

            <div className="h-14 w-14 rotate-6 rounded-2xl border border-black/15 p-[3px] shadow-[0_0_15px_rgba(255,255,0,0.5)]">
              <img
                src={bulb}
                alt="bulb"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          
        </div>
        <div className="flex items-center gap-3 text-2xl text-black/40 font-medium ">
            <p>into apps </p>
           <ContainerTextFlip />
        </div>
      </div>
    </div>
  );
}

export default Hero;
