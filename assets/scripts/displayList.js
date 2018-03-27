// $(document).ready(function() {

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
};

function loadList(results) {
  console.log("RESULTS ARE");
  console.log(results);

  var tr = $("#drink-list");

  var s = "";
  var d = "";
  var img = "";
  var col = "";
  var length = 0;

  if (results === "" || isEmpty(results.drinks)) {
    length = 0;
  } else {
    length = results.drinks.length;
  }

  if (length === 0 || isEmpty(results.drinks)) {
    col = noResultsMsg(3);
    tr.append(col);
  }

  for (i = 0; i < length; i++) {
    console.log(results.drinks[i].strDrink);

    d = results.drinks[i];

    col = $("<div>");
    col.addClass("col-3 bg-dark text-light ");
    col.attr("idDrink", d.idDrink);

    // placed all below into createLikeImageElement() function
    // var like = "";
    // like = getFavoriteProperty(d.idDrink);
    // img = $("<img>");
    // img.attr("src", like.image);
    // img.attr("alt", "Like");
    // img.attr("width", "20px");
    // img.attr("class", "justify-content-end like");
    // img.attr("idDrink", d.idDrink);
    // img.attr("strDrink", d.strDrink);
    // img.attr("liked", like.checked);
    img = createLikeImageElement(d);
    col.append(img);

    s = $("<h6>");
    s.text(d.strDrink);
    // s.attr("class", "title drink-detail");
    s.attr("idDrink", d.idDrink);
    col.append(s);

    img = $("<img>");
    img.attr("src", d.strDrinkThumb);
    img.attr("class", "drink-detail");
    img.attr("alt", "Drink Picture");
    img.attr("width", "100%");
    img.attr("width", "100%");
    img.attr("idDrink", d.idDrink);
    col.append(img);

    s = $("<hr>");
    // s.attr("class", "drink-detail");
    s.attr("idDrink", d.idDrink);
    col.append(s);
    tr.append(col);
  }
}

function loadDrinkDetailModal(results) {
  console.log("RESULTS ARE");
  console.log(results);
  data = "";
  var ov = $("#overview");
  var desc = $("#description");
  var ingre = $("#ingredients");

  var s = "";
  col = "";
  var length = 0;

  if (results === "" || isEmpty(results.drinks) ) {
    length = 0;
  } else {
    length = results.drinks.length;
  }

  if (length === 0) {
    col = noResultsMsg(6);
    ov.empty();
    ov.append(col);
  } else {
    ov.empty();
    desc.empty();
    ingre.empty();
  }

  for (i = 0; i < length; i++) {
    console.log(results.drinks[i].strDrink);
    d = results.drinks[i];

    $("#drink-detail-title").text(d.strDrink);
    // s = $("<h3>");
    // s.text(d.strDrink);
    // s.attr("class", "title");
    // s.attr("idDrink", d.idDrink);
    // ov.append(s);

    s = $("<h6>");
    s.text(d.strAlcoholic);
    s.attr("class", "category");
    s.attr("idDrink", d.idDrink);
    ov.append(s);
    s = $("<h6>");
    s.text(d.strCategory);
    s.attr("class", "category");
    s.attr("idDrink", d.idDrink);
    ov.append(s);
    var img = $("<img>");
    img.attr("src", d.strDrinkThumb);
    img.attr("alt", "Drink Picture");
    img.attr("width", "100%");
    ov.append(img);

    // var a = $("<button>");
    // // Adding a class
    // a.addClass("random btn btn-dark btn-sm m-5");
    // a.text("Next suggestion");
    // ov.append(a);

    desc.append($("<div>"));
    desc.append($("<hr>"));

    s = $("<h4>");
    s.text("Directions:");
    s.attr("idDrink", d.idDrink);
    desc.append(s);

    s = $("<h6>");
    s.text(d.strInstructions);
    s.attr("idDrink", d.idDrink);
    desc.append(s);

    s = $("<h6>");
    s.text("Serve in a " + d.strGlass);
    s.attr("idDrink", d.idDrink);
    desc.append(s);

    desc.append($("<hr>"));
    desc.append($("<div>"));

    // s = $("<h4>");
    // s.text("Ingredients:");
    // s.attr("idDrink", d.idDrink);
    // ingre.append(s);

    var strIngredient = "";
    var strMeasure = "";
    var ind = "";

    // col = $("<div>");
    // col.addClass("col-3 bg-dark text-light ");
    // ind = $("<h6>");
    // ind.text(d.strGlass);
    // col.append(ind);

    // // img = $("<img>");
    // // img.attr("src", imageURL(d.strGlass));
    // // //img.attr("alt", d.strGlass + "  picture");
    // // img.attr("width", "100%");
    // // col.append(img);
    // ingre.append(col);

    for (j = 1; j <= 15; j++) {
      strIngredient = "strIngredient" + j;
      strMeasure = "strMeasure" + j;
      if ($.trim(d[strIngredient]).length !== 0) {
        col = $("<div>");
        // col.addClass("col-3 bg-dark text-light ");
        col.addClass("col-3 ");
        ind = $("<h6>");
        ind.text(d[strMeasure]);
        col.append(ind);
        ind = $("<h5>");
        ind.text(d[strIngredient]);
        col.append(ind);
        img = $("<img>");
        img.attr("src", imageURL(d[strIngredient]));
        img.attr("alt", d[strIngredient] + " Ingredient picture");
        img.attr("width", "100%");
        col.append(img);
        ingre.append(col);
      }
    }
    $("#drink-detail-modal").modal({
      backdrop: "static",
      keyboard: false
      // to prevent closing with Esc button (if you want this too)
    });
    this.dialogOpen = true;
  }
}

