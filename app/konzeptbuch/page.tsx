import ImageGallery from "../../components/ImageGallery";

export default function Museum() {
  const images = ["image"];

  const pageStyles = {
    // Add other styles as needed
  };

  return (
    <>
      <div className="main-content" style={pageStyles}>
        <p>Kevins Archiv - Sachendingekonzepte ##########</p>
        <p>Konzeptbuch</p>
        <ImageGallery images={images}></ImageGallery>
      </div>
    </>
  );
}
