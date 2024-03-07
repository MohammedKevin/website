import React from "react";

const Navbar = () => {
  const linkStyle = {
    color: "black", // Set the desired text color
    textDecoration: "none", // Remove underline
    fontSize: "35px",
  };

  const liStyle = {
    paddingBottom: "80px",
  };

  return (
    <nav>
      <div style={{ marginTop: "100px" }}>
        <ul>
          <li style={liStyle}>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={liStyle}>
            <a href="/bilder" style={linkStyle}>
              Bilder
            </a>
          </li>
          <li style={liStyle}>
            <a href="/woerter" style={linkStyle}>
              Woerter
            </a>
          </li>
          <li style={liStyle}>
            <a href="/museum" style={linkStyle}>
              Museum
            </a>
          </li>
          <li style={liStyle}>
            <a href="/konzeptbuch" style={linkStyle}>
              Konzeptbuch
            </a>
          </li>
          <li style={liStyle}>
            <a href="/algorave" style={linkStyle}>
              Algorave
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
