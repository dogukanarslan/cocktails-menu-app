import React from "react";
import {connect} from "react-redux";
import {selectedChange, getOptions, sortItems,searchDrink} from "../actionCreaters/actionCreaters";
import {sort} from "../constants"

class SearchBar extends React.Component{

  componentDidMount(){
    this.props.getOptions()
  }

  render(){
    return(
      <form>
        <div className="row">

        <div className="col">
          <div className="form-group">
            <label htmlFor="sort">Drink Name</label>
            <input className="form-control" value={this.props.searchValue} onChange={(event) => this.props.searchDrink(event.target.value)} placeholder="Enter your drinks name..."/>
          </div>
        </div>

          <div className="col">
              <div className="form-group">
                <label htmlFor="cocktailFilter">Drink Type </label>
                <select className="form-control" id="cocktailFilter" onChange={(event)=> this.props.selectedChange(event.target.value)}>
                  {this.props.options.map(item => {
                    return <option key={item.strCategory} value={item.strCategory}>{item.strCategory}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="sort">Sort by</label>
                <select className="form-control" id="sort" onChange={(event) => this.props.sortItems(event.target.value)}>
                  {sort.map(option => {
                    return(
                      <option key={option.value} value={option.value}>{option.text}</option>
                    )
                  })}
                </select>
              </div>
            </div>

          </div>

      </form>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentFilter: state.cocktailFilter,
    options: state.options,
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = dispatch => {
  return{
    selectedChange: cocktailFilter => dispatch(selectedChange(cocktailFilter)),
    getOptions: () => dispatch(getOptions()),
    sortItems: (item) => dispatch(sortItems(item)),
    searchDrink : (val) => dispatch(searchDrink(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
