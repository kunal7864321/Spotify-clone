import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Sidebar.css';

const HomeIcon = ({ filled }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
    </svg>
);

const SearchIcon = ({ filled }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const LibraryIcon = ({ filled }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
);

const HeartIcon = ({ filled }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? '#1db954' : 'none'} stroke={filled ? '#1db954' : 'currentColor'} strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
);

const PlusIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const CollapseIcon = ({ collapsed }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        {collapsed
            ? <path d="M9 18l6-6-6-6" />
            : <path d="M15 18l-6-6 6-6" />}
    </svg>
);

const MusicNoteIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M9 3v11.5a3.5 3.5 0 103.5-3.5H10V3H9zm1 9.5h2.5a2.5 2.5 0 110 5H10v-5z" />
        <path d="M10 3h9v5h-9z" />
    </svg>
);

export default function Sidebar() {
    const { sidebarCollapsed, setSidebarCollapsed, userPlaylists, createPlaylist } = useContext(AppContext);
    const navigate = useNavigate();


    const handleCreatePlaylist = () => {
        const name = `My Playlist #${userPlaylists.length + 1}`;
        createPlaylist(name);
    };


    const navLinkClass = ({ isActive }) =>
        `sidebar__nav-link${isActive ? ' sidebar__nav-link--active' : ''}`;

    return (
        <aside className={`sidebar${sidebarCollapsed ? ' sidebar--collapsed' : ''}`}>
            {}
            <div className="sidebar__logo" onClick={() => navigate('/')}>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#1db954">
                    <circle cx="12" cy="12" r="12" fill="#1db954" />
                    <path d="M7 15.5c2.5-1.5 6-2 8-1" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M6 12c3-2 7.5-2.5 10-1" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M5.5 8.5c3.5-2.5 9-3 12-1.5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                {!sidebarCollapsed && <span className="sidebar__logo-text">Spotify</span>}
            </div>

            {}
            <nav className="sidebar__nav">
                <NavLink to="/" end className={navLinkClass}>
                    <span className="sidebar__nav-icon"><HomeIcon /></span>
                    {!sidebarCollapsed && <span className="sidebar__nav-label">Home</span>}
                </NavLink>

                <NavLink to="/search" className={navLinkClass}>
                    <span className="sidebar__nav-icon"><SearchIcon /></span>
                    {!sidebarCollapsed && <span className="sidebar__nav-label">Search</span>}
                </NavLink>
            </nav>

            {}
            <div className="sidebar__library">
                {}
                <div className="sidebar__library-header">
                    <NavLink to="/library" className={navLinkClass}>
                        <span className="sidebar__nav-icon"><LibraryIcon /></span>
                        {!sidebarCollapsed && <span className="sidebar__nav-label">Your Library</span>}
                    </NavLink>

                    {!sidebarCollapsed && (
                        <button
                            className="sidebar__icon-btn"
                            onClick={handleCreatePlaylist}
                            title="Create playlist"
                            aria-label="Create playlist"
                        >
                            <PlusIcon />
                        </button>
                    )}
                </div>

                {}
                {!sidebarCollapsed && (
                    <NavLink to="/liked" className="sidebar__liked">
                        <span className="sidebar__liked-icon">
                            <HeartIcon filled />
                        </span>
                        <div className="sidebar__liked-info">
                            <span className="sidebar__liked-title">Liked Songs</span>
                            <span className="sidebar__liked-sub">Playlist</span>
                        </div>
                    </NavLink>
                )}

                {}
                {!sidebarCollapsed && <div className="sidebar__divider" />}

                {}
                {!sidebarCollapsed && (
                    <ul className="sidebar__playlist-list">
                        {userPlaylists.map(pl => (
                            <li key={pl.id}>
                                <NavLink
                                    to={`/playlist/${pl.id}`}
                                    className={({ isActive }) =>
                                        `sidebar__playlist-item${isActive ? ' sidebar__playlist-item--active' : ''}`
                                    }
                                >
                                    <span className="sidebar__playlist-icon"><MusicNoteIcon /></span>
                                    <span className="sidebar__playlist-name">{pl.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {}
            <button
                className="sidebar__collapse-btn"
                onClick={() => setSidebarCollapsed(prev => !prev)}
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-label="Toggle sidebar"
            >
                <CollapseIcon collapsed={sidebarCollapsed} />
            </button>
        </aside>
    );
}
