$(document).ready(function() {
  
  function loadTrendingList(results) {
    console.log("RESULTS ARE");
    console.log(results);
  
    var tr = $("#trending");


    var s = "";
    var d = "";
    var img = "";
    var col = "";

    for (i = 0; i < results.drinks.length; i++) {
      console.log(results.drinks[i].strDrink);
      
      d = results.drinks[i];
      
      col = $("<div>");
      col.addClass("col-3 bg-dark text-light trending");
      col.attr("idDrink", d.idDrink);

      s = $("<h5>");
      s.text(d.strDrink);
      // s.attr("class", "title trending");
      s.attr("idDrink", d.idDrink);
      col.append(s);
      
      img = $("<img>");
      img.attr("src", d.strDrinkThumb);
      // img.attr("class", "trending");
      img.attr("alt", "Drink Picture");
      img.attr("width", "100%");
      s.attr("idDrink", d.idDrink);
      col.append(img);

      s = $("<hr>");
      // s.attr("class", "trending");
      s.attr("idDrink", d.idDrink);
      tr.append(col);
     }
  };

  function loadDrinkDetailModal(results) {
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

    for (i = 0; i < results.drinks.length; i++) {
      console.log(results.drinks[i].strDrink);
      d = results.drinks[i];
      
      $("#trending-title").text(d.strDrink);
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

      s = $("<h4>");
      s.text("Ingredients:");
      s.attr("idDrink", d.idDrink);
      desc.append(s);

      var strIngredient = "";
      var strMeasure = "";
      var col = "";
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
      $("#trending-modal").modal({
        backdrop: "static",
        keyboard: false
        // to prevent closing with Esc button (if you want this too)
      });
      this.dialogOpen = true;
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

 
  function displayTrending(list){

    var tr = $("#trending");
    tr.empty();

    for (index = 0; index < list.length; index++) {
      var name = list[index];
      searchDrinkByName(name, loadTrendingList);
    }
  };

  displayTrending(trending);

  $(document).on("click",".trending", function(e) {
    var id = $(this).attr("idDrink");
    cocktailById(id, loadDrinkDetailModal);
  });

  // $(document).on("click", ".random", function(e) {
  //   randomDrink(loadDrinkDetail);
  // });

  // $("button").click(function() {
  //   $("p").slideToggle();
  // });
});