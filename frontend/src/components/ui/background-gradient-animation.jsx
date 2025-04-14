"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(9, 9, 11)",
    gradientBackgroundEnd = "rgb(3, 3, 5)",
    orangeColors = ["234, 88, 12", "234, 88, 12", "234, 88, 12"], // All orange variants
    darkColors = ["9, 9, 11", "3, 3, 5"], // Dark background colors
    pointerColor = "234, 88, 12",
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    containerClassName,
    orangeDuration = 8, // seconds
    cycleDuration = 20, // total animation cycle
}) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const [isSafari, setIsSafari] = useState(false);

    // Set CSS variables and detect browser
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        root.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        root.style.setProperty("--pointer-color", pointerColor);
        root.style.setProperty("--size", size);
        root.style.setProperty("--blending-value", blendingValue);
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Animation timing control
    const getAnimationDelay = (index, total) => {
        const stagger = cycleDuration / total;
        return `${index * stagger}s`;
    };

    const getAnimationDuration = (isOrange) => {
        return isOrange ? `${orangeDuration}s` : `${cycleDuration - orangeDuration}s`;
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "h-[calc(100vh-5rem)] w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className={cn("", className)}>{children}</div>

            <div
                className={cn(
                    "gradients-container h-full w-full blur-lg",
                    isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                )}
            >
                {/* Orange Elements (long duration) */}
                {orangeColors.map((color, i) => (
                    <div
                        key={`orange-${i}`}
                        className={cn(
                            `absolute [background:radial-gradient(circle_at_center,rgba(${color},0.8)_0,rgba(${color},0)_50%)_no-repeat]`,
                            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                            `opacity-100`
                        )}
                        style={{
                            transformOrigin: i % 2 === 0 ? `calc(50% - ${(i + 1) * 200}px)` : `calc(50% + ${(i + 1) * 200}px)`,
                            animation: `pulse ${getAnimationDuration(true)} ease-in-out infinite`,
                            animationDelay: getAnimationDelay(i, orangeColors.length),
                        }}
                    />
                ))}

                {/* Dark Elements (shorter duration) */}
                {darkColors.map((color, i) => (
                    <div
                        key={`dark-${i}`}
                        className={cn(
                            `absolute [background:radial-gradient(circle_at_center,rgba(${color},0.8)_0,rgba(${color},0)_50%)_no-repeat]`,
                            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                            `opacity-70`
                        )}
                        style={{
                            transformOrigin: i % 2 === 0 ? `calc(50% - ${(i + 1) * 300}px)` : `calc(50% + ${(i + 1) * 300}px)`,
                            animation: `pulse ${getAnimationDuration(false)} ease-in-out infinite`,
                            animationDelay: getAnimationDelay(i, darkColors.length),
                        }}
                    />
                ))}

                {/* Interactive Pointer */}
                {interactive && (
                    <PointerTracker
                        color={pointerColor}
                        blendingValue={blendingValue}
                        isSafari={isSafari}
                    />
                )}
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>
        </div>
    );
};

// Separate component for smoother pointer tracking
const PointerTracker = ({ color, blendingValue, isSafari }) => {
    const ref = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            cancelAnimationFrame(animationRef.current);
            animationRef.current = requestAnimationFrame(() => {
                const rect = ref.current.getBoundingClientRect();
                ref.current.style.transform = `translate(${e.clientX - rect.width / 2}px, ${e.clientY - rect.height / 2}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,rgba(${color},0.8)_0,rgba(${color},0)_50%)_no-repeat]`,
                `[mix-blend-mode:${blendingValue}] w-64 h-64`,
                `opacity-70 will-change-transform pointer-events-none`
            )}
            style={{
                filter: isSafari ? 'blur(40px)' : 'none'
            }}
        />
    );
};

// "use client";
// import { cn } from "@/lib/utils";
// import { useEffect, useRef, useState } from "react";

