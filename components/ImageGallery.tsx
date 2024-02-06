import { useEffect } from "react";

interface ImageGalleryProps {
  images: { title: string; path: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        {images.map((image, index) => (
          <>
            {" "}
            <img
              key={index}
              src={`/images/${image.path}`}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
            <p>{image.title}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
