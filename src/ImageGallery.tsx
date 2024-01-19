interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <div className="image-container">
        {images.map((imageName, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/${imageName}`}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
