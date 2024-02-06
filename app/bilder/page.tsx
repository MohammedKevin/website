import ImageGallery from "../../components/ImageGallery";

export default function Bilder() {
  const images = ["bild1.jpg", "bild1.jpg", "bild1.jpg"];

  const pageStyles = {
    backgroundColor: "#white", // Replace with your preferred color
    // Add other styles as needed
  };

  return (
    <>
      <div className="main-content" style={pageStyles}>
        <p>Kevins Archiv - Sachendingekonzepte ##########</p>
        <p>Bilder</p>
        <a href={"https://www.instagram.com/sachendingekonzepte/"}>
          https://www.instagram.com/sachendingekonzepte/
        </a>
      </div>
    </>
  );
}
