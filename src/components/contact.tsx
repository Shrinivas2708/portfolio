// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";

function Contact() {
  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 21}>
        <p className="text-2xl font-semibold mb-2">Get in touch</p>
      </BlurFade>

      <BlurFade delay={BLUR_DELAY * 22}>
        <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
          I’m always interested in exploring new opportunities, collaborating,
          or exchanging ideas with like-minded individuals. Feel free to book a
          call or email me if you'd like to see my portfolio deck or to discuss
          a potential project.
        </p>
      </BlurFade>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <BlurFade delay={BLUR_DELAY * 23} className="flex-1">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none ring-1 ring-gray-300"
            />
          </BlurFade>
          <BlurFade delay={BLUR_DELAY * 24} className="flex-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none ring-1 ring-gray-300"
            />
          </BlurFade>
        </div>

        {/* Message */}
        <BlurFade delay={BLUR_DELAY * 25}>
          <textarea
            placeholder="Write your Message"
            rows={5}
            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none ring-1 ring-gray-300"
          ></textarea>
        </BlurFade>

        {/* Button */}
        <BlurFade delay={BLUR_DELAY * 26}>
          <button
            type="button"
            className="w-full rounded-lg bg-black text-white py-3 hover:bg-gray-900 transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </BlurFade>
      </form>
    </div>
  );
}

export default Contact;
