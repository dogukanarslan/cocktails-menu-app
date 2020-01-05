import React from "react";
import {connect} from "react-redux";
import {getDrinkDetails} from "../actionCreaters/actionCreaters";
import {Link} from "react-router-dom";
import {Loading} from "../components";

class Details extends React.Component{

  componentDidMount(){
    this.props.getDrinkDetails(this.props.match.params.id);
  }

  render(){

    const {strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb} = this.props.itemDetails

    if (this.props.loading){
      return <Loading/>;
    } else{
      return(
        <div className="Details">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-4">
                <img className="img-fluid" src={strDrinkThumb} alt=""/>
              </div>
              <Link className="closeButton" to="/"><i className="fas fa-arrow-left fa-3x text-dark"></i></Link>
              <div className="col-md-8">
                <p><strong>Name: </strong>{strDrink}</p>
                <p><strong>Category: </strong>{strCategory}</p>
                {strAlcoholic === "Alcoholic" ? <p><strong>Alcoholic: </strong>Yes</p> : <p><strong>Alcoholic:</strong> No</p>}
                <p><strong>Glass: </strong>{strGlass}</p>
                <p><strong>Instructions:</strong> {strInstructions}</p>
              </div>

            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    itemDetails: state.itemDetails,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return{
      getDrinkDetails: id => {dispatch(getDrinkDetails(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
