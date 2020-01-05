import React from "react";
import {Switch, Route} from "react-router-dom";
import {Home,Details} from "../pages";

export default function Main(){
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/details/:id" component={Details}/>
    </Switch>
  )
}
