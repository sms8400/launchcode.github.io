const reverse = require('../reverse.js');

describe("reverse", function(){

  it("should not change a single character", function(){
    expect(reverse("a")).toEqual("a");
  });

  it("should handle the empty string", function(){
    expect(reverse("")).toEqual("");
  });

  it("should reverse a short string", function(){
    expect(reverse("dog")).toEqual("god");
  });

  it("should reverse a long string", function(){
    expect(reverse("LaunchCode")).toEqual("edoChcnuaL");
  });

});