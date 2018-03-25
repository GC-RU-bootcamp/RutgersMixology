// indexed.js




function showLocationDialog(title) {
  $("#location-lookup-title").text(title);
  // $("#location-lookup-body").text(body);
  $("#location-lookup-modal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });
  this.dialogOpen = true;
} //showDialog



function showErrorDialog(title) {
  $("#error-title").text(title);
  // $("#location-lookup-body").text(body);
  $("#error-modal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });
  this.dialogOpen = true;
} //showDialog

$("#find-store").click(function (e) {
  var title = "Find a liquor store from:";

  myLocations.place = "liquor_store";
  setMyLocation(myLocations);
  showLocationDialog(title);
});

$("#find-bar").click(function (e) {
  var title = "Find a bar from:";

  myLocations.place = "bar";
  setMyLocation(myLocations);
  showLocationDialog(title);

});

$("#geo-search").click(function (e) {
  var title = "geo lookup failed test";
  
  getLocation();
  // showErrorDialog(title);
  // window.open("./searchMap.html","_self");
  // myLocations.lat = "bar";
  // myLocations.lng = "bar";

});

$("#addr-search").click(function (e) {
  var title = "addr lookup failed test";
  showErrorDialog(title);
  window.open("./searchMap.html","_self");

  // myLocations.lat = "bar";
  // myLocations.lng = "bar";

});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    showErrorDialog("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var msg = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  myLocations.lat = position.coords.latitude;
  myLocations.lng = position.coords.longitude;
  setMyLocation(myLocations);
  // p.attr("lat", position.coords.latitude )
  // p.attr("lng", position.coords.latitude )
  window.open("./searchMap.html","_self");

}


function showError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          showErrorDialog( "User denied the request for Geolocation.");
          break;
      case error.POSITION_UNAVAILABLE:
          showErrorDialog( "Location information is unavailable.");
          break;
      case error.TIMEOUT:
          showErrorDialog( "The request to get user location timed out.");
          break;
      case error.UNKNOWN_ERROR:
          showErrorDialog( "An unknown error occurred.");
          break;
  }
}
