import { useEffect, useState } from "react";

export default function LightningLayer() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const startLoop = () => {
      const delay =
        5000 + Math.random() * 15000;

      setTimeout(() => {
        setFlash(true);

        setTimeout(() => {
          setFlash(false);
        }, 120);

        startLoop();
      }, delay);
    };

    startLoop();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,

        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.7), transparent 70%)",

        opacity: flash ? 1 : 0,

        pointerEvents: "none",

        transition: "opacity 0.1s",

        mixBlendMode: "screen",
      }}
    />
  );
}