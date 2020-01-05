import React from "react";
import {Drinks, SearchBar} from "../components"

export default function Home(){
  return(
    <div className="container">
      <SearchBar/>
      <Drinks/>
    </div>
  )
}
