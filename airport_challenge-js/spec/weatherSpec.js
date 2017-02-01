'use strict';

describe("Weather", function(){

  var weather;

  beforeEach(function(){ 
    weather = new Weather();

  });

  it("should create some weather", function(){

    expect(weather).toBeDefined();

  });

  it("should create some stormy weather", function(){

    spyOn(weather, "isStormy").and.returnValue(true);

    expect(weather.isStormy()).toBe(true);

  });

});
