import {GET_DRINKS, GET_OPTIONS, SELECTED_CHANGE, GET_DRINK_DETAILS, NEXT_PAGE, PREVIOUS_PAGE, LOADING, SORT_ITEMS, SEARCH_DRINK} from "../actions/actions";

const rootReducer = (state = {
  datas: [],
  _datas: [],
  options: [],
  itemDetails: [],
  cocktailFilter: "Ordinary Drink",
  showingItemsLower: 0,
  showingItemsUpper: 12,
  loading: false
}, action) =>{
  switch (action.type){
    case LOADING:
      return {...state, loading: true}
    case GET_DRINKS:
      return {...state, datas: [...action.data.drinks], _datas: [...action.data.drinks]}
    case GET_OPTIONS:
      return {...state, options: [...action.data.drinks]};
    case SEARCH_DRINK:
      return {...state, datas: [...state._datas.filter(item => item.strDrink.toLowerCase().indexOf(action.val.toLowerCase()) > -1)], showingItemsLower: 0, showingItemsUpper: 12}
    case SELECTED_CHANGE:
      return {...state, datas: [...action.data.drinks], _datas: [...action.data.drinks], showingItemsLower: 0, showingItemsUpper: 12, loading: false}
    case GET_DRINK_DETAILS:
      return {...state, itemDetails: action.data.drinks[0], loading: false}
    case SORT_ITEMS:
      if(action.sort === "idDrink"){
        return {...state, datas: [...state.datas.sort(function(a,b){return a[action.sort] - b[action.sort]})]}
      }
      else if(action.sort === "strDrink"){
        return {...state, datas: [...state.datas.sort(function(a, b){
          let x = a[action.sort].toLowerCase();
          let y = b[action.sort].toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        })]}
      }
    case NEXT_PAGE:
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      return {...state, showingItemsLower: state.showingItemsLower + 12, showingItemsUpper: state.showingItemsUpper + 12}
    case PREVIOUS_PAGE:
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      return {...state, showingItemsLower: state.showingItemsLower - 12, showingItemsUpper: state.showingItemsUpper - 12}
    default:
      return state;
  }
}

export default rootReducer
