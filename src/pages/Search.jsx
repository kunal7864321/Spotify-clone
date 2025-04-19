import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { AppContext } from "../context/AppContext";
import { SONGS, ARTISTS, ALBUMS } from "../data/data";
import SearchBar from "../Components/SearchBar";
import SongRow from "../Components/SongRow";
import ArtistCard from "../Components/ArtistCard";
import styles from "./Search.module.css";

const CATEGORIES = [
  { id: "cat1", label: "Bollywood", color: "#e13300", emoji: "🎬" },
  { id: "cat2", label: "Romantic", color: "#c11574", emoji: "💝" },
  { id: "cat3", label: "Pop", color: "#1e3264", emoji: "🎵" },
  { id: "cat4", label: "Hip-Hop", color: "#8d67ab", emoji: "🎤" },
  { id: "cat5", label: "Classical", color: "#477d95", emoji: "🎻" },
  { id: "cat6", label: "Party", color: "#ba5d07", emoji: "🎉" },
  { id: "cat7", label: "Indie", color: "#27856a", emoji: "🎸" },
  { id: "cat8", label: "Devotional", color: "#e8a816", emoji: "🙏" },
  { id: "cat9", label: "Punjabi", color: "#dc148c", emoji: "🥁" },
  { id: "cat10", label: "Ghazals", color: "#5179a1", emoji: "🎙️" },
  { id: "cat11", label: "Folk", color: "#148a08", emoji: "🪕" },
  { id: "cat12", label: "Sufi", color: "#503750", emoji: "🌙" },
];

const TABS = ["Songs", "Artists", "Albums"];

export default function Search() {
  const [activeTab, setActiveTab] = useState("Songs");
  const { searchQuery } = useContext(AppContext);
  const { playSong } = useContext(PlayerContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Spotify – Search";
  }, []);

  const query = searchQuery.toLowerCase().trim();

  const filteredSongs = SONGS.filter(
    (s) =>
      s.title.toLowerCase().includes(query) ||
      s.artistName.toLowerCase().includes(query)
  );

  const filteredArtists = ARTISTS.filter((a) =>
    a.name.toLowerCase().includes(query)
  );

  const filteredAlbums = ALBUMS.filter(
    (a) =>
      a.name.toLowerCase().includes(query) ||
      a.artistName.toLowerCase().includes(query)
  );

  const hasResults =
    filteredSongs.length > 0 ||
    filteredArtists.length > 0 ||
    filteredAlbums.length > 0;

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchBarWrap}>
        <SearchBar placeholder="What do you want to listen to?" autoNavigate={false} />
      </div>

      {!query ? (
        <section className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Browse all</h2>
          <div className={styles.categoriesGrid}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                id={`category-${cat.id}`}
                className={styles.categoryTile}
                style={{ background: cat.color }}
                role="button"
                tabIndex={0}
                aria-label={`Browse ${cat.label}`}
                onKeyDown={(e) => e.key === "Enter" && null}
              >
                <span className={styles.categoryEmoji}>{cat.emoji}</span>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </div>
            ))}
          </div>
        </section>
      ) : !hasResults ? (
        <div className={styles.noResults}>
          <p className={styles.noResultsIcon}>🔍</p>
          <p className={styles.noResultsTitle}>
            No results found for &ldquo;{searchQuery}&rdquo;
          </p>
          <p className={styles.noResultsSub}>
            Please make sure your words are spelled correctly, or use fewer or
            different keywords.
          </p>
        </div>
      ) : (
        <div className={styles.resultsWrap}>
          <div className={styles.tabs} role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase()}`}
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === "Songs" && (
              <div className={styles.songsList}>
                {filteredSongs.length === 0 ? (
                  <p className={styles.emptyTab}>No songs found.</p>
                ) : (
                  filteredSongs.map((song, idx) => (
                    <SongRow key={song.id} song={song} index={idx + 1} />
                  ))
                )}
              </div>
            )}

            {activeTab === "Artists" && (
              <div className={styles.artistsGrid}>
                {filteredArtists.length === 0 ? (
                  <p className={styles.emptyTab}>No artists found.</p>
                ) : (
                  filteredArtists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))
                )}
              </div>
            )}

            {activeTab === "Albums" && (
              <div className={styles.albumsGrid}>
                {filteredAlbums.length === 0 ? (
                  <p className={styles.emptyTab}>No albums found.</p>
                ) : (
                  filteredAlbums.map((album) => (
                    <div
                      key={album.id}
                      id={`search-album-${album.id}`}
                      className={styles.albumCard}
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate(`/artist/${album.artistId}`)}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        navigate(`/artist/${album.artistId}`)
                      }
                      aria-label={`View ${album.name}`}
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
                      <p className={styles.albumArtist}>{album.artistName}</p>
                      <p className={styles.albumYear}>{album.year}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
