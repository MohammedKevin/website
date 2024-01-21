import { useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        {images.map((imageName, index) => (
          <img
            key={index}
            src={`/images/${imageName}`}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
