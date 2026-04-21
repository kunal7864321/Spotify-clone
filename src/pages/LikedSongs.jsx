import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { SONGS } from '../data/data';
import './LikedSongs.css';

const HeartFilledIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#1db954" stroke="#1db954" strokeWidth="1">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
);

    </svg>
);

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const ShuffleIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
    </svg>
);

const ClockIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const MusicFallback = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" opacity="0.5">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
);

export default function LikedSongs() {
    const { likedSongs, toggleLike, playSong, isPlaying, currentSong } = useContext(PlayerContext);
    const navigate = useNavigate();


    const likedSongsList = SONGS.filter(song => likedSongs.has(song.id));


    const handlePlayAll = () => {
        if (likedSongsList.length > 0) {
            playSong(likedSongsList[0]);
        }
    };

    return (
        <div className="liked-page">
            {}
            <div className="liked-page__hero">
                {}
                <div className="liked-page__hero-cover">
                    <HeartFilledIcon size={80} />
                </div>

                {}
                <div className="liked-page__hero-info">
                    <p className="liked-page__hero-label">Playlist</p>
                    <h2 className="liked-page__hero-title">Liked Songs</h2>
                    <p className="liked-page__hero-meta">
                        {likedSongsList.length} {likedSongsList.length === 1 ? 'song' : 'songs'}
                    </p>
                </div>
            </div>

            {}
            {likedSongsList.length > 0 && (
                <div className="liked-page__actions">
                    <button
                        className="liked-page__play-btn"
                        onClick={handlePlayAll}
                        aria-label="Play all liked songs"
                    >
                        <PlayIcon />
                    </button>

                    <button
                        className="liked-page__shuffle-btn"
                        aria-label="Shuffle liked songs"
                        title="Shuffle"
                    >
                        <ShuffleIcon />
                    </button>
                </div>
            )}

            {}
            {likedSongsList.length > 0 ? (
                <div className="liked-page__table-wrap">
                    {}
                    <div className="liked-page__table-header" role="row">
                        <span className="liked-page__th liked-page__th--index">#</span>
                        <span className="liked-page__th liked-page__th--title">Title</span>
                        <span className="liked-page__th liked-page__th--album">Album</span>
                        <span className="liked-page__th liked-page__th--duration">
                            <ClockIcon />
                        </span>
                    </div>

                    <div className="liked-page__divider" />

                    {}
                    <ul className="liked-page__list">
                        {likedSongsList.map((song, index) => {
                            const isCurrentSong = currentSong?.id === song.id;

                            return (
                                <li
                                    key={song.id}
                                    className={`liked-page__row${isCurrentSong ? ' liked-page__row--active' : ''}`}
                                >
                                    {}
                                    <div className="liked-page__row-index">
                                        <span className="liked-page__row-num">
                                            {isCurrentSong && isPlaying ? '▶' : index + 1}
                                        </span>
                                    </div>

                                    {}
                                    <div className="liked-page__row-title">
                                        <div
                                            className="liked-page__thumb"
                                            onClick={() => playSong(song)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === 'Enter' && playSong(song)}
                                            aria-label={`Play ${song.title}`}
                                        >
                                            {song.image ? (
                                                <img
                                                    src={song.image}
                                                    alt={song.title}
                                                    className="liked-page__thumb-img"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="liked-page__thumb-fallback">
                                                    <MusicFallback />
                                                </div>
                                            )}
                                            {}
                                            <div className="liked-page__thumb-overlay">
                                                <PlayIcon />
                                            </div>
                                        </div>

                                        <div className="liked-page__song-info">
                                            <button
                                                className="liked-page__song-title"
                                                onClick={() => playSong(song)}
                                            >
                                                {song.title}
                                            </button>
                                            <button
                                                className="liked-page__song-artist"
                                                onClick={() => navigate(`/artist/${song.artistId}`)}
                                            >
                                                {song.artistName}
                                            </button>
                                        </div>
                                    </div>

                                    {}
                                    <div className="liked-page__row-album">
                                        <button
                                            className="liked-page__album-name"
                                            onClick={() => navigate(`/playlist/${song.albumId}`)}
                                        >
                                            {song.albumName}
                                        </button>
                                    </div>

                                    {}
                                    <div className="liked-page__row-duration">
                                        <button
                                            className="liked-page__unlike-btn"
                                            onClick={() => toggleLike(song.id)}
                                            aria-label="Remove from liked songs"
                                            title="Remove from Liked Songs"
                                        >
                                            <HeartFilledIcon size={16} />
                                        </button>
                                        <span className="liked-page__duration">{song.duration}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (

                <div className="empty-state">
                    <span className="empty-state__icon">💚</span>
                    <p className="empty-state__title">Songs you like will appear here</p>
                    <p className="empty-state__desc">
                        Save songs by tapping the heart icon next to any song.
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate('/search')}>
                        Find songs
                    </button>
                </div>
            )}
        </div>
    );
}
