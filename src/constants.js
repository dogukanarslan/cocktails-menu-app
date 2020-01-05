const apiURL = "https://the-cocktail-db.p.rapidapi.com/"
export const listCategories = "list.php?c=list"
export const filterCocktails = "filter.php?c="
export const drinkDetails = "lookup.php?i="

export const getData = (path,id) => {
  return (
    fetch(`${apiURL}${path}${id}`, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    		"x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
    	}
    })
  )
}

export const sort = [{text: "Name", value:"strDrink"},{text: "ID", value: "idDrink"}]
