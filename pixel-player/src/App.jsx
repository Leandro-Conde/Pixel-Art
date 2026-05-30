function App() {
  return (
    <div
      style={{
        background: "#12041f",
        height: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          width: "500px",
          border: "4px solid #9d7cff",
          background: "#000",
          padding: "20px",
        }}
      >
        <h2>🎵 Music Box</h2>

        <div
          style={{
            height: "200px",
            border: "2px solid #9d7cff",
            marginBottom: "20px",
          }}
        >
          Pixel Art Area
        </div>

        <button>⏮</button>
        <button>⏸</button>
        <button>⏭</button>
      </div>
    </div>
  );
}

export default App;