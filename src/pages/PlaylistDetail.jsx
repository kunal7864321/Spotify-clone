import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { PLAYLISTS, getSongById } from "../data/data";
import SongRow from "../Components/SongRow";
import styles from "./PlaylistDetail.module.css";

export default function PlaylistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { playSong } = useContext(PlayerContext);

  const playlist = PLAYLISTS.find((pl) => pl.id === id);
  const songs = playlist ? playlist.songs.map(getSongById).filter(Boolean) : [];
  const [shuffleOn, setShuffleOn] = useState(false);

  useEffect(() => {
    document.title = playlist ? `${playlist.name} – Spotify` : "Spotify";
  }, [playlist]);

  const handlePlayAll = () => {
    if (songs.length > 0) playSong(songs[0]);
  };

  if (!playlist) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundIcon}>🎵</p>
        <h2 className={styles.notFoundTitle}>Playlist not found</h2>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const coverSong = songs.find((s) => s.image);

  return (
    <div className={styles.playlistDetail}>
      <div className={styles.header}>
        <div className={styles.coverWrap}>
          {playlist.image || coverSong?.image ? (
            <img
              src={playlist.image || coverSong.image}
              alt={playlist.name}
              className={styles.coverImg}
            />
          ) : (
            <div className={styles.coverFallback}>🎵</div>
          )}
        </div>
        <div className={styles.headerInfo}>
          <p className={styles.playlistLabel}>Playlist</p>
          <h1 className={styles.playlistName}>{playlist.name}</h1>
          {playlist.description && (
            <p className={styles.playlistDesc}>{playlist.description}</p>
          )}
          <p className={styles.songCount}>
            {songs.length} {songs.length === 1 ? "song" : "songs"}
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          id="playlist-play-all-btn"
          className={styles.playAllBtn}
          onClick={handlePlayAll}
          aria-label="Play all songs"
        >
          ▶ Play All
        </button>
        <button
          id="playlist-shuffle-btn"
          className={`${styles.shuffleBtn} ${shuffleOn ? styles.shuffleBtnOn : ""}`}
          onClick={() => setShuffleOn((prev) => !prev)}
          aria-pressed={shuffleOn}
          aria-label="Toggle shuffle"
          title="Shuffle"
        >
          ⇄ Shuffle
        </button>
      </div>

      <div className={styles.songListHeader}>
        <span className={styles.colIndex}>#</span>
        <span className={styles.colTitle}>Title</span>
        <span className={styles.colAlbum}>Album</span>
        <span className={styles.colDuration}>Duration</span>
        <span className={styles.colLike} />
      </div>
      <div className={styles.divider} />

      <div className={styles.songList}>
        {songs.length === 0 ? (
          <p className={styles.emptyMsg}>This playlist has no songs yet.</p>
        ) : (
          songs.map((song, idx) => (
            <SongRow key={song.id} song={song} index={idx + 1} />
          ))
        )}
      </div>
    </div>
  );
}
