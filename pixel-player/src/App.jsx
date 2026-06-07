import { useState } from "react";

import { vibes } from "./data/vibes";
import { scenes } from "./data/scenes";
import { songs } from "./data/songs";

import Scene from "./components/Scene";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

function App() {
  const [currentVibe, setCurrentVibe] =
    useState(vibes[0]);

  const [currentSong, setCurrentSong] =
    useState(songs[0]);

  const [isFading, setIsFading] =
    useState(false);

  const currentScene = scenes.find(
    (scene) =>
      scene.id === currentVibe.sceneId
  );

  const changeVibe = (newVibe) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentVibe(newVibe);

      setTimeout(() => {
        setIsFading(false);
      }, 50);

    }, 500);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CENA */}

      <div
        style={{
          opacity: isFading ? 0 : 1,
          transition: "opacity 0.5s ease",
          width: "100%",
          height: "100%",
        }}
      >
        <Scene
          scene={currentScene}
          vibe={currentVibe}
        />
      </div>

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
    position: "absolute",

    top: "50%",

    left: "50%",

    transform: "translate(-50%, -50%)",

    zIndex: 999,
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
    <h2>{currentSong.title}</h2>

    <p>
      Vibe: {currentVibe.name}
    </p>

    <p>
      Cena atual: {currentScene.id}
    </p>

    <SongPlayer
      song={currentSong}
    />
  </div>
</div>

      {/* LISTA DE MÚSICAS */}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 10,
        }}
      >
        <SongList
          songs={songs}
          onSelect={(song) => {
            setCurrentSong(song);

            const vibe = vibes.find(
              (v) => v.id === song.vibeId
            );

            if (vibe) {
              changeVibe(vibe);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;