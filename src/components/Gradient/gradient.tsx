import * as React from "react";
import { animated } from "@react-spring/web";
import styles from "./styles.module.css";

export default function Gradient() {
  const from = "#462135ff";
  const mid = "#5d4b72ff";
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
