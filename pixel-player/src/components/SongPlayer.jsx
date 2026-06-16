export default function SongPlayer({
  status,
  currentTime,
  duration,
  onPlay,
  onPause,
  onStop,
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
        <button onClick={onPlay}>
          ▶ Play
        </button>

        <button onClick={onPause}>
          ⏸ Pause
        </button>

        <button onClick={onStop}>
          ⏹ Stop
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
        style={{
          width: "100%",
          height: "10px",
          background: "#333",
          borderRadius: "5px",
          overflow: "hidden",
          marginTop: "8px",
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