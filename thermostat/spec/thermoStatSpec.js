'use strict';
var thermostat;
var temperature;

describe('thermostat',function(){


  beforeEach(function(){
    thermostat = new ThermoStat;
  });


  describe('start with default temperature', function(){
    it('start at 20 degree',function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#up', function(){
    it('increases temperature', function(){
      thermostat.temperature = 20;
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('#down', function(){
    it('decreases temperature', function(){
      thermostat.temperature = 20;
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature', function(){
      thermotstat.temperature.minimum();
      expect(thermotstat.temperature).toEqual(10);
    });
  });



});
