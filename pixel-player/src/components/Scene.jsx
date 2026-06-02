export default function Scene({ scene }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {/* Background */}

      <img
        src={scene.layers.background}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Character */}

      {scene.layers.character && (
        <img
          src={scene.layers.character}
          alt=""
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            height: "300px",
          }}
        />
      )}

      {/* Weather */}

      {scene.layers.weather && (
        <img
          src={scene.layers.weather}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      )}

      {/* Overlay */}

      {scene.layers.overlay && (
        <img
          src={scene.layers.overlay}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}