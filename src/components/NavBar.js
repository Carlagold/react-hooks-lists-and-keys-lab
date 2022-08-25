import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchorsTag = links.map((link) =>(
    <a key={link} href={"#" + link}>{link}</a>
  
  ));
  return <nav>{anchorsTag}</nav>;
  
}

export default NavBar;
