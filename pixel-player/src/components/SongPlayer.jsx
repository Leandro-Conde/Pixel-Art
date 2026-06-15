export default function SongPlayer({
  status,
  onPlay,
  onPause,
  onStop,
}) {
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
    </div>
  );
}