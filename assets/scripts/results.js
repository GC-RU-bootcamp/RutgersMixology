$(document).ready(function() {

  // requires a drinkSearchParams object as a paramter
  function displayResults(param) {
    var sd = $("#drink-list");
    sd.empty();


   if (param.searchBy === "name" ){
      searchDrinkByName(drinkSearchParams.name, loadList);
    } else {
      filterBy(param.ingredients, param.category, param.glass, param.alcohol, loadList)
    }
  };
  
  drinkSearchParams = JSON.parse(localStorage.getItem("drinkSearchParams"));
  displayResults(drinkSearchParams);

});
