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

$("#find-store2").click(function (e) {
  var title = "Find a liquor store from:";

  myLocations.place = "liquor_store";
  setMyLocation(myLocations);
  showLocationDialog(title);
});


$("#find-store3").click(function (e) {
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

$("#find-bar2").click(function (e) {
  var title = "Find a bar from:";

  myLocations.place = "bar";
  setMyLocation(myLocations);
  showLocationDialog(title);

});

$("#find-bar3").click(function (e) {
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
  var addr = $("#location-str").val();
    getLatLngByAddr( addr );

});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPositionMap, showError);
  } else { 
    showErrorDialog("Geolocation is not supported by this browser.");
  }
}

function showPositionMap(position) {
  var msg = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  myLocations.lat = position.coords.latitude;
  myLocations.lng = position.coords.longitude;
  setMyLocation(myLocations);
  window.open("./searchMap.html","_self");

};


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
};


function getLatLngByAddr( addr) {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
      lat: -34.397,
      lng: 150.644
    }
  });

  var geocoder = new google.maps.Geocoder();

  // document.getElementById("submit").addEventListener("click", function() {
    geocodeAddress(geocoder, map, addr);
  // });
};

function geocodeAddress(geocoder, resultsMap, addr) {
  // var address = document.getElementById("address").value;
  geocoder.geocode(
    {
      address: addr
    },
    function(results, status) {
      if (status === "OK") {
        // see 
        myLocations.lat = results[0].geometry.location.lat()
        myLocations.lng = results[0].geometry.location.lng()
        setMyLocation(myLocations);
        window.open("./searchMap.html","_self");

        // resultsMap.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location
        // });
      } else {
        showErrorDialog("Geocode was not successful for the following reason: " + status);
      }
    }
  );
}

// MUST ADD THIS before this js file

// <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDF9kFWhXlw0yZLMhyn93tAJAS86JbZJVE&callback=initMap"> </script>
