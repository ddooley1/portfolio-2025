import React, { useMemo } from 'react';

export default function Stars({ count = 100 }) {
  const frames = ["#fff8ceff", "#fffdefff", "#ffffffff"];
  const size = "1px";

  // Generate stars (Random upon refresh)
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,   // percentage across screen
      top: Math.random() * 100,    // percentage down screen
      color: frames[Math.floor(Math.random() * frames.length)],
    }));
  }, [count]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none", // so they don’t block clicks
        zIndex: -1,
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            width: size,
            height: size,
            backgroundColor: star.color,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
