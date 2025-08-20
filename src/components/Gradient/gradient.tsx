import * as React from "react";
import { animated } from "@react-spring/web";
import styles from "./styles.module.css";

export default function Gradient() {
  const from = "#2e2a2eff";
  const mid = "#35313fff";
  const to = "#615459ff";
  const angle = -180;

  const gradient = `linear-gradient(${angle}deg, ${from}, ${mid}, ${to})`;

  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundImage: gradient,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
