import { useState } from "react";
import { themes } from "./data/themes";

function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  const currentTheme = themes[themeIndex];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        backgroundImage: `url(${currentTheme.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={() =>
          setThemeIndex(
            (themeIndex + 1) % themes.length
          )
        }
      >
        Trocar Tema
      </button>
    </div>
  );
}

export default App;