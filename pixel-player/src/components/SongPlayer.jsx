import { Howl } from "howler";
import { useState } from "react";

export default function SongPlayer({ song }) {
  const [sound, setSound] = useState(null);

  const [status, setStatus] =
    useState("Parado");

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
        src: [song.file],
        html5: true,
        volume: 0.7,
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

  return (
    <div
      style={{
        marginTop: "15px",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        Status: {status}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={playSong}>
          ▶ Play
        </button>

        <button onClick={pauseSong}>
          ⏸ Pause
        </button>

        <button onClick={stopSong}>
          ⏹ Stop
        </button>
      </div>
    </div>
  );
}