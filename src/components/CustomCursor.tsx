import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 30 });

  const trailX = useSpring(0, { stiffness: 300, damping: 40 });
  const trailY = useSpring(0, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-trigger")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-100"
        style={{
          left: trailX,
          top: trailY,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className="w-12 h-12 rounded-full border border-brand-gold/30 bg-brand-gold/5" />
      </motion.div>
      <motion.div
        className="custom-cursor"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      >
        <motion.div
          className={`cursor-dot ${isHovering ? "cursor-hovering" : ""}`}
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
        />
      </motion.div>
    </>
  );
}
