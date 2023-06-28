// This file contains all the code needed for the test.  

// You DO NOT need to add or remove any code from this file.

const hello = require('../hello');

describe("Test Example Solution", function() {

	it("outputs the correct message", function() {
		expect(hello()).toBe("Hello, World!");
	});
 });