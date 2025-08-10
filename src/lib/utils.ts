import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}
export const BLUR_DELAY : number= 0.04