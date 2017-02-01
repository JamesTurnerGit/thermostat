'use strict';

function Airport(){
  this.landingBay = [];
}

Airport.prototype.land = function (plane) {
  this.landingBay.push(plane);
  plane.hasLanded;
}

Airport.prototype.takeOff = function(plane, weather) {
  if (weather.isStormy() === false){
    this.landingBay.pop(plane);
    plane.hasLanded;
  }
  else if (weather.isStormy() === true){
    return "Weather warning: Not permitted to take-off";
  }

}

//console.log("hello");
