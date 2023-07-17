import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const liksDisplayed = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    );
  });
  return <nav>{liksDisplayed}</nav>;
}

export default NavBar;
