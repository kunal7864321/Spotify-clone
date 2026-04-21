import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PLAYLISTS, SONGS } from '../data/data';
import PlaylistCard from '../Components/PlaylistCard';
import './Library.css';

const PlusIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const HeartFilledIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#1db954" stroke="#1db954" strokeWidth="1">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
);

export default function Library() {
    const { userPlaylists, createPlaylist } = useContext(AppContext);


    const allPlaylists = [...PLAYLISTS, ...userPlaylists];


    const handleCreatePlaylist = () => {
        const name = `My Playlist #${userPlaylists.length + 1}`;
        createPlaylist(name);
    };

    return (
        <div className="library-page">
            {}
            <div className="library-page__header">
                <div className="library-page__header-left">
                    <h2 className="library-page__heading">Your Library</h2>
                    <p className="library-page__sub">
                        {allPlaylists.length} playlists
                    </p>
                </div>

                <div className="library-page__header-right">
                    {}
                    <button
                        className="library-page__create-btn"
                        onClick={handleCreatePlaylist}
                        aria-label="Create playlist"
                        title="Create new playlist"
                    >
                        <PlusIcon />
                        <span>Create playlist</span>
                    </button>
                </div>
            </div>

            {}
            <section className="library-page__liked-shortcut" aria-label="Liked Songs">
                <div className="library-page__liked-cover">
                    <HeartFilledIcon />
                </div>
                <div className="library-page__liked-info">
                    <span className="library-page__liked-title">Liked Songs</span>
                    <span className="library-page__liked-type">Playlist · Pinned</span>
                </div>
                <a
                    href="/liked"
                    className="library-page__liked-link"
                    aria-label="Open Liked Songs"
                >
                    Open
                </a>
            </section>

            {}
            {allPlaylists.length > 0 ? (
                <section className="library-page__section">
                    <h3 className="library-page__section-title">Playlists</h3>
                    <div className="library-page__grid">
                        {allPlaylists.map((pl) => (
                            <PlaylistCard key={pl.id} playlist={pl} songs={SONGS} />
                        ))}
                    </div>
                </section>
            ) : (

                <div className="empty-state">
                    <span className="empty-state__icon">🎵</span>
                    <p className="empty-state__title">Create your first playlist</p>
                    <p className="empty-state__desc">
                        It's easy — we'll help you get started.
                    </p>
                    <button className="btn btn-primary" onClick={handleCreatePlaylist}>
                        Create playlist
                    </button>
                </div>
            )}
        </div>
    );
}
