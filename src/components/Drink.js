import React from "react";
import {Link} from "react-router-dom";
export default function Drink(props){
  return(
      <div className="col-6 col-md-4">
        <Link to={`/details/${props.idDrink}`}>
          <div className="card mb-5">
            <img className="card-img-top" src={props.strDrinkThumb} alt="..."/>
            <div className="card-body">
              <p className="card-text">{props.strDrink}</p>
              <button className="btn btn-dark btn-sm">More Info</button>
            </div>
          </div>
        </Link>
      </div>
  )
}
