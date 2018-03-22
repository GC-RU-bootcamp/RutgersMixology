function makeRequest(queryURL, myFunc) {
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      console.log(response);
      var results = response;
      myFunc(results);
      return results;
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log("AJAX Error=" + textStatus );
      console.log("AJAX ErrorThrown=" + errorThrown );
      console.log(xhr );

      alert("AJAX Error= " + xhr.responseText);
    });
}

//LIST FUNCTIONS -- use values from these lists for the search functions below
// listCategory returns an array list of sub-Categories
function listCategory(myFunc) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

//listGlasses returns an array list of glasses
function listGlasses(myFunc) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

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
function listIngredients(myFunc) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

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
function listAlcoholContents(myFunc) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

// "name" parameter name comes from the cocktail name, glass or Ingredient
// imageURL returns the image URL string
function imageURL(name) {
  var imageURL =
    "https://www.thecocktaildb.com/images/ingredients/" + name + ".png";
  // https://www.thecocktaildb.com/images/ingredients/ice-Small.png (100x100 pixels)
  // https://www.thecocktaildb.com/images/ingredients/ice-Medium.png (350x350 pixels)
  // https://www.thecocktaildb.com/images/ingredients/ice.png (700x700 pixels)
  var retval = imageURL;
  return retval;
}

// randomDrink returns one random drink
function randomDrink(myFunc) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log("searchDrinkByName URL= "+queryURL);
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

// "name" is the name of a drink and it reutrn an array of drinks with that name
// searchDrinkByName returns an array of drinks with
function searchDrinkByName(name, myFunc) {
  searchStr = "/search.php?s=";
  var api_key = "1";
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + name;
  // ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  console.log("searchDrinkByName URL= "+queryURL);
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

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
function ingredientDescription(name, myFunc) {
  searchStr = "/search.php?i=";
  var api_key = "1";
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + name;
  //ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
  console.log("ingredientDescription URL= "+queryURL);
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

// Lookup full cocktail details by drink "id" number (really a string)
// cocktailById returns one drink with all of its details, ingredants,
function cocktailById(id, myFunc) {
  searchStr = "/lookup.php?i=";
  var api_key = "1";
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/" + api_key + searchStr + id;
  //ex: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
  console.log("cocktailById URL= "+queryURL);
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}

// Filter list of drinks by ingredient, subCategory, glass, AND/OR alcoholic
// provide an "" string for parameters not used Such as "", "", "martini", "" for drinks in martini glasses
// NOT SURE the site does an AND function to filter down results
// paramters are obtained from the listCategory, ListIngredient, ListGlass, listAlcoholContents functions
// filterBy returns a
function filterBy(ingredient, subCategory, glass, alcoholic, myFunc) {
  searchStr = "/filter.php?";
  filterParam = "";
  if ($.trim(ingredient).length !== 0) {
    filterParam += "i=" + ingredient;
  }
  if ($.trim(subCategory).length !== 0) {
    if (filterParam.length > 0) {
      filterParam += "&";
    }
    filterParam += "c=" + subCategory;
  }
  if ($.trim(glass).length !== 0) {
    if (filterParam.length > 0) {
      filterParam += "&";
    }
    filterParam += "g=" + glass;
  }
  if ($.trim(alcoholic).length !== 0) {
    if (filterParam.length > 0) {
      filterParam += "&";
    }
    filterParam += "a=" + alcoholic;
  }
  var api_key = "1";
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/" +
    api_key +
    searchStr +
    filterParam;
    //ex: https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
    console.log("filterBy URL= "+queryURL);
  var retval = makeRequest(queryURL, myFunc);
  return retval;
}


var getData = function(results){
  console.log("RESULTS ARE");
  console.log(results);
};

var getData2 = function(results){
  console.log("RESULTS ARE");
  console.log(results);
};

// filterBy("vodka", "cocktail", "", "", getData);
// listCategory(getData);
// listGlasses(getData);
// listIngredients(getData);
// listCategory(getData);
// randomDrink(getData);
// searchDrinkByName("martini", rendertext);

//listCategory(rendertext);


function rendertext(results) {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  console.log("RESULTS ARE");
  console.log(results);
  var dest = $("#" + "list")
  dest.empty();
  for (i=0; i < results.drinks.length; i++){
    console.log(results.drinks[i].strCategory);
    var p = $("<p>");
    var d = results.drinks[i];
    p.text("idDrink: "+d.idDrink+", strDrink: "+d.strDrink+", strVideo: "+d.strVideo+", strCategory: " +d.strCategory+ ", ...");
    // p.text(String(results.drinks[i]));
    // p.text(results.drinks[i].strCategory);
    dest.append(p);
  }

  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
//   len = topics.length;
//   if (len > 0) {
//     
//     // Looping through the array of movies
//     for (var i = 0; i < len; i++) {
      // Then dynamicaly generating buttons for each topic in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class
//       a.addClass("search btn btn-primary btn-md mt-1 ml-1");
//       // Adding a data-attribute with a value of the topic at index i
//       a.attr("data-search", topics[i]);
//       // Providing the button's text with a value of the topic at index i
//       a.text(topics[i]);
//       a.attr("draggable", "true");
//       a.attr("ondragstart", "drag(event)");
//       a.attr("id", "btn" + i);
      // Adding the button to the HTML
      // $("#" + buttonArea).append(a);
  //   }
  // }
};