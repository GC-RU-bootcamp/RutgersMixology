$(document).ready(function() {

  function displayFavorites(list) {
    var sd = $("#drink-list");
    sd.empty();

    for (index = 0; index < list.length; index++) {
      var favorite = list[index];
      cocktailById(favorite.id, loadList);
    }
  }

  displayFavorites(favoritesList);
  
});
