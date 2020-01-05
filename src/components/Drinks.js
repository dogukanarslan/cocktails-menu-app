import React from "react";
import {Drink, Buttons} from "../components";
import {HomeLoading} from "../components"
import {connect} from "react-redux";

function Drinks(props){

    const {showingItemsLower,showingItemsUpper, datas} = props
    
    if (props.loading){
      return <HomeLoading/>
    }
    else{
      return(
        <div className="Drinks">
          <div className="row">
            <div className="col-12">
              <p className="lead">
              {showingItemsLower+1} - {showingItemsUpper>datas.length ?
                datas.length : showingItemsUpper} of {datas.length} results
              </p>
            </div>
            {datas.slice(showingItemsLower,showingItemsUpper).map(item => {
              return <Drink key={item.idDrink} {...item}/>
            })}
            <Buttons/>
          </div>
        </div>
      )
    }

}

const mapStateToProps = state => {
  return{
    loading: state.loading,
    datas: state.datas,
    showingItemsLower: state.showingItemsLower,
    showingItemsUpper: state.showingItemsUpper
  }
}

export default connect(mapStateToProps)(Drinks)
