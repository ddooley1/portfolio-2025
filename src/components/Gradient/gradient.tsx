import * as React from "react";
import { animated } from "@react-spring/web";
import styles from "./styles.module.css";

export default function Gradient() {
  // TODO: Implement some variation to the gradients, maybe change them based on time of day. that would be cool
  const from = "#443e44ff";
  const mid = "#5a536bff";
  const to = "#9b7a87ff";
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
