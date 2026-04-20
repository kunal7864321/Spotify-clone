import { useContext, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { AppContext } from '../context/AppContext';
import './Navbar.css';

const BackIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
);

const ForwardIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
);

const UserIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
);

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h5.66V9h3.84L12 2z" />
    </svg>
);

const BellIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
);

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();


    const getPageTitle = useCallback(() => {
        const path = location.pathname;
        if (path === '/') return 'Good Evening 👋';
        if (path === '/search') return 'Search';
        if (path === '/library') return 'Your Library';
        if (path === '/liked') return 'Liked Songs';
        if (path.startsWith('/playlist')) return 'Playlist';
        if (path.startsWith('/artist')) return 'Artist';
        return '';
    }, [location.pathname]);


    const getBgColor = useCallback(() => {
        const path = location.pathname;
        if (path === '/') return 'rgba(29,185,84,0.15)';
        if (path === '/liked') return 'rgba(69,10,245,0.2)';
        if (path === '/library') return 'rgba(255,100,0,0.1)';
        return 'rgba(18,18,18,0.85)';
    }, [location.pathname]);

    return (
        <header className="navbar" style={{ '--navbar-tint': getBgColor() }}>
            {}
            <div className="navbar__nav-controls">
                <button
                    className="navbar__nav-btn"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                    title="Go back"
                >
                    <BackIcon />
                </button>
                <button
                    className="navbar__nav-btn"
                    onClick={() => navigate(1)}
                    aria-label="Go forward"
                    title="Go forward"
                >
                    <ForwardIcon />
                </button>
            </div>

            {}
            <h1 className="navbar__title">{getPageTitle()}</h1>

            {}
            <div className="navbar__actions">
                {}
                <button className="navbar__action-btn navbar__action-btn--text" title="Install app">
                    <DownloadIcon />
                    <span>Install App</span>
                </button>

                {}
                <button className="navbar__action-icon-btn" aria-label="Notifications" title="Notifications">
                    <BellIcon />
                </button>

                {}
                <button className="navbar__avatar" aria-label="User profile" title="Profile">
                    <UserIcon />
                    <span className="navbar__avatar-label">Ishita</span>
                </button>
            </div>
        </header>
    );
}
