import { useContext, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './SearchBar.css';

// ---------- Icons ----------
const SearchIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const ClearIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);

// ---------- SearchBar Component ----------
// Props:
//   placeholder: string — input placeholder text
//   onSearch:    optional callback(query) triggered on every keystroke
//   autoNavigate: if true, navigates to /search when user types (default true)
export default function SearchBar({
    placeholder = 'What do you want to listen to?',
    onSearch,
    autoNavigate = true,
}) {
    const { searchQuery, setSearchQuery } = useContext(AppContext);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    // Controlled change handler
    const handleChange = useCallback(
        (e) => {
            const val = e.target.value;
            setSearchQuery(val);

            // Bubble up to parent if provided
            if (onSearch) onSearch(val);

            // Navigate to search page the first time the user types
            if (autoNavigate && val.trim().length > 0) {
                navigate('/search', { replace: true });
            }
        },
        [setSearchQuery, onSearch, autoNavigate, navigate]
    );

    // Clear the input
    const handleClear = useCallback(() => {
        setSearchQuery('');
        if (onSearch) onSearch('');
        inputRef.current?.focus();
    }, [setSearchQuery, onSearch]);

    // Submit (Enter key)
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') {
                handleClear();
            }
        },
        [handleClear]
    );

    return (
        <div className={`search-bar${searchQuery ? ' search-bar--has-value' : ''}`}>
            {/* Search icon */}
            <span className="search-bar__icon search-bar__icon--search" aria-hidden="true">
                <SearchIcon />
            </span>

            {/* Controlled input */}
            <input
                ref={inputRef}
                id="global-search-input"
                type="search"
                className="search-bar__input"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                aria-label="Search songs, artists, or playlists"
                autoComplete="off"
                spellCheck="false"
            />

            {/* Clear button — only visible when text is entered */}
            {searchQuery && (
                <button
                    className="search-bar__clear-btn"
                    onClick={handleClear}
                    aria-label="Clear search"
                    title="Clear"
                    type="button"
                >
                    <ClearIcon />
                </button>
            )}
        </div>
    );
}
