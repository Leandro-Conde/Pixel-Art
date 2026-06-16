import { useState, useEffect } from "react";
import { Howl } from "howler";


import { vibes } from "./data/vibes";
import { scenes } from "./data/scenes";
import { songs } from "./data/songs";

import Scene from "./components/Scene";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

function App() {

  const [repeat, setRepeat] =
  useState(false);

  const [shuffle, setShuffle] =
  useState(false);
  
  const [currentVibe, setCurrentVibe] =
    useState(vibes[0]);

  const [currentSong, setCurrentSong] =
    useState(songs[0]);

  const [sound, setSound] =
    useState(null);

  const [status, setStatus] =
    useState("Parado");

  const [volume, setVolume] =
    useState(0.7);

  const [isFading, setIsFading] =
    useState(false);

    const [currentTime, setCurrentTime] =
  useState(0);

const [duration, setDuration] =
  useState(0);

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

  const playSong = () => {
    if (sound) {

      if (sound.playing()) {
        return;
      }

      sound.play();

      setStatus("Tocando");

      return;
    }

    const newSound = new Howl({
      src: [currentSong.file],
      html5: true,
      volume,
    });

    newSound.play();

    setSound(newSound);

    setStatus("Tocando");
  };

  const pauseSong = () => {
    if (sound) {
      sound.pause();

      setStatus("Pausado");
    }
  };

  const stopSong = () => {
    if (sound) {
      sound.stop();

      setStatus("Parado");
    }
  };

  const seekSong = (percentage) => {
    if (!sound || !duration) return;
  
    const newTime =
      (percentage / 100) * duration;
  
    sound.seek(newTime);
  
    setCurrentTime(newTime);
  };

  const prevSong = () => {

    const currentIndex =
      songs.findIndex(
        (song) =>
          song.id === currentSong.id
      );
  
    const prevIndex =
      currentIndex === 0
        ? songs.length - 1
        : currentIndex - 1;
  
    const prev =
      songs[prevIndex];
  
    if (sound) {
      sound.stop();
    }
  
    const newSound = new Howl({
      src: [prev.file],
      html5: true,
      volume,
    });
  
    newSound.play();
  
    setSound(newSound);
  
    setCurrentSong(prev);
  
    setStatus("Tocando");
  
    const vibe = vibes.find(
      (v) =>
        v.id === prev.vibeId
    );
  
    if (vibe) {
      changeVibe(vibe);
    }
  };

  useEffect(() => {

    if (!sound) return;

sound.once("end", () => {
  nextSong();

  if (shuffle) {

    const randomIndex =
      Math.floor(
        Math.random() *
        songs.length
      );
  
    next = songs[randomIndex];
  
  } else {
  
    const nextIndex =
      (currentIndex + 1) %
      songs.length;
  
    next = songs[nextIndex];
  }

  sound.once("end", () => {

    if (repeat) {
  
      sound.play();
  
      return;
    }
  
    nextSong();
  });
});

    if (!sound) return;
  
    const interval = setInterval(() => {
      setCurrentTime(sound.seek() || 0);
  
      setDuration(sound.duration() || 0);
    }, 500);
  
    return () => clearInterval(interval);
  }, [sound]);

  const nextSong = () => {

    const currentIndex =
      songs.findIndex(
        (song) =>
          song.id === currentSong.id
      );
  
    const nextIndex =
      (currentIndex + 1) %
      songs.length;
  
    const next =
      songs[nextIndex];
  
    if (sound) {
      sound.stop();
    }
  
    const newSound = new Howl({
      src: [next.file],
      html5: true,
      volume,
    });
  
    newSound.play();
  
    setSound(newSound);
  
    setCurrentSong(next);
  
    setStatus("Tocando");
  
    const vibe = vibes.find(
      (v) =>
        v.id === next.vibeId
    );
  
    if (vibe) {
      changeVibe(vibe);
    }
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

      <img
          src={currentSong.cover}
          alt=""
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />

          <h2>{currentSong.title}</h2>

          <p>
            Vibe: {currentVibe.name}
          </p>

          <p>
            Cena atual: {currentScene.id}
          </p>

          <SongPlayer
            status={status}
            currentTime={currentTime}
            duration={duration}
            onPlay={playSong}
            onPause={pauseSong}
            onStop={stopSong}
            onSeek={seekSong}
            onNext={nextSong}
            onPrev={prevSong}
          />

          <div
            style={{
              marginTop: "15px",
            }}
          >
            <div>
              🔊 {Math.round(volume * 100)}%
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                const newVolume =
                  Number(e.target.value);

                setVolume(newVolume);

                if (sound) {
                  sound.volume(newVolume);
                }
              }}
              style={{
                width: "100%",
                marginTop: "5px",
              }}
            />
          </div>
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

            if (sound) {
              sound.stop();
            }

            const newSound = new Howl({
              src: [song.file],
              html5: true,
              volume,
            });

            newSound.play();

            setSound(newSound);

            setStatus("Tocando");

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