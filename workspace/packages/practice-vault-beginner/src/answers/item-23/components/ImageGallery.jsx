import './ImageGallery.css';
import { useState } from 'react';

function ImageGallery(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const { images } = props;
    const onSelectedImageClick = (index) => {
        const img = images[index];

        setSelectedImage(img);
    };
    const onCloseButtonClick = () => {
        setSelectedImage(null);
    };

    if (!images) {
        return <div>There is nothing to see</div>;
    }

    return (
        <div className="image-gallery">
            <ul className="list">
                {images.map((image, index) => (
                    <li className="list-item" key={index}>
                        <button onClick={() => onSelectedImageClick(index)}>
                            <img src={image.url} title={image.title} />
                        </button>
                    </li>
                ))}
            </ul>
            {selectedImage && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <img className="lightbox-img" src={selectedImage.url} />
                        <div className="lightbox-title">
                            {selectedImage.title}
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

export default ImageGallery;
