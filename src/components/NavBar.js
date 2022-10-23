import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkitem = links.map(link => {
    return <a key={link} href={link}>{link}</a>
  });

  return <nav>{linkitem}</nav>;
}

export default NavBar;
