function makeRequest(queryURL) {
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data comes back from the API
    .then(function (response) {
      // Storing an array of results in the results variable
      console.log(response);
      var results = response.data;
      return results;

    });
};

//LIST FUNCTIONS -- use values from these lists for the search functions below
// listCategory returns an array list of sub-Categories
function listCategory(){
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  var retval = makeRequest(queryURL);
  return retval;
};

//listGlasses returns an array list of glasses
function listGlasses(){
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
  var retval = makeRequest(queryURL);
  return retval;
};

// listIngredients returns an array list of Ingredients for example
    // {
    //   "drinks": [
      //   {
      //   "strIngredient1": "Light rum"
      //   },
      //   {
      //   "strIngredient1": "Applejack"
      //   },...
    //   ]
    // }
function listIngredients(){
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  var retval = makeRequest(queryURL);
  return retval;
};

// listAlcoholContents returns an array list of alcohol based drink type for example
      // {
      //   "drinks": [
      //   {
      // "strAlcoholic": "Alcoholic"
      // },
      // {
        // "strAlcoholic": "Non alcoholic"
        // },...
        //   ]
        // }
function listAlcoholContents() {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";
  var retval = makeRequest(queryURL);
  return retval;
};

// listIngredients returns an array list of Ingredients for example
  // {
  //   "drinks": [
  //   {
  //   "strIngredient1": "Light rum"
  //   },
  //   {
  //   "strIngredient1": "Applejack"
  //   },...
  //   ]
  // }
function listIngredients() {
  queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  var retval = makeRequest(queryURL);
  return retval;
};
// "name" parameter name comes from the cocktail name, glass or Ingredient 
// imageURL returns the image URL string
function imageURL(name) {
  var imageURL = "https://www.thecocktaildb.com/images/ingredients/" + name + ".png"
  // https://www.thecocktaildb.com/images/ingredients/ice-Small.png (100x100 pixels)
  // https://www.thecocktaildb.com/images/ingredients/ice-Medium.png (350x350 pixels)
  // https://www.thecocktaildb.com/images/ingredients/ice.png (700x700 pixels)
  var retval = imageURL;
  return retval;
};

// randomDrink returns one random drink 
function randomDrink() {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  var retval = makeRequest(queryURL);
  return retval;
};
        


// "name" is the name of a drink and it reutrn an array of drinks with that name
// searchDrinkByName returns an array of drinks with 
function searchDrinkByName(name) {
  searchStr = "/search.php?s=";
  var api_key = "1";
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + name;
  // ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  var retval = makeRequest(queryURL);
  return retval;
};

// ex paramter name = "rum"
    // ingredientDescription returns  ( DOES NOT ALWAYS HAVE A DECRIPTION))
    // {
    //   "ingredients": [{
    //     "idIngredient": "434",
    //     "strIngredient": "Rum",
    //     "strDescription": "Rum is a distilled alcoholic beverage made from sugarcane byproducts, ...\"",
    //     "strType": "Rum"
    //   }]
    // }
function ingredientDescription(name) {
  searchStr = "/search.php?i=";
  var api_key = "1";
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + name;
  //ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
     var retval = makeRequest(queryURL);
  return retval;
};

// Lookup full cocktail details by drink "id" number (really a string)
// cocktailById returns one drink with all of its details, ingredants, 
function cocktailById(id) {
  searchStr = "/lookup.php?i=";
  var api_key = "1";
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + id;
  //ex: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
  var retval = makeRequest(queryURL);
  return retval;
};

// Filter list of drinks by ingredient, subCategory, glass, AND/OR alcoholic
// provide an "" string for parameters not used Such as "", "", "martini", "" for drinks in martini glasses  
// NOT SURE the site does an AND function to filter down results
// paramters are obtained from the listCategory, ListIngredient, ListGlass, listAlcoholContents functions
// filterBy returns a 
function filterBy(ingredient, subCategory, glass, alcoholic) {
  searchStr = "/filter.php?";
  filterParam = "";
  if (toString.call(ingredient) !== "") {
    filterParam = "i=" + ingredient;
  } 
  if (toString.call(subCategory) !== "") {
    if (filterParam.length > 0) {
      filterParam += "&"
    }
    filterParam = "i=" + subCategory;
  }
  if (toString.call(glass) !== "") {
    if (filterParam.length > 0) {
      filterParam += "&"
    }
    filterParam = "i=" + glass;
  }
  if (toString.call(alcoholic) !== "") {
    if (filterParam.length > 0) {
      filterParam += "&"
    }
    filterParam = "i=" + alcoholic;
  }
  var api_key = "1";
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + filterParam;
  //ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
     var retval = makeRequest(queryURL);
  return retval;
};

