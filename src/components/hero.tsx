import coffee from "/coffee.jpg";
import bulb from "/bulb.jpg";
import { ContainerTextFlip } from "./text-flip";
import { BLUR_DELAY } from "../lib/utils";
import { BlurFade } from "./blur-fade";
import { SparklesText } from "./spark";
import { TypingAnimation } from "./typing";
import profile from "/profilebg.png"
function Hero() {
  return (
    <div>
      <BlurFade delay={BLUR_DELAY}>
  <div className="relative h-35 w-35 group perspective">
    {/* Background layer */}
    <div className="absolute inset-0 rounded-full bg-[#ffebd4] transition-transform duration-500 group-hover:-translate-z-10"></div>
    
    {/* Image layer */}
    <img
      src={profile}
      alt=""
      className="relative z-10 rounded-full  transition-transform duration-500 transform group-hover:scale-110 group-hover:-translate-y-2"
    />
  </div>
</BlurFade>

      <div className="mt-5 space-y-2">
        <BlurFade delay={BLUR_DELAY * 2}>
          <p className="text-lg font-medium md:text-lg">Hey 👋 i'm,</p>

          <SparklesText sparklesCount={8}>
            <TypingAnimation className="text-3xl  md:text-6xl" duration={60} delay={30}>Shrinivas Sherikar</TypingAnimation>
          </SparklesText>
        </BlurFade>
        <BlurFade delay={BLUR_DELAY * 3}>
          <div className="text-md mt-4 flex items-center gap-2 font-bold text-black/20 md:gap-3 md:text-2xl">
            <span className="">I turn caffeine </span>

            <div className="h-10 w-10 rotate-6 rounded-xl border border-black/15 p-[3px] md:h-14 md:w-14 md:rounded-2xl hover:-rotate-20 transition-all">
              <img
                src={coffee}
                alt="coffee"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <span>&</span>
            <div className="h-10 w-10 -rotate-6 rounded-xl border border-black/15 p-[3px] shadow-[0_0_15px_rgba(255,255,0,0.5)] md:h-14 md:w-14 md:rounded-2xl hover:rotate-20 transition-all">
              <img
                src={bulb}
                alt="bulb"
                className="h-full w-full rounded-2xl object-cover "
              />
            </div>
            <span> ideas</span>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_DELAY * 3}>
          <div className="text-md flex items-center gap-1 font-bold text-black/20 md:text-2xl">
            <p>into apps that </p>
            <ContainerTextFlip />
          </div>
        </BlurFade>
        <div className="mt-8 flex items-center gap-2 md:gap-3">
          <BlurFade delay={BLUR_DELAY * 8} direction="right">
            <div className="flex cursor-pointer rounded-4xl border bg-black px-3 py-3 text-white md:px-4 md:py-3">
              <span className="text-xs md:text-base"> Download CV</span>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_DELAY * 8} direction="left">
            <div className="flex items-center gap-3 rounded-4xl bg-[#E1F9DC] px-3 py-3 md:px-4 md:py-3">
              <TargetStatic />
              <span className="text-xs text-[#178D00] md:text-base">
                Available for work
              </span>
            </div>
          </BlurFade>
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
