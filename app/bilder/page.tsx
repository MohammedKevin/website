import ImageGallery from "../../components/ImageGallery";

export default function Bilder() {
  const images = ["bild1.jpg", "bild1.jpg", "bild1.jpg"];

  return (
    <>
      <p>Kevins Archiv - Sachendingekonzepte ##########</p>
      <p>Bilder</p>
      <ImageGallery images={images}></ImageGallery>
    </>
  );
}
