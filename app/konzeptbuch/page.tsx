import ImageGallery from "../../components/ImageGallery";

export default function Museum() {
  const images = [
    "notizen/0.jpg",
    "notizen/1.jpg",
    "notizen/2.jpg",
    "notizen/3.jpg",
    "notizen/4.jpg",
    "notizen/5.jpg",
    "notizen/6.jpg",
    "notizen/7.jpg",
    "notizen/8.jpg",
    "notizen/9.jpg",
    "notizen/10.jpg",
    "notizen/11.jpg",
    "notizen/12.jpg",
    "notizen/13.jpg",
    "notizen/14.jpg",
    "notizen/15.jpg",
    "notizen/16.jpg",
    "notizen/17.jpg",
    "notizen/18.jpg",
    "notizen/19.jpg",
    "notizen/20.jpg",
    "notizen/21.jpg",
    "notizen/22.jpg",
    "notizen/23.jpg",
  ];

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
