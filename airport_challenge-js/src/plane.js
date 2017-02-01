'use strict';

function Plane(){
  this.landed = false

}

Plane.prototype.hasLanded = function () {
  this.landed === true ? this.landed = false : this.landed = true;
  return this.landed; 
};
