var ImageBlackAndWhite = require("nativescript-image-black-and-white").ImageBlackAndWhite;
var imageBlackAndWhite = new ImageBlackAndWhite();

describe("greet function", function() {
    it("exists", function() {
        expect(imageBlackAndWhite.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imageBlackAndWhite.greet()).toEqual("Hello, NS");
    });
});