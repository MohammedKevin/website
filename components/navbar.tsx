import React from "react";

const Navbar = () => {
  const linkStyle = {
    color: "black", // Set the desired text color
    textDecoration: "none", // Remove underline
  };

  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="/museum" style={linkStyle}>
              Museum
            </a>
          </li>
          <li>
            <a href="/konzeptbuch" style={linkStyle}>
              Konzeptbuch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
