$(document).ready(function() {

  function displayTrending(list) {
    var sd = $("#show-list");
    sd.empty();

    for (index = 0; index < list.length; index++) {
      var name = list[index];
      searchDrinkByName(name, loadList);
    }
  }

  displayTrending(trending);

});
