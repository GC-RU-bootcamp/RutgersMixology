// var favoritesList = [];

function Favorite(drinkId, drinkName) {
  this.id =drinkId;
  this.name = drinkName;
}

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
    image: "./assets/images/heart-o-t.png",
    checked: "false"
  };
  if (isFavorite(id) > -1) {
    retval.image = "./assets/images/heart-t.png";
    retval.checked = "true";
  }
  return retval;
};

//value must be "true" or "false"
function favoriteToggle(value, id, name) {
  var retval = {
    image: "./assets/images/heart-o-t.png",
    checked: "false"
  };
  if (value === "false") {
    retval.image = "./assets/images/heart-t.png";
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
