const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
//test 1 Throws the command type error
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

//Test 2 Is when the command passes
  it('constructor sets command type', function() { 
  let command = new Command('MODE_CHANGE', 'LOW_POWER');
  expect(command.commandType).toEqual('MODE_CHANGE');
});

//Test 3
  it('constructor sets a value passed in as the 2nd argument', function() {
    let command = new Command('MOVE', 500);
    expect(command.value).toBe(500);
});

});


// The test is refers to the test of the specifications.