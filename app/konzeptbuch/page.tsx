import ImageGallery from "../../components/ImageGallery";

export default function Museum() {
  const images = [
    { title: "", path: "notizen/0.jpg" },
    { title: "", path: "notizen/1.jpg" },
    { title: "donauinsel/wienerberg", path: "notizen/2.jpg" },
    { title: "", path: "notizen/3.jpg" },
    { title: "", path: "notizen/4.jpg" },
    {
      title:
        "Erste Wasserfarben Zeichnung seit der Unterstufe. Florenz Sommer 2023",
      path: "notizen/5.jpg",
    },
    { title: "Italien", path: "notizen/6.jpg" },
    { title: "Italien", path: "notizen/7.jpg" },
    { title: "Italien", path: "notizen/8.jpg" },
    { title: "", path: "notizen/9.jpg" },
    { title: "", path: "notizen/10.jpg" },
    { title: "", path: "notizen/11.jpg" },
    { title: "", path: "notizen/12.jpg" },
    { title: "Paris", path: "notizen/13.jpg" },
    { title: "", path: "notizen/14.jpg" },
    { title: "", path: "notizen/16.jpg" },
    { title: "", path: "notizen/17.jpg" },
    { title: "", path: "notizen/18.jpg" },
    { title: "", path: "notizen/19.jpg" },
    { title: "", path: "notizen/20.jpg" },
    { title: "", path: "notizen/21.jpg" },
    { title: "", path: "notizen/22.jpg" },
    { title: "", path: "notizen/23.jpg" },
    { title: "", path: "notizen/24.jpg" },
  ];

  const images_gelb = [
    { title: "Gelbesbuch ab 12.01", path: "notizen/gelb/2_gelb.jpg" },
    { title: "", path: "notizen/gelb/3_gelb.jpg" },
    { title: "", path: "notizen/gelb/4_gelb.jpg" },
    { title: "", path: "notizen/gelb/5_gelb.jpg" },
    { title: "", path: "notizen/gelb/6_gelb.jpg" },
    { title: "", path: "notizen/gelb/7_gelb.jpg" },
    { title: "", path: "notizen/gelb/8_gelb.jpg" },
    { title: "", path: "notizen/gelb/9_gelb.jpg" },
    { title: "", path: "notizen/gelb/10_gelb.jpg" },
    { title: "", path: "notizen/gelb/11_gelb.jpg" },
    { title: "", path: "notizen/gelb/12_gelb.jpg" },
    { title: "", path: "notizen/gelb/13_gelb.jpg" },
    { title: "", path: "notizen/gelb/14_gelb.jpg" },
    { title: "", path: "notizen/gelb/15_gelb.jpg" },
    { title: "", path: "notizen/gelb/16_gelb.jpg" },
    { title: "", path: "notizen/gelb/17_gelb.jpg" },
    { title: "", path: "notizen/gelb/18_gelb.jpg" },
    { title: "", path: "notizen/gelb/19_gelb.jpg" },
    { title: "", path: "notizen/gelb/20_gelb.jpg" },
    { title: "", path: "notizen/gelb/21_gelb.jpg" },
  ];

  const pageStyles = {
    // Add other styles as needed
  };

  return (
    <>
      <div className="main-content" style={pageStyles}>
        <p>Kevins Archiv - Sachendingekonzepte ##########</p>
        <h3>konzeptbuch 06-12 2023 </h3>
        <h5>auszüge meines privaten notizbuchs</h5>
        <p>
          Ich kann mir Dinge nur abstrakt vorstellen. Dieser Fakt hat mich lange
          dazu gebracht, jeglichen Bezug zu Kunst generell einmal abzuwenden und
          zu denken, ich könnte sowas nie. Jedoch entdeckte ich immer mehr
          kreative Aspekte in Dingen aus der Informatik und Technik. Ich kann
          mir fast nichts visual vorstellen, nicht mal Farben. Weswegen ich 2023
          angefangen habe, ein Notizbuch zu führen, um mich besser an Dinge
          erinnern zu können.
        </p>
        <ImageGallery images={[...images, ...images_gelb]}></ImageGallery>
      </div>
    </>
  );
}
