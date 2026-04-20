import { useNavigate } from 'react-router-dom';
import './ArtistCard.css';

export default function ArtistCard({ artist }) {
    const navigate = useNavigate();

    if (!artist) return null;

    const { id, name, image, monthlyListeners, genres = [] } = artist;

    const handleClick = () => navigate(`/artist/${id}`);


    const formatListeners = (val) => {
        if (!val) return '';

        if (typeof val === 'string') return `${val} monthly listeners`;
        if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M monthly listeners`;
        if (val >= 1_000) return `${(val / 1_000).toFixed(0)}K monthly listeners`;
        return `${val} monthly listeners`;
    };

    return (
        <article
            className="artist-card"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            aria-label={`View artist: ${name}`}
        >
            {}
            <div className="artist-card__img-wrap">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="artist-card__img"
                        loading="lazy"
                    />
                ) : (

                    <div className="artist-card__img-fallback" aria-hidden="true">
                        {name?.charAt(0).toUpperCase()}
                    </div>
                )}

                {}
                <div className="artist-card__hover-ring" aria-hidden="true" />
            </div>

            {}
            <div className="artist-card__info">
                <p className="artist-card__name">{name}</p>
                <p className="artist-card__type">Artist</p>
                {monthlyListeners && (
                    <p className="artist-card__listeners">{formatListeners(monthlyListeners)}</p>
                )}

                {}
                {genres.length > 0 && (
                    <div className="artist-card__genres">
                        {genres.slice(0, 2).map((g) => (
                            <span key={g} className="artist-card__genre-tag">{g}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
