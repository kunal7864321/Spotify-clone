import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALBUMS, getSongsByArtist, getArtistById } from "../data/data";
import SongRow from "../Components/SongRow";
import styles from "./ArtistDetail.module.css";

export default function ArtistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);

  const artist = getArtistById(id);
  const topTracks = getSongsByArtist(id);
  const discography = ALBUMS.filter((al) => al.artistId === id);

  useEffect(() => {
    document.title = artist ? `${artist.name} – Spotify` : "Spotify";
  }, [artist]);

  if (!artist) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundIcon}>🎤</p>
        <h2 className={styles.notFoundTitle}>Artist not found</h2>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const handlePlayTop = () => {
    // topTracks are handled by SongRow play functionality or a local context
  };

  return (
    <div className={styles.artistDetail}>
      <div
        className={styles.hero}
        style={
          artist.image
            ? { backgroundImage: `url(${artist.image})` }
            : undefined
        }
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Artist</p>
          <h1 className={styles.heroName}>{artist.name}</h1>
          <p className={styles.heroListeners}>
            {artist.monthlyListeners} monthly listeners
          </p>
          <p className={styles.heroTrackCount}>
            {topTracks.length} {topTracks.length === 1 ? "track" : "tracks"} available
          </p>
          <div className={styles.heroGenres}>
            {artist.genres.map((g) => (
              <span key={g} className={styles.genreTag}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          id="artist-play-btn"
          className={styles.playBtn}
          onClick={handlePlayTop}
          aria-label={`Play ${artist.name}`}
        >
          ▶ Play
        </button>
        <button
          id="artist-follow-btn"
          className={`${styles.followBtn} ${following ? styles.followBtnActive : ""}`}
          onClick={() => setFollowing((prev) => !prev)}
          aria-pressed={following}
          aria-label={following ? "Unfollow artist" : "Follow artist"}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Popular</h2>
        <div className={styles.tracksList}>
          {topTracks.length === 0 ? (
            <p className={styles.emptyMsg}>No tracks available.</p>
          ) : (
            topTracks.map((song, idx) => (
              <SongRow key={song.id} song={song} index={idx + 1} />
            ))
          )}
        </div>
      </section>

      {discography.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Discography</h2>
          <div className={styles.discographyGrid}>
            {discography.map((album) => (
              <div
                key={album.id}
                id={`album-disc-${album.id}`}
                className={styles.albumCard}
                role="button"
                tabIndex={0}
                aria-label={`View album ${album.name}`}
              >
                <div className={styles.albumCover}>
                  {album.image ? (
                    <img
                      src={album.image}
                      alt={album.name}
                      className={styles.albumImg}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.albumFallback}>💿</div>
                  )}
                </div>
                <p className={styles.albumName}>{album.name}</p>
                <p className={styles.albumYear}>{album.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
