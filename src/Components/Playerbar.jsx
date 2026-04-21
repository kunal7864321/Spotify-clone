import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import "./Playerbar.css";

const PlayerBar = () => {
  const {
    currentSong,
    isPlaying,
    progress,
    setProgress,
    volume,
    togglePlay,
    skipNext,
    skipPrevious,
    toggleLike,
    likedSongs,
    setPlayerVolume,
    duration,
  } = useContext(PlayerContext);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (duration) {
      const timer = setInterval(() => {
        setCurrentTime((progress / 100) * duration);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [progress, duration]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return (
    <div className="player-bar">
      <p>No song playing</p>
    </div>
  );

  return (
    <div className="player-bar">
      <div className="player-bar__inner">
        <div className="player-bar__left">
          <img src={currentSong.image} alt={currentSong.title} className="player-bar__cover" />
          <div className="player-bar__info">
            <p className="player-bar__title">{currentSong.title}</p>
            <p className="player-bar__artist">{currentSong.artistName}</p>
          </div>
          <button 
            className={`player-bar__like ${likedSongs.has(currentSong.id) ? 'active' : ''}`}
            onClick={() => toggleLike(currentSong.id)}
          >
            <svg viewBox="0 0 24 24" fill={likedSongs.has(currentSong.id) ? "#1db954" : "none"} stroke={likedSongs.has(currentSong.id) ? "#1db954" : "currentColor"} strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        <div className="player-bar__center">
          <div className="player-bar__controls">
            <button className="player-bar__btn" onClick={skipPrevious}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            <button className={`player-bar__play ${!isPlaying ? 'active' : ''}`} onClick={() => !isPlaying && togglePlay()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <button className={`player-bar__pause ${isPlaying ? 'active' : ''}`} onClick={() => isPlaying && togglePlay()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </button>
            <button className="player-bar__btn" onClick={skipNext}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
          <div className="player-bar__progress">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="player-bar__slider"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-bar__right">
          <svg viewBox="0 0 24 24" fill="currentColor" className="player-bar__volume-icon">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setPlayerVolume(Number(e.target.value))}
            className="player-bar__slider"
          />
        </div>
      </div>
      {isPlaying && <div className="player-bar__doodly"></div>}
    </div>
  );
};

export default PlayerBar;