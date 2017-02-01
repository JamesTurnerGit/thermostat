'use strict';

describe("User Stories", function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function(){ 
    airport = new Airport();
    plane = new Plane(); 
    weather = new Weather();
  });

    it("should land a plane at an airport", function(){
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.land(plane, weather);
      expect(airport.landingBay).toContain(plane);

    });

    it('should allow a plane to take off', function(){
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.land(plane, weather);
      airport.takeOff(plane, weather);
      expect(airport.landingBay).not.toContain(plane)

    });

    it("should prevent take-off when weather is stormy", function(){
      spyOn(weather, "isStormy").and.returnValue(true);
      airport.land(plane, weather);
      expect(airport.takeOff(plane, weather)).toEqual("Weather warning: Not permitted to take-off");
    });

    it('should prevent landing when weather is stormy', function(){
      spyOn(weather, "isStormy").and.returnValue(true);
      airport.land(plane, weather);
      airport.takeOff(plane, weather);
      expect(airport.landingBay).not.toContain(plane)

    });

    it('should prevent landing when airport is full', function(){
    spyOn(weather, "isStormy").and.returnValue(false);
    for (var i = 0; i <= 10; i++) {
      airport.land(plane,weather);
    }
  expect(airport.land(plane,weather)).toEqual("Sorry airport is full");

  });

});
