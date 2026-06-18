export default function SongPlayer({
  status,
  currentTime,
  duration,
  onPlay,
  onPause,
  onStop,
  onSeek,
  onNext,
  onPrev,
}) {

  const formatTime = (seconds) => {
    const mins =
      Math.floor(seconds / 60);

    const secs =
      Math.floor(seconds % 60);

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

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
        <button onClick={onPrev}>
          ⏮
        </button>

        <button onClick={onPlay}>
          ▶
        </button>

        <button onClick={onPause}>
          ⏸
        </button>

        <button onClick={onStop}>
          ⏹
        </button>

        <button onClick={onNext}>
          ⏭
        </button>

        <button
          onClick={() =>
            setShowPlaylist(!showPlaylist)
          }
        >
          🎵
        </button>

        <button
    onClick={() =>
        setShuffle(!shuffle)
      }
    >
      🔀
    </button>
    
    <button
    onClick={() =>
      setRepeat(!repeat)
    }
  >
    🔁
  </button>

      </div>

      <div
        style={{
          marginTop: "15px",
        }}
      >
        {formatTime(currentTime)}
        {" / "}
        {formatTime(duration)}
      </div>

      <div

onClick={(e) => {

  const rect =
    e.currentTarget.getBoundingClientRect();

  const clickX =
    e.clientX - rect.left;

  const percentage =
    (clickX / rect.width) * 100;

  onSeek(percentage);
}}

        style={{
          width: "100%",
          height: "10px",
          background: "#333",
          borderRadius: "5px",
          overflow: "hidden",
          marginTop: "8px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4caf50",
          }}
        />
      </div>
    </div>
  );
}
