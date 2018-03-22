$(document).ready(function() {

  function displayTrending(list) {
    var sd = $("#drink-list");
    col = "";
    var length = list.length;

    if (length === 0) {
      col= noResultsMsg(12);
      sd.append(col);
    } else {
      sd.empty();
    }
        

    for (index = 0; index < length; index++) {
      var name = list[index];
      searchDrinkByName(name, loadList);
    }
  }

  displayTrending(trending);

});