// export const BackgroundGradientAnimation = ({
//     gradientBackgroundStart = "rgb(9, 9, 11)", // zinc-950
//     gradientBackgroundEnd = "rgb(3, 3, 5)", // darker than zinc-950
//     firstColor = "234, 88, 12", // orange-600
//     secondColor = "9, 9, 11", // zinc-950
//     thirdColor = "234, 88, 12", // orange-600
//     fourthColor = "3, 3, 5", // ultra dark zinc
//     fifthColor = "234, 88, 12", // orange-600
//     pointerColor = "234, 88, 12", // orange-600
//     size = "80%",
//     blendingValue = "hard-light",
//     children,
//     className,
//     interactive = true,
//     containerClassName
// }) => {
//     const interactiveRef = useRef(null);

//     const [curX, setCurX] = useState(0);
//     const [curY, setCurY] = useState(0);
//     const [tgX, setTgX] = useState(0);
//     const [tgY, setTgY] = useState(0);
//     useEffect(() => {
//         document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
//         document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
//         document.body.style.setProperty("--first-color", firstColor);
//         document.body.style.setProperty("--second-color", secondColor);
//         document.body.style.setProperty("--third-color", thirdColor);
//         document.body.style.setProperty("--fourth-color", fourthColor);
//         document.body.style.setProperty("--fifth-color", fifthColor);
//         document.body.style.setProperty("--pointer-color", pointerColor);
//         document.body.style.setProperty("--size", size);
//         document.body.style.setProperty("--blending-value", blendingValue);
//     }, []);

//     useEffect(() => {
//         function move() {
//             if (!interactiveRef.current) {
//                 return;
//             }
//             setCurX(curX + (tgX - curX) / 20);
//             setCurY(curY + (tgY - curY) / 20);
//             interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//         }

//         move();
//     }, [tgX, tgY]);

//     const handleMouseMove = (event) => {
//         if (interactiveRef.current) {
//             const rect = interactiveRef.current.getBoundingClientRect();
//             setTgX(event.clientX - rect.left);
//             setTgY(event.clientY - rect.top);
//         }
//     };

//     const [isSafari, setIsSafari] = useState(false);
//     useEffect(() => {
//         setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
//     }, []);

//     return (
//         <div
//             className={cn(
//                 "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
//                 containerClassName
//             )}>
//             <svg className="hidden">
//                 <defs>
//                     <filter id="blurMe">
//                         <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//                         <feColorMatrix
//                             in="blur"
//                             mode="matrix"
//                             values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
//                             result="goo" />
//                         <feBlend in="SourceGraphic" in2="goo" />
//                     </filter>
//                 </defs>
//             </svg>
//             <div className={cn("", className)}>{children}</div>
//             <div
//                 className={cn(
//                     "gradients-container h-full w-full blur-lg",
//                     isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
//                 )}>
//                 <div
//                     className={cn(
//                         `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
//                         `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//                         `[transform-origin:center_center]`,
//                         `animate-first`,
//                         `opacity-100`
//                     )}></div>
//                 <div
//                     className={cn(
//                         `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
//                         `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//                         `[transform-origin:calc(50%-400px)]`,
//                         `animate-second`,
//                         `opacity-100`
//                     )}></div>
//                 <div
//                     className={cn(
//                         `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
//                         `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//                         `[transform-origin:calc(50%+400px)]`,
//                         `animate-third`,
//                         `opacity-100`
//                     )}></div>
//                 <div
//                     className={cn(
//                         `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
//                         `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//                         `[transform-origin:calc(50%-200px)]`,
//                         `animate-fourth`,
//                         `opacity-70`
//                     )}></div>
//                 <div
//                     className={cn(
//                         `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
//                         `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//                         `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
//                         `animate-fifth`,
//                         `opacity-100`
//                     )}></div>

//                 {interactive && (
//                     <div
//                         ref={interactiveRef}
//                         onMouseMove={handleMouseMove}
//                         className={cn(
//                             `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_30%)_no-repeat]`,
//                             `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
//                             `opacity-70`
//                         )}></div>
//                 )}
//             </div>
//         </div>
//     );
// };