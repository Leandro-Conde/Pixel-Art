export default function SongList({
    songs,
    onSelect,
  }) {
    return (
      <div>
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => onSelect(song)}
          >
            {song.title}
          </button>
        ))}
      </div>
    );
  }