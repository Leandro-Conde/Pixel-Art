export default function CharacterLayer({ src }) {
    if (!src) return null;
  
    return (
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "300px",
        }}
      />
    );
  }