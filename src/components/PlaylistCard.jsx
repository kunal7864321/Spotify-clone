import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import './PlaylistCard.css';

// ---------- Play Button Icon ----------
const PlayIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

// ---------- Music note fallback icon ----------
const MusicIcon = () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" opacity="0.4">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
);

// ---------- PlaylistCard Component ----------
// Props:
//   playlist: { id, name, description, image, songs[] }
//   songs:    full SONGS array to look up first-song image fallback
export default function PlaylistCard({ playlist, songs = [] }) {
    const navigate = useNavigate();
    const { playSong } = useContext(PlayerContext);

    if (!playlist) return null;

    const { id, name, description, image, songs: songIds = [] } = playlist;

    // Resolve a cover image: playlist image → first song's image → null
    const coverImage =
        image ||
        (songIds.length > 0 && songs.find(s => s.id === songIds[0])?.image) ||
        null;

    // Navigate to playlist detail page
    const handleCardClick = () => navigate(`/playlist/${id}`);

    // Play first song in playlist on play button click
    const handlePlay = (e) => {
        e.stopPropagation(); // prevent card navigation
        if (songIds.length === 0) return;
        const firstSong = songs.find(s => s.id === songIds[0]);
        if (firstSong) playSong(firstSong);
    };

    return (
        <article
            className="playlist-card"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
            aria-label={`Open playlist: ${name}`}
        >
            {/* Cover art */}
            <div className="playlist-card__cover">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={`${name} cover`}
                        className="playlist-card__image"
                        loading="lazy"
                    />
                ) : (
                    <div className="playlist-card__image-fallback">
                        <MusicIcon />
                    </div>
                )}

                {/* Hover play button overlay */}
                <div className="playlist-card__overlay">
                    <button
                        className="playlist-card__play-btn"
                        onClick={handlePlay}
                        aria-label={`Play ${name}`}
                        title={`Play ${name}`}
                    >
                        <PlayIcon />
                    </button>
                </div>
            </div>

            {/* Text info */}
            <div className="playlist-card__info">
                <p className="playlist-card__name">{name}</p>
                {description && (
                    <p className="playlist-card__description">{description}</p>
                )}
                <p className="playlist-card__count">
                    {songIds.length} {songIds.length === 1 ? 'song' : 'songs'}
                </p>
            </div>
        </article>
    );
}
