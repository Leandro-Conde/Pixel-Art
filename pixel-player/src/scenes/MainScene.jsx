import { Application, Graphics } from "@pixi/react";

function Star() {
  return (
    <Graphics
      draw={(g) => {
        g.clear();
        g.beginFill(0xffffff);
        g.drawCircle(0, 0, 2);
        g.endFill();
      }}
      x={Math.random() * window.innerWidth}
      y={Math.random() * window.innerHeight}
    />
  );
}

export default function MainScene() {
  const stars = Array.from({ length: 150 });

  return (
    <Application
      resizeTo={window}
      backgroundColor={0x080412}
    >
      {stars.map((_, i) => (
        <Star key={i} />
      ))}
    </Application>
  );
}