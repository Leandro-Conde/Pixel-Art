import "./styles/retro.css";

import Window from "./components/Window";
import Scene from "./components/Scene";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="desktop">
      <Window>
        <Scene />
        <MusicPlayer />
      </Window>
    </div>
  );
}

export default App;