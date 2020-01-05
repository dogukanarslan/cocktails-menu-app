import React from "react";
import {connect} from "react-redux";
import {nextPage,previousPage} from "../actionCreaters/actionCreaters";

class Buttons extends React.Component{


  render(){
    return(
      <div className="col-12">
        <div className="buttons d-flex justify-content-between">
          {this.props.showingItemsLower === 0 ? <button disabled onClick={()=>this.props.previousPage()} className="btn btn-dark">&laquo; Previous</button> : <button onClick={()=>this.props.previousPage()} className="btn btn-dark">&laquo; Previous</button>}
          {this.props.showingItemsUpper >= this.props.datas.length ? <button disabled onClick={()=>this.props.nextPage()} className="btn btn-dark">Next &raquo;</button> : <button onClick={()=>this.props.nextPage()} className="btn btn-dark">Next &raquo;</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  datas: state.datas,
  showingItemsLower: state.showingItemsLower,
  showingItemsUpper: state.showingItemsUpper
})

const mapDispatchToProps = dispatch => ({
  nextPage: () => {dispatch(nextPage())},
  previousPage: () => {dispatch(previousPage())}
})


export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
