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
        <p>Kunst Archiv - Sachendingekonzepte ##########</p>
        <p>AlgoRave</p>
        <a href={"https://vimeo.com/906671705?share=copy"}>
          https://vimeo.com/906671705?share=copy
        </a>
      </div>
    </>
  );
}
