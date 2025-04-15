"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // SVG patterns for different states and themes
    const dotPatterns = {
        dark: {
            default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
            hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        },
        light: {
            default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
            hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        },
    };

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY
    }) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "group relative flex min-h-screen w-full items-center justify-center bg-black text-white dark:bg-black",
                containerClassName
            )}
            onMouseMove={handleMouseMove} style={{ color: 'white !important' }}>
            <div
                className="pointer-events-none absolute inset-0 dark:hidden"
                style={{
                    backgroundImage: dotPatterns.light.default,
                }} />
            <div
                className="pointer-events-none  text-white absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: dotPatterns.dark.default,
                }} />
            <motion.div
                className="pointer-events-none  text-white absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
                style={{
                    backgroundImage: dotPatterns.light.hover,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }} />
            <motion.div
                className="pointer-events-none text-white absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
                style={{
                    backgroundImage: dotPatterns.dark.hover,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }} />
            <div style={{ color: 'white !important' }} className={cn("relative z-20  text-white", className)} >{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            whileInView={{
                backgroundSize: "100% 100%",
                repeatCount: -1

            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.25,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block text-white rounded-lg bg-gradient-to-r from-orange-400 to-orange-500  px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
                className
            )}>
            {children}
        </motion.span>
    );
};
