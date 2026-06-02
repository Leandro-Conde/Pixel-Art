import { useState } from "react";
import { vibes } from "./data/vibes";
import { scenes } from "./data/scenes";

import Scene from "./components/Scene";

function App() {
  const [currentVibe, setCurrentVibe] =
    useState(vibes[0]);

  const currentScene = scenes.find(
    (scene) =>
      scene.id === currentVibe.sceneId
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        position: "relative",

        overflow: "hidden",
      }}
    >
      <Scene scene={currentScene} />

      {/* TOPO */}

      <div
        style={{
          position: "relative",

          zIndex: 10,

          padding: "20px",

          color: "white",

          fontSize: "24px",

          fontWeight: "bold",
        }}
      >
        Pixel Player
      </div>

      {/* CENTRO */}

      <div
        style={{
          position: "relative",

          zIndex: 10,

          display: "flex",

          justifyContent: "center",

          marginTop: "100px",
        }}
      >
        <div
          style={{
            width: "500px",

            background: "rgba(0,0,0,0.7)",

            color: "white",

            padding: "20px",

            borderRadius: "10px",
          }}
        >
          <h2>{currentVibe.name}</h2>

          <p>
            Cena atual: {currentScene.id}
          </p>
        </div>
      </div>

      {/* RODAPÉ */}

      <div
        style={{
          position: "absolute",

          bottom: "20px",

          left: "20px",

          display: "flex",

          gap: "10px",

          zIndex: 10,
        }}
      >
        {vibes.map((vibe) => (
          <button
            key={vibe.id}
            onClick={() =>
              setCurrentVibe(vibe)
            }
          >
            {vibe.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;