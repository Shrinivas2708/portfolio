// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";

function About() {
  return (
    <div className="mt-[4rem] md:mt-[5rem] flex flex-col gap-4 text-lg leading-relaxed text-balance">
      <BlurFade delay={BLUR_DELAY * 5}>
        <h1 className="text-2xl font-semibold">About</h1>
      </BlurFade>

      <BlurFade delay={BLUR_DELAY * 6}>
        <p className="leading-relaxed text-justify">
          I’m <span className="font-bold">Shrinivas Sherikar</span>, a curious and passionate{" "}
          <span className="font-bold">developer</span> who thrives on solving problems
          and creating products that scale while delighting users. With a{" "}
          <span className="font-bold">designer’s eye</span> and an{" "}
          <span className="font-bold">engineer’s mindset</span>, I blend aesthetics with
          performance. Currently pursuing my degree at{" "}
          <span className="font-bold">MIT ADT University, Pune</span>, I’m deeply
          interested in the intersection of{" "}
          <span className="font-bold">technology</span> and{" "}
          <span className="font-bold">creativity</span>.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_DELAY * 7}>
        <p className="leading-relaxed text-justify">
          I craft <span className="font-bold">Frontends</span> that look exceptional and{" "}
          <span className="font-bold">Backends</span> that scale effortlessly. My
          expertise spans Full Stack Development (web & mobile) with{" "}
          <span className="font-bold">TypeScript</span> and{" "}
          <span className="font-bold">JavaScript</span>, complemented by experience in{" "}
          <span className="font-bold">DevOps</span> for building secure,
          cost-efficient systems that can handle millions of users. I’m also
          proficient in <span className="font-bold">Go</span> and{" "}
          <span className="font-bold">Java</span>, enabling me to design reliable and
          high-performance backends.
        </p>
      </BlurFade>
    
    </div>
  );
}

export default About;
