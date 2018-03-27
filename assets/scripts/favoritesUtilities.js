// var favoritesList = [];

function Favorite(drinkId, drinkName) {
  this.id =drinkId;
  this.name = drinkName;
}

var icon_true = "./assets/images/Heart_icon_red.png"
var icon_false = "./assets/images/Heart_icon_red_hollow.png"



var favoritesList = JSON.parse(localStorage.getItem("favoritesList"));

// Checks to see if the todolist exists in localStorage and is an array currently
// If not, set a local list variable to an empty array
// Otherwise list is our current list of todos
if (!Array.isArray(favoritesList)) {
  favoritesList = [];
};

// add to list (id , name)

function addFavorite(id, name) {
  // if not alreay in the list then add
     // not found or is empty
  if ( favoritesList.length === 0 || isFavorite(id) === -1 ) {
    var newFav = new Favorite(id, name);
    favoritesList.push(newFav);
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }
  return newFav;
};

// remove from list
function removeFavorite(id) {
  var indexi = isFavorite(id);
  if (indexi !== -1) {
    favoritesList.splice(indexi, 1);
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }
};

// is in list --  returns index of favorite else returns -1
function isFavorite(id) {
  var retval = -1;
  var loop = 0;

  for (loop = 0; loop < favoritesList.length; loop++) {
    var fav = favoritesList[loop];
    if (fav.id === id) {
      retval = loop;
      break;
    }
  }
  return retval;
};

function getFavoriteProperty(id) {
  var retval = {
    image: icon_false,
    checked: "false"
  };
  if (isFavorite(id) > -1) {
    retval.image = icon_true;
    retval.checked = "true";
  }
  return retval;
};

//value must be "true" or "false"
function favoriteToggle(value, id, name) {
  var retval = {
    image: icon_false,
    checked: "false"
  };
  if (value === "false") {
    retval.image = icon_true;
    retval.checked = "true";
    addFavorite(id, name);
  } else {
    removeFavorite(id, name);
  }
  return retval;
};

// $("#animate-check").change("click", function() {
// var checked = $(this).is(":checked");
// var checked = $("#check_id").is(":checked");
// if ($("#check_id").is(":checked")) {
//   console.log(checked);
// }
// if (checked) {
//   console.log('checked');
// $("#animate-check").prop("checked", true);
// } else {
//   console.log('unchecked');
// $("#animate-check").prop("checked", false);
//   }
// });

// create a like image tag to be placed as needed
function createLikeImageElement(d) {
  var like = "";
  var img = "";
  // var imgHidden = "";
  // var s = "";

  like = getFavoriteProperty(d.idDrink);

  // s = $("<span>");
  // s.addClass("like-holder");
  // imgHidden = $("<img>");
  // imgHidden.attr("src", icon_true);
  // imgHidden.attr("width", "20px");
  // imgHidden.attr("class", "like-hidden");
  // imgHidden.attr("opacity", 0);
  // imgHidden.attr("position", "absolute");
  // imgHidden.attr("top", "0px");
  // imgHidden.attr("left", "opx");
  
  img = $("<img>");
  // img = $("<div>");
  img.attr("src", like.image);
  // img.css('background', 'url("' + like.image + '")');
  // img.css('background-image', 'url("' + like.image + '")');
  img.attr("alt", "Like");
  img.attr("width", "20px");
  img.attr("class", "justify-content-end like");
  img.attr("idDrink", d.idDrink);
  img.attr("strDrink", d.strDrink);
  img.attr("liked", like.checked);
  img.attr("position", "relative");

  // s.append(img);
  // s.append(imgHidden);
  // s.append(img);

  return img;
};

// create a like image click handler
$(document).on("click", ".like", function(e) {
  // e.stopPropagation();
  var id = $(this).attr("idDrink");
  var name = $(this).attr("strDrink");
  var isLiked = $(this).attr("liked");
  var like = "";

  like = favoriteToggle(isLiked, id, name);
  $(this).attr("src", like.image);
  $(this).attr("liked", like.checked);
});

// $(document).on("click", ".like-hidden", function(e) {
//   // e.stopPropagation();
//   var id = $(this).attr("idDrink");
//   var name = $(this).attr("strDrink");
//   var isLiked = $(this).attr("liked");
//   var like = "";

//   like = favoriteToggle(isLiked, id, name);
//   $(this).attr("src", like.image);
//   $(this).attr("liked", like.checked);
// });


// $(document).on("click", ".like-holder", function(e) {
//   // e.stopPropagation();
//   var id = $(this).attr("idDrink");
//   var name = $(this).attr("strDrink");
//   var isLiked = $(this).attr("liked");
//   var like = "";

//   like = favoriteToggle(isLiked, id, name);
//   $(this).attr("src", like.image);
//   $(this).attr("liked", like.checked);
// });


function likeImgByCnt() {
  var retval = icon_true;
  if ( favoritesList.length === 0 ) {
    retval = icon_false; 
  } 
  return retval; 

};

function setfavoriteBtnImg(){
 $("#likeBtnImg").attr("src", likeImgByCnt())

};

setfavoriteBtnImg();

