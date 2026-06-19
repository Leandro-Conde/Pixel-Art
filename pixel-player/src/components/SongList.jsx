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
            className={
              isCurrent
                ? "song-button active-song"
                : "song-button"
            }
          >
            {isCurrent ? "▶ " : ""}
            {song.title}
          </button>
        );

      })}
    </div>
  );
}