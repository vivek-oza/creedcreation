"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const requestRef = useRef(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const clickableSelectors = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    "[data-cursor-interact]",
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (isMobile) return;

    const moveHandler = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveHandler);
    return () => document.removeEventListener("mousemove", moveHandler);
  }, [isMobile]);

  // Animate cursors
  useEffect(() => {
    if (isMobile) return;

    let outerX = coords.x;
    let outerY = coords.y;
    const speed = 0.2;

    const animate = () => {
      outerX += (coords.x - outerX) * speed;
      outerY += (coords.y - outerY) * speed;

      if (innerRef.current)
        innerRef.current.style.transform = `translate3d(${coords.x - 4}px, ${coords.y - 4}px, 0)`;

      if (outerRef.current)
        outerRef.current.style.transform = `translate3d(${outerX - 18}px, ${outerY - 18}px, 0) scale(${isHovering ? 1.8 : 1
          })`;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [coords, isHovering, isMobile]);

  // Hover state
  useEffect(() => {
    if (isMobile) return;

    const hoverIn = () => setIsHovering(true);
    const hoverOut = () => setIsHovering(false);

    const elements = document.querySelectorAll(clickableSelectors.join(","));
    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed z-[9999] top-0 left-0 w-[8px] h-[8px] rounded-full"
        style={{
          backgroundColor: "#ff9100",
          mixBlendMode: "difference",
          transition: "transform 0.08s ease-out",
        }}
      />

      {/* Outer ring */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed z-[9998] top-0 left-0 w-[36px] h-[36px] rounded-full"
        style={{
          border: "2px solid #ff9100",
          opacity: 0.5,
          mixBlendMode: "difference",
          transition: "transform 0.25s ease, opacity 0.2s",
        }}
      />
    </>
  );
}
