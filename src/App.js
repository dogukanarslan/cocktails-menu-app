import React from 'react';
import './App.scss';
import {Header, Main} from "./components";
import {connect} from "react-redux";
import {getDrinks} from "./actionCreaters/actionCreaters"

class App extends React.Component{

  componentDidMount(){
    this.props.getDrinks()
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getDrinks: () => dispatch(getDrinks())
  }
}

export default connect(null, mapDispatchToProps)(App);
