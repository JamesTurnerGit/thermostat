describe("Plane", function(){

  var plane = new Plane();

  it("should create a plane", function(){

    expect(plane).toBeDefined();

  });

  it("should land", function(){

    expect(plane.hasLanded()).toBe(true);
  });


});
