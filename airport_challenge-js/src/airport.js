'use strict';

function Airport(){
  this.landingBay = [];
  this.CAPACITY = 10;
}

Airport.prototype.land = function (plane, weather) {
  if (weather.isStormy() === false && this.landingBay.length <= this.CAPACITY){
    this.landingBay.push(plane);
    plane.hasLanded;

} else if (weather.isStormy() === true){
    return "Weather warning: Not permitted to take-off";
  } else if (this.landingBay.length > this.CAPACITY) {
    return "Sorry airport is full"
  }
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
