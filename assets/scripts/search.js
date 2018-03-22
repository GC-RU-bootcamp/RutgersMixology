$(document).ready(function() {
  // function displayResults(list) {
  //   var sd = $("#drink-list");
  //   sd.empty();

  //   for (index = 0; index < list.length; index++) {
  //     var name = list[index];
  //     searchDrinkByName(name, loadList);
  //   }
  // }

  // displayTrending(trending);

  function loadIngredients(il) {
    var ind = "";
    var s = "",
      col = "";
    indArea = $("#ind-list");

    for (let j = 0; j < il.length; j++) {
      ind = il[j];
      s = $("<span>");
      s.text(ind);
      // s.attr("class", "ingredient");

      col = $("<div>");
      col.attr(
        "class",
        "col-2 ing-pick border border-dark p-1 rounded text-center"
      );
      col.attr("ingredient-value", ind);
      col.append(s);
      indArea.append(col);
    }
  }

  loadIngredients(ingredientList);

  $(document).on("click", ".ing-pick", function(e) {
    e.stopPropagation();
    var ind = $(this).attr("ingredient-value");
    var pick = $("#ing-name");
    pick.val(ind);
    // pick.text(ind);
    // if (ind === "?") {
    //   drinkSearchParams.ingredients = "";
    // } else {
    //   drinkSearchParams.ingredients = ind;
    // }
  });

  $("#ing-search").click( function (e) {
    var achoholValue = $('input[name=achohol]:checked').val();
    var categoryValue = $('input[name=category]:checked').val();
    var ingValue = $("#ing-name").val();
    console.log(categoryValue+ ", "+achoholValue+ ", "+ ingValue );
    if (!(achoholValue === "" &&  categoryValue === "" && ingValue === "")){
      drinkSearchParams.alcohol = achoholValue;
      drinkSearchParams.category = categoryValue;
      drinkSearchParams.ingredients = ingValue;
      drinkSearchParams.searchBy = "ingredients";
      localStorage.setItem("drinkSearchParams", JSON.stringify(drinkSearchParams));
      window.open("./results.html","_self")
      
  } });

  $("#name-search").click( function (e) {

    var nameValue = $("#drink-name").val();
    console.log(nameValue );
    if (nameValue !== ""){
        drinkSearchParams.name = nameValue;
        drinkSearchParams.searchBy = "name";

        localStorage.setItem("drinkSearchParams", JSON.stringify(drinkSearchParams));
      window.open("./results.html","_self")

    }
  });



}); // end document.ready
