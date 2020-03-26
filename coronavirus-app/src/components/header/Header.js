import React from "react";
let letterStyle = { fontFamily: "Arial Narrow" };
function Header({ titulo }) {
  return (
    <nav>
      <div className="nav-wrapper black " style={letterStyle}>
        <a href="/" className="brand-logo">
          {titulo}
        </a>
      </div>
    </nav>
  );
}
export default Header;
