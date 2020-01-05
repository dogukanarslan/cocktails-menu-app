import {GET_DRINKS, GET_OPTIONS, SELECTED_CHANGE, GET_DRINK_DETAILS, NEXT_PAGE, PREVIOUS_PAGE, LOADING, SORT_ITEMS, SEARCH_DRINK} from "../actions/actions";
import {getData, listCategories, filterCocktails,drinkDetails} from "../constants";

export const getDrinks = () => {
  return dispatch => {
    getData(filterCocktails,"Ordinary Drink")
    .then(res => res.json())
    .then(data => {
      setTimeout(()=> dispatch({type: GET_DRINKS, data}),800);
    })
  }
}

export const getOptions = () => {
  return dispatch => {
    getData(listCategories,"")
    .then(res => res.json())
    .then(data => dispatch({type: GET_OPTIONS, data}))
  }
}

export const selectedChange = (filter) => {
  return dispatch => {
    dispatch(loading())
    getData(filterCocktails,filter)
    .then(res => res.json())
    .then(data => {
      setTimeout(()=> dispatch({type: SELECTED_CHANGE, data}),800);
    })
  };
}

export const getDrinkDetails = (itemId) => {
  return dispatch => {
    dispatch(loading())
    getData(drinkDetails,itemId)
    .then(res => res.json())
    .then(data => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setTimeout(()=>dispatch({type:GET_DRINK_DETAILS, data}),800)
    })
  }
}

export const sortItems = (sort) => {
  return {type: SORT_ITEMS, sort}
}

export const nextPage = () => {
  return {type: NEXT_PAGE}
}

export const previousPage = () => {
  return {type: PREVIOUS_PAGE}
}

export const loading = () => {
  return {type: LOADING}
}

export const searchDrink = (val) => {
  return {type: SEARCH_DRINK, val}
}
