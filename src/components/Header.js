import React from "react";
import {Link} from "react-router-dom";

export default function Header(){

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand"><i className="fas fa-cocktail fa-2x"></i> COCKTAILS</Link>
    </nav>
  )
}
