$(document).ready(function() {
  
  function loadDrinkDetail(results) {
    console.log("RESULTS ARE");
    console.log(results);
    data = "";
    var ov = $("#overview");
    var desc = $("#description");
    var ingre = $("#ingredients");
    ov.empty();
    desc.empty();
    ingre.empty();
    var s = "";
    var img = "";
    
    for (i = 0; i < results.drinks.length; i++) {
      console.log(results.drinks[i].strDrink);
      d = results.drinks[i];
      
      // placed all below into createLikeImageElement function
      // var like = "";
      // like = getFavoriteProperty(d.idDrink);
      // img = s = $("<img>");
      // img.attr("src", like.image);
      // img.attr("alt", "Like");
      // img.attr("width", "20px");
      // img.attr("class", "justify-content-end like");
      // img.attr("idDrink", d.idDrink);
      // img.attr("strDrink", d.strDrink);
      // img.attr("liked", like.checked);
 
      img = createLikeImageElement(d);
      ov.append(img);
      
      s = $("<h3>");
      s.text(d.strDrink);
      s.attr("class", "title");
      s.attr("idDrink", d.idDrink);
      ov.append(s);
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

      var a = $("<button>");
      // Adding a class
      a.addClass("random btn btn-dark btn-sm m-5");
      a.text("Next suggestion");
      ov.append(a);

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

      s = $("<h4>");
      s.text("Ingredients:");
      s.attr("idDrink", d.idDrink);
      desc.append(s);

      var strIngredient = "";
      var strMeasure = "";
      var col = "",
        ind = "";

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
          col.addClass("col-3 bg-dark text-light ");
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

     }
  };

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

  randomDrink(loadDrinkDetail);

  $(document).on("click", ".random", function(e) {
    randomDrink(loadDrinkDetail);
  });

  // moved like click handler to favoritesUlitility.js
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

  // $("button").click(function() {
  //   $("p").slideToggle();
  // });
});
