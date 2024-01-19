// App.tsx

import React from "react";
import "./App.css";
import ImageGallery from "../ImageGallery";
import Navbar from "../navbar";

const Bilder: React.FC = () => {
  const images = [
    "test.jpg",
    "test.jpg",
    "test.jpg",

    // Add more image URLs as needed
  ];

  return (
    <>
      <p>Kevins Archiv - Sachendingekonzepte ##########</p>
      <Navbar></Navbar>
      <div>
        <ImageGallery images={images} />
      </div>
    </>
  );
};

export default Bilder;
