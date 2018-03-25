var myLocations = {

  lat: "40.5349011", // 40.53490
  lng: "-74.5215597", // -74.52153
  address: "300 Atrium Dr, Somerset, NJ 08873", //full address
  street: "300 Atrium Dr",
  city: "Somerset",
  staate: "NJ",
  zip: "08873",
  place: "liquor_store"
};

function getMyLocation(){
    var myLoc = JSON.parse(localStorage.getItem("myLocations"));

    // if (!Array.isArray(myLoc)) {
    //   myLocations = [];
    // };
    return myLoc;
};


function setMyLocation(myLoc){
    localStorage.setItem("myLocations", JSON.stringify(myLoc));
};