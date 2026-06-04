export default function RainLayer() {
    const drops = Array.from({ length: 120 });
  
    return (
      <>
        {drops.map((_, index) => (
          <div
            key={index}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random()}s`,
            }}
          />
        ))}
      </>
    );
  }