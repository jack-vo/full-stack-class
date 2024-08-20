import { useEffect, useState } from 'react';
import './SmartAnimeGallery.css';

function SmartAnimeGallery(props) {
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const onSelectedImageClick = (index) => {
        const anime = animes[index];

        setSelectedAnime(anime);
    };
    const onCloseButtonClick = () => {
        setSelectedAnime(null);
    };

    useEffect(() => {
        setLoading(true);

        fetch('https://api.jikan.moe/v4/top/anime')
            .then((response) => response.json())
            .then((result) => {
                setAnimes(result.data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">There is nothing to see</div>;
    }

    return (
        <div className="image-gallery">
            <ul className="list">
                {animes.map((anime, index) => (
                    <li className="list-item" key={index}>
                        <button onClick={() => onSelectedImageClick(index)}>
                            <img
                                src={anime.images.jpg.image_url}
                                title={anime.title}
                            />
                        </button>
                    </li>
                ))}
            </ul>
            {selectedAnime && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <img
                            className="lightbox-img"
                            src={selectedAnime.images.jpg.large_image_url}
                            title={selectedAnime.title}
                        />
                        <div className="lightbox-title">
                            {selectedAnime.title}
                        </div>
                    </div>
                    <button
                        className="lightbox-button"
                        onClick={onCloseButtonClick}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default SmartAnimeGallery;
