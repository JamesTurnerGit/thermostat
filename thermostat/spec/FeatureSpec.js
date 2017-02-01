use 'strict';
var thermostat;
var temperature;


describe('thermostat',function(){

  beforeEach(function(){
    thermostat = new ThermoStat;
    temperature = 20;
  });

  describe('start with default temperature', function(){
    it('start at 20 degree', function(){
      expect(thermostat.temperature()).toEqual(20);
    });
  });



});
