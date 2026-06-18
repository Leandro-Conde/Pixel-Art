export default function SongList({
  songs,
  currentSong,
  onSelect,
}) {
  return (
    <div>
      {songs.map((song) => {
        const isCurrent =
          song.id === currentSong.id;

        return (
          <button
            key={song.id}
            onClick={() => onSelect(song)}
            style={{
              display: "block",
              marginBottom: "5px",

              background: isCurrent
                ? "#4caf50"
                : "#222",

              color: "white",

              border: "none",

              padding: "8px",

              cursor: "pointer",

              borderRadius: "5px",

              width: "200px",

              textAlign: "left",
            }}

          >

<button
  key={song.id}
  onClick={() => onSelect(song)}
  className={
    song.id === currentSong.id
      ? "active-song"
      : ""
  }
>
  {song.title}
</button>

            {isCurrent
              ? "▶ "
              : ""}

            {song.title}
          </button>
        );
      })}
    </div>
  );
}