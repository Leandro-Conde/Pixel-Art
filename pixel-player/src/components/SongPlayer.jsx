import { Howl } from "howler";
import { useState } from "react";

export default function SongPlayer({ song }) {
  const [sound, setSound] = useState(null);

  const playSong = () => {
    if (sound) {
      sound.stop();
    }

    const newSound = new Howl({
      src: [song.file],
      html5: true,
      volume: 0.7,
    });

    newSound.play();

    setSound(newSound);
  };

  const stopSong = () => {
    if (sound) {
      sound.stop();
    }
  };

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={playSong}>
        ▶ Play
      </button>

      <button onClick={stopSong}>
        ⏹ Stop
      </button>
    </div>
  );
}