function noResultsMsg(colWidth) {
  var col = "",
    s = "",
    colClass = "";
  colClass = "col-" + colWidth;

  col = $("<div>");
  col.addClass(colClass + " bg-dark text-light text-centered");
  col.append($("<br>"));
  col.append($("<br>"));
  s = $("<h2>");
  s.text("Sorry. Nothing found.");
  // s.attr("class", "title drink-detail");
  s.attr("class", "text-centered text-info");
  col.append(s);
  col.append($("<br>"));
  col.append($("<br>"));
  col.append($("<hr>"));
  return col;
}

// "idDrink": "11060",
// "strDrink": "Balmoral",
// "strVideo": null,
// "strCategory": "Ordinary Drink",
// "strIBA": null,
// "strAlcoholic": "Alcoholic",
// "strGlass": "Cocktail glass",
// "strInstructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
// "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
// "strIngredient1": "Scotch",
// "strIngredient2": "Sweet Vermouth",
// "strIngredient3": "Dry Vermouth",
// "strIngredient4": "Bitters",
// "strIngredient5": "",
// "strIngredient6": "",
// "strIngredient7": "",
// "strIngredient8": "",
// "strIngredient9": "",
// "strIngredient10": "",
// "strIngredient11": "",
// "strIngredient12": "",
// "strIngredient13": "",
// "strIngredient14": "",
// "strIngredient15": "",
// "strMeasure1": "1 1/2 oz ",
// "strMeasure2": "1/2 oz ",
// "strMeasure3": "1/2 oz ",
// "strMeasure4": "2 dashes ",
// "idDrink": "11060",
// "strDrink": "Balmoral",
// "strVideo": null,
// "strCategory": "Ordinary Drink",
// "strIBA": null,
// "strAlcoholic": "Alcoholic",
// "strGlass": "Cocktail glass",
// "strInstructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
// "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
// "strIngredient1": "Scotch",
// "strIngredient2": "Sweet Vermouth",
// "strIngredient3": "Dry Vermouth",
// "strIngredient4": "Bitters",
// "strIngredient5": "",
// "strIngredient6": "",
// "strIngredient7": "",
// "strIngredient8": "",
// "strIngredient9": "",
// "strIngredient10": "",
// "strIngredient11": "",
// "strIngredient12": "",
// "strIngredient13": "",
// "strIngredient14": "",
// "strIngredient15": "",
// "strMeasure1": "1 1/2 oz ",
// "strMeasure2": "1/2 oz ",
// "strMeasure3": "1/2 oz ",
// "strMeasure4": "2 dashes ",

$(document).on("click", ".drink-detail", function(e) {
  e.stopPropagation();
  var id = $(this).attr("idDrink");
  cocktailById(id, loadDrinkDetailModal);
});

// $(document).on("click", ".like", function(e) {
//   e.stopPropagation();
//   var id = $(this).attr("idDrink");
//   var name = $(this).attr("strDrink");
//   var isLiked = $(this).attr("liked");
//   var like = "";

//   like = favoriteToggle(isLiked, id, name);
//   $(this).attr("src", like.image);
//   $(this).attr("liked", like.checked);
// });

// });