filterBy("vodka","coktail","martini", "");
// switch (searchFor.toLowerCase()) {

//   //Search cocktail by name (ex "margarita")
//   case "cocktail_name":
//   case "drink":
//   case "s":
//   case "c":
//     searchStr = "/search.php?s="
//     // ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//     // returns an array of drinks with ingredents, image and Instructions 
//     // "drinks": [
//     //   {
//     //   "idDrink": "13060",
//     //   "strDrink": "Margarita",
//     //   "strVideo": null,
//     //   "strCategory": "Ordinary Drink",
//     //   "strIBA": "Contemporary Classics",
//     //   "strAlcoholic": "Alcoholic",
//     //   "strGlass": "Cocktail glass",
//     //   "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
//     //   "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
//     //   "strIngredient1": "Tequila",
//     //   "strIngredient2": "Triple sec",
//     //   "strIngredient3": "Lime juice",
//     //   "strIngredient4": "Salt",
//     //   "strIngredient5": "",
//     // ...
//     break;

//     // Search ingredient by name (ex "vodka" )
//   case "name":
//   case "n":
//     //case "i":
//     searchStr = "/search.php?i="
//     //ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
//     // return example 
//     // {
//     //   "ingredients": [{
//     //     "idIngredient": "434",
//     //     "strIngredient": "Rum",
//     //     "strDescription": "Rum is a distilled alcoholic beverage made from sugarcane byproducts, ...\"",
//     //     "strType": "Rum"
//     //   }]
//     // }
//     break;

//     // Lookup full cocktail details by id
//   // case "recipe":
//   // case "details":
//   // case "d":
//   //   //case "i":
//   //   searchStr = "/lookup.php?i="
//   //   // ex: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
//   //   break;

//     //Lookup a random cocktail
//   // case "random":
//   // case "r":
//   //   //case "i":
//   //   searchStr = "/random.php"
//   //   // ex: https://www.thecocktaildb.com/api/json/v1/1/random.php
//   //   break;

//     //Search by ingredient
//   case "ingredient":
//   case "i":
//     //case "i":
//     searchStr = "/filter.php?i="
//     // https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
//     // https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
//     break;

//     //Filter by alcoholic
//   case "alcoholic":
//   case "a":
//     searchStr = "/filter.php?a=Alcoholic"
//     // https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
//     break;
//     //Filter by non-alcoholic
//   case "non-alcoholic":
//   case "na":
//     searchStr = "/filter.php?a=Alcoholic"
//     // https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
//     break;

//     //Filter list by Category
//   case "ordinary-drink-list":
//   case "od":
//     searchStr = "/filter.php?c=Ordinary_Drink"
//     https: //www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
//       break;

//     //Filter list by Category
//   case "cocktail-list":
//   case "cl":
//     searchStr = "/filter.php?c=Cocktail"
//     // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
//     break;

//     //Filter by Glass
//     //https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
//     //https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

//   // function xxlistCategory()
//   //   // List the categories, glasses, ingredients or alcoholic filters
//   // case "category-list":
//   // case "cl":
//   //   searchStr = "list.php?c=list"
//   //   // https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
//   //   break;
//   // case "glass-list":
//   // case "gl":
//   //   searchStr = "list.php?g=list"
//   //   //https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
//   //   break;
//   // case "ingredients-list":
//   // case "il":
//   //   searchStr = "list.php?g=list"
//   //   // https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
//   //   break;
//   // case "alcohol-list":
//   // case "al":
//   //   searchStr = "list.php?g=list"
//   //   // https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
//   //   break;

//   //   //  Images
//   // case "ingredient-image":
//   // case "ii":
//   //   searchStr = "list.php?g=list"
//   //   // https://www.thecocktaildb.com/images/ingredients/ice-Small.png (100x100 pixels)
//   //   // https://www.thecocktaildb.com/images/ingredients/ice-Medium.png (350x350 pixels)
//   //   // https://www.thecocktaildb.com/images/ingredients/ice.png (700x700 pixels)
//   //   break;
// }

// };


// Performing our AJAX GET request


// function allowDrop(ev) {
// ev.preventDefault();
// }