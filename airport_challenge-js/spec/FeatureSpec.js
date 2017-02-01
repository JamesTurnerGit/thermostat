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

      airport.land(plane);
      expect(airport.landingBay).toContain(plane);

    });

    it('should allow a plane to take off', function(){
      airport.land(plane);
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.takeOff(plane, weather);
      expect(airport.landingBay).not.toContain(plane)

    });

    it("should prevent take-off when weather is stormy", function(){
      airport.land(plane);
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(airport.takeOff(plane, weather)).toEqual("Weather warning: Not permitted to take-off");
    });
});
