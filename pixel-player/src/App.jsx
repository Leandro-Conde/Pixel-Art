import { useState, useEffect } from "react";
import { Howl } from "howler";
import "./styles/App.css";


import { vibes } from "./data/vibes";
import { scenes } from "./data/scenes";
import { songs } from "./data/songs";

import Scene from "./components/Scene";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";


function App() {

  const [theme, setTheme] =
  useState("gameboy");

const [showVibe, setShowVibe] =
  useState(true);

const [showScene, setShowScene] =
  useState(true);
  
  const [showClock, setShowClock] =
  useState(true);

  const clock = useClock();

  const [showSettings, setShowSettings] =
  useState(false);
  
  const [showPlayer, setShowPlayer] =
    useState(false);
  
  const [showPlaylist, setShowPlaylist] =
    useState(false);
 
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

      const {
        isFading,
        changeVibe
    }
    =
    useSceneTransition(setCurrentVibe);

    const [currentTime, setCurrentTime] =
  useState(0);

  const [duration, setDuration] =
  useState(0);

  const currentScene = scenes.find(
    (scene) =>
      scene.id === currentVibe.sceneId
  );


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

  
  useKeyboardShortcuts({
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    sound
});
  
  , [
    sound,
    currentSong,
    shuffle,
    repeat
  ]);

  const nextSong = () => {

    let next;
  
    if (shuffle) {
  
      const randomIndex =
        Math.floor(
          Math.random() *
          songs.length
        );
  
      next =
        songs[randomIndex];
  
    } else {
  
      const currentIndex =
        songs.findIndex(
          (song) =>
            song.id === currentSong.id
        );
  
      const nextIndex =
        (currentIndex + 1) %
        songs.length;
  
      next =
        songs[nextIndex];
    }
  
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

  const hidePanels = () => {

    setShowPlayer(false);
  
    setShowPlaylist(false);
  };
  

  return (
    <div className="app-layout">



<div
  className="bottom-hotspot"
  onMouseEnter={() =>
    setShowPlayer(true)
  }
/>

<div
  className="right-hotspot"
  onMouseEnter={() =>
    setShowPlaylist(true)
  }
/>
      {/* CENA */}

      <div
  className="scene-area"
  onMouseMove={hidePanels}
>

<div
  className={
    isFading
      ? "scene-container fade-out"
      : "scene-container fade-in"
  }
>

<div
  className={
    isFading
      ? "scene-container fade-out"
      : "scene-container fade-in"
  }
>
  <Scene
    scene={currentScene}
    vibe={currentVibe}
  />
</div>
  </div>

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
        className={
          showPlayer
            ? "player-panel open"
            : "player-panel"
        }
        onMouseEnter={() =>
          setShowPlayer(true)
        }
      >
      
      <div
        className="player-card"
        style={{
          width:"100%",
          height:"100%",
        }}
      >

  <div
  style={{
    display:"flex",
    gap:"20px",
    alignItems:"flex-start"
  }}
  >

  <img
    className="album-cover"
    src={currentSong.cover}
    alt=""
  />

<PlayerInfo
    currentSong={currentSong}
    currentScene={currentScene}
    currentVibe={currentVibe}
    songs={songs}
    showVibe={showVibe}
    showScene={showScene}
/>

  </div>

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

        
          </div>

        <div className="equalizer">

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        </div>

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

          <div
            className="settings-button"
            onClick={() =>
              setShowSettings(
                !showSettings
              )
            }
          >
            ⚙️
          </div>

          {
  showSettings && (

    <div className="settings-panel">

      <h3>
        Configurações
      </h3>

      <button
        onClick={() =>
          setShowClock(
            !showClock
          )
        }
      >
        Relógio
      </button>

      <button
        onClick={() =>
          setShowVibe(
            !showVibe
          )
        }
      >
        Vibe
      </button>

      <button
        onClick={() =>
          setShowScene(
            !showScene
          )
        }
      >
        Cena
      </button>

    </div>

  )
}

{
  showClock && (
    <div className="pixel-clock">
      {clock}
    </div>
  )
}
  </div>

      </div>

      {/* LISTA DE MÚSICAS */}

  {

    <div
    className={
      showPlaylist
        ? "playlist-panel open"
        : "playlist-panel"
    }
    onMouseEnter={() =>
      setShowPlaylist(true)
    }
  
   >

      <SongList
        songs={songs}
        currentSong={currentSong}
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

  }
  
    </div>
  );
}

export default App;