//in plane class

describe("plane", function(){
  plane = new Plane
  describe("plane take off",function(){
    it("can take off", function(){
      expect(plane.take_off).toBeDefined();

    });
  });

});


describe("Airport", function(){
  airport = new Airport
    it("it is no longer in the airport", function(){
      expect(plane.landingBay).toEqual([]);

  });

});

plane.prototype.take_off = function(){
  landingBay.pop
};

airport.prototype.landingBay = {
  return [];
}


describe("A spy, when created manually", function() {
  var whatAmI;

  beforeEach(function() {
    whatAmI = jasmine.createSpy('whatAmI');

    whatAmI("I", "am", "a", "spy");
  });


  function F() {}

Fooa = spy(F)
new F() instanceof F; // true
