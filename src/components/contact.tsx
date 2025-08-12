// import React from "react";
import { BlurFade } from "./blur-fade";
import { BLUR_DELAY } from "../lib/utils";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

function Contact() {
  const [state, handleSubmit] = useForm("xpwlbdqw");
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      toast.success("Message Sent!")
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div className="mt-[3rem] md:mt-[5rem]">
      <BlurFade delay={BLUR_DELAY * 21}>
        <p className="mb-2 text-2xl font-semibold">Get in touch</p>
      </BlurFade>

      <BlurFade delay={BLUR_DELAY * 22}>
        <p className="mb-6 text-justify text-sm leading-relaxed text-gray-600">
          I’m always interested in exploring new opportunities, collaborating,
          or exchanging ideas with like-minded individuals. Feel free to book a
          call or email me if you'd like to see my portfolio deck or to discuss
          a potential project.
        </p>
      </BlurFade>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit} ref={formRef}>
        {/* Name & Email */}
        <div className="flex flex-col gap-4 md:flex-row">
          <BlurFade delay={BLUR_DELAY * 23} className="flex-1">
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-lg bg-gray-100 px-4 py-3 ring-1 ring-gray-300 outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </BlurFade>
          <BlurFade delay={BLUR_DELAY * 24} className="flex-1">
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-gray-100 px-4 py-3 ring-1 ring-gray-300 outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </BlurFade>
        </div>

        {/* Message */}
        <BlurFade delay={BLUR_DELAY * 25}>
          <textarea
            required
            placeholder="Write your Message"
            rows={5}
            id="message"
            name="message"
            className="w-full rounded-lg bg-gray-100 px-4 py-3 ring-1 ring-gray-300 outline-none"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </BlurFade>

        {/* Button */}
        <BlurFade delay={BLUR_DELAY * 26}>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full cursor-pointer rounded-lg bg-black py-3 text-white transition-colors hover:bg-gray-900"
          >
            Send Message
          </button>
        </BlurFade>
      </form>
    </div>
  );
}

export default Contact;
