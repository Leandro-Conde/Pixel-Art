<div className="player-info">

    <h2>{currentSong.title}</h2>

    <p>{currentSong.artist}</p>

    {
  showVibe && (
    <p>
      Vibe: {currentVibe.name}
    </p>
  )
}

{
  showScene && (
    <p>
      Cena: {currentScene.name}
    </p>
  )
}

    <p>
      Faixa {
        songs.findIndex(
          song => song.id === currentSong.id
        ) + 1
      } de {songs.length}
    </p>

  </div>