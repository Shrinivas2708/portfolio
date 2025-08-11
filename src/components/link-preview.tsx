
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "../lib/utils";


type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
  link:string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 400,
  height = 200,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
  link = ""
}: LinkPreviewProps) => {
  const isVideoUrl = /\.(mp4|webm|ogg)$/i.test(url);

  let src;
  if (!isStatic) {
    if (isVideoUrl) {
      src = url; // ✅ direct video
    } else {
      const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
      });
      src = `https://api.microlink.io/?${params}`;
    }
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted && isVideoUrl && (
        <div className="hidden">
          <video src={src} width={width} height={height} />
        </div>
      )}
      {isMounted && !isVideoUrl && (
        <div className="hidden">
          <img src={src} width={width} height={height} alt="hidden" />
        </div>
      )}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={setOpen}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black", className)}
        >
          {children}
        </HoverCardPrimitive.Trigger>
        <HoverCardPrimitive.Portal>

        
        <HoverCardPrimitive.Content
          className="z-[9999] [transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{ x: translateX }}
              >
                <a
                  href={link}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200"
                  style={{ fontSize: 0 }}
                  target="_blank"
                >
                  {isVideoUrl ? (
                    <video
                      src={src}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={src}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      alt="preview"
                    />
                  )}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Portal>
      </HoverCardPrimitive.Root>
    </>
  );
};
