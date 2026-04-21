import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";


const SongRow = ({ song, index }) => {
  const { playSong, togglePlay, toggleLike, likedSongs, currentSong, isPlaying } = useContext(PlayerContext);

  const isCurrentSong = currentSong?.id === song.id;

  return (
  <div className={`song-row ${isCurrentSong ? 'playing' : ''}`} onClick={() => playSong(song)}>
    <span className={isCurrentSong && isPlaying ? 'playing-indicator' : ''}>
      {isCurrentSong ? (
        isPlaying ? (
          <span 
            className="pause-btn-doodle" 
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            title="Pause"
          >
            ⏸
          </span>
        ) : (
          <span className="play-btn-doodle">▶</span>
        )
      ) : index}
    </span>
    <div>
      <p className={isCurrentSong ? 'text-green' : ''}>{song.title}</p>
      <p>{song.artistName}</p>
    </div>
    <span>{song.albumName}</span>
    <span>{song.duration}</span>
    <button onClick={(e) => { e.stopPropagation(); toggleLike(song.id); }}>
      {likedSongs.has(song.id) ? "❤️" : "🤍"}
    </button>
  </div>
 );
};

export default SongRow;