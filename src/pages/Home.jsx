import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { PLAYLISTS, SONGS, ALBUMS } from "../data/data";
import PlaylistCard from "../Components/PlaylistCard";
import styles from "./Home.module.css";

const NEW_RELEASES = ALBUMS.slice(0, 6);

const GENRES = [
  { label: "Bollywood", color: "#e13300", emoji: "🎬" },
  { label: "Romantic", color: "#c11574", emoji: "💝" },
  { label: "Pop", color: "#1e3264", emoji: "🎵" },
  { label: "Hip-Hop", color: "#8d67ab", emoji: "🎤" },
  { label: "Classical", color: "#477d95", emoji: "🎻" },
  { label: "Party", color: "#ba5d07", emoji: "🎉" },
];

export default function Home() {
  const { playSong } = useContext(PlayerContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Spotify – Home";
  }, []);

  const handlePlayAll = () => {
    if (SONGS.length > 0) playSong(SONGS[0]);
  };

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Good Evening 👋</p>
          <h1 className={styles.heroTitle}>Your Music, Your World</h1>
          <p className={styles.heroSub}>
            Discover hand-picked playlists, top artists, and fresh releases —
            all in one place.
          </p>
          <div className={styles.heroActions}>
            <button
              id="hero-play-btn"
              className={styles.heroBtnPrimary}
              onClick={handlePlayAll}
            >
              ▶ Play Something
            </button>
            <button
              id="hero-explore-btn"
              className={styles.heroBtnSecondary}
              onClick={() => navigate("/search")}
            >
              Explore Music
            </button>
          </div>
        </div>
        <div className={styles.heroDecor}>
          {GENRES.slice(0, 3).map((g) => (
            <span
              key={g.label}
              className={styles.heroGenrePill}
              style={{ background: g.color }}
            >
              {g.emoji} {g.label}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Playlists</h2>
          <button
            className={styles.seeAllBtn}
            onClick={() => navigate("/library")}
          >
            See all
          </button>
        </div>
        <div className={styles.playlistGrid}>
          {PLAYLISTS.map((pl) => (
            <PlaylistCard key={pl.id} playlist={pl} songs={SONGS} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recently Played</h2>
        </div>
        <div className={styles.recentRow}>
          {SONGS.slice(0, 8).map((song) => (
            <div
              key={song.id}
              id={`recent-song-${song.id}`}
              className={styles.recentCard}
              onClick={() => playSong(song)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && playSong(song)}
              aria-label={`Play ${song.title}`}
            >
              <div className={styles.recentCover}>
                {song.image ? (
                  <img
                    src={song.image}
                    alt={song.title}
                    className={styles.recentImg}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.recentImgFallback}>🎵</div>
                )}
                <div className={styles.recentOverlay}>
                  <span className={styles.recentPlayIcon}>▶</span>
                </div>
              </div>
              <p className={styles.recentTitle}>{song.title}</p>
              <p className={styles.recentArtist}>{song.artistName}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>New Releases</h2>
        </div>
        <div className={styles.releasesGrid}>
          {NEW_RELEASES.map((album) => (
            <div
              key={album.id}
              id={`album-${album.id}`}
              className={styles.releaseCard}
              onClick={() => navigate(`/artist/${album.artistId}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/artist/${album.artistId}`)
              }
              aria-label={`View ${album.name}`}
            >
              <div className={styles.releaseCover}>
                {album.image ? (
                  <img
                    src={album.image}
                    alt={album.name}
                    className={styles.releaseImg}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.releaseImgFallback}>💿</div>
                )}
              </div>
              <p className={styles.releaseName}>{album.name}</p>
              <p className={styles.releaseArtist}>{album.artistName}</p>
              <p className={styles.releaseYear}>{album.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
