import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const PlayerBar = () => {
  const {
    currentSong,
    isPlaying,
    progress,
    setProgress,
    volume,
    togglePlay,
    skipNext,
    toggleLike,
    likedSongs,
    setPlayerVolume,
  } = useContext(PlayerContext);

  if (!currentSong) return (
    <div className="player-bar">
      <p>No song playing</p>
    </div>
  );

  return (
    <div className="player-bar">

      {/* Left - song info */}
      <div className="player-left">
        <img src={currentSong.image} alt={currentSong.title} width="50" />
        <div>
          <p>{currentSong.title}</p>
          <p>{currentSong.artistName}</p>
        </div>
        <button onClick={() => toggleLike(currentSong.id)}>
          {likedSongs.has(currentSong.id) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Center - controls */}
      <div className="player-center">
        <button>⏮</button>
        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={skipNext}>⏭</button>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
        />
      </div>

      {/* Right - volume */}
      <div className="player-right">
        <span>🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setPlayerVolume(Number(e.target.value))}
        />
      </div>

    </div>
  );
};

export default PlayerBar;