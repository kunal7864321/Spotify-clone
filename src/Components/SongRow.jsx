import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";


const SongRow = ({ song, index }) => {
  const { playSong, toggleLike, likedSongs } = useContext(PlayerContext);

  return (
  <div className="song-row" onDoubleClick={() => playSong(song)}>
    <span>{index}</span>
    <div>
      <p>{song.title}</p>
      <p>{song.artistName}</p>
    </div>
    <span>{song.albumName}</span>
    <span>{song.duration}</span>
    <button onClick={() => toggleLike(song.id)}>
      {likedSongs.has(song.id) ? "❤️" : "🤍"}
    </button>
  </div>
);
};

export default SongRow;