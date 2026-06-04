import { useEffect, useState } from "react";

export default function LightningLayer() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      const delay =
        5000 + Math.random() * 15000;

      setTimeout(() => {
        setFlash(true);

        setTimeout(() => {
          setFlash(false);
        }, 120);

        triggerLightning();
      }, delay);
    };

    triggerLightning();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,

        background: "white",

        opacity: flash ? 0.35 : 0,

        transition: "opacity 0.1s",
      }}
    />
  );
}