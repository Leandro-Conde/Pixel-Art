import RainLayer from "./layers/RainLayer";
import LightningLayer from "./layers/LightningLayer";
import SteamLayer from "./layers/SteamLayer";

export default function Scene({
  scene,
  vibe,
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND */}

      <img
        src={scene.layers.background}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* CHUVA */}

      {vibe.effects.rain && (
  <RainLayer />
)}

      {/* RELÂMPAGO */}

      {vibe.effects.lightning && (
  <LightningLayer />
)}

      {/* Layers*/}

      {vibe.effects.steam && (
  <SteamLayer />
)}

      {/* PERSONAGEM */}

      {scene.layers.character && (
        <img
          src={scene.layers.character}
          alt=""
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            height: "300px",
          }}
        />
      )}

      {/* WEATHER */}

      {scene.layers.weather && (
        <img
          src={scene.layers.weather}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      )}

      {/* OVERLAY */}

      {scene.layers.overlay && (
        <img
          src={scene.layers.overlay}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}