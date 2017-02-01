'use strict';

describe("Airport", function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function(){ 
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = new Weather();
  });

  //console.log("here is the weather" + weather);
  //console.log(weather.isStormy());

  it("should create an airport", function(){

      expect(airport).toBeDefined();
  });

  it('should allow a plane to take off', function(){
    airport.land(plane);
    spyOn(weather, "isStormy").and.returnValue(false);
    airport.takeOff(plane, weather);
    expect(airport.landingBay).not.toContain(plane);
  });

  it('should prevent take-off when weather is stormy', function(){
    airport.land(plane);
    spyOn(weather, "isStormy").and.returnValue(true);
    expect(airport.takeOff(plane, weather)).toEqual("Weather warning: Not permitted to take-off");
  });
});
