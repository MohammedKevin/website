import ImageGallery from "../../components/ImageGallery";

export default function Museum() {
  const images = ["museum1.jpg", "museum2.jpg", "museum3.jpg"];

  const pageStyles = {
    // Add other styles as needed
  };

  return (
    <>
      <div className="main-content" style={pageStyles}>
        <p>Kevins Archiv - Sachendingekonzepte ##########</p>
        <p>Museum</p>
        <ImageGallery images={images}></ImageGallery>
      </div>
    </>
  );
}
