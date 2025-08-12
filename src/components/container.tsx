import React from "react";
import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-3xl mx-auto px-4 md:py-8  relative scroll-smooth",className)}>{children}</div>;
};

export default Container;
