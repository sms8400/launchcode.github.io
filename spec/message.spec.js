const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

// Test 4 Throwing an error 
  it('throws error if a name is NOT passed into the constructor as the first parameter', function() {
    expect(function() { new Message(); }).toThrow(new Error('Message name required.'));
  });

  //Test 5 Setting the name
  it('constructor sets name', function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test message', commands);
    expect(message.name).toBe('Test message');
  });
  

  //Test 6 Passing the array on the 2nd argument
  it('contains a commands array passed into the constructor as the 2nd argument', function() {
    const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    const message = new Message('Test message', commands);
    expect(message.commands).toEqual(commands);
  });
});
