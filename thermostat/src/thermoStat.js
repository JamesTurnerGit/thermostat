'use strict';
function ThermoStat(){
  this._START_TEMP = 20;
  this.temperature = this._START_TEMP;
}

ThermoStat.prototype.up = function (){
  this.temperature += 1;
}

ThermoStat.prototype.down = function(){
  this.temperature -= 1;
}
