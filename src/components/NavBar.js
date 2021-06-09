import React from "react";

function NavLinks(props) {
  return <a href={"#" + props.link}>{props.link}</a> 
}


function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map(link => {
    return <NavLinks link={link} key={link}/>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
