const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!

  //Test 7 
  it('constructor sets position and default values for mode and generatorWatts', function() {
  let rover = new Rover(100);
  expect(rover.position).toEqual(100);
  expect(rover.mode).toEqual('NORMAL');
  expect(rover.generatorWatts).toEqual(110);
  });

  //Test 8
  it('response returned by receiveMessage contains name of message', function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test message', commands);
    let rover = new Rover(100);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('Test message');
  });

  //Test 9
  it('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message', commands);
    let rover = new Rover(100);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(2);
  });

  //Test 10
  it('responds correctly to status check command', function() {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message', commands);
    let rover = new Rover(100);
    let response = rover.receiveMessage(message);
    let expectedStatus = {
      mode: 'NORMAL',
      generatorWatts: 110,
      position: 100
    };
    expect(response.results[0].completed).toEqual(true);
    expect(response.results[0].roverStatus).toEqual(expectedStatus);
  });
  

  //Test 11
  it('responds correctly to mode change command', function() { 
    let position = 100;
    let rover = new Rover(position);
    let commands = [
      new Command('MODE_CHANGE', 'LOW POWER'),
      new Command('MODE_CHANGE', 'NORMAL')
    ];
    let message = new Message("Test Message", commands);

    let response = rover.receiveMessage(message);

    expect(response.results[0].completed).toBe(true);
    expect(rover.mode).toBe('NORMAL');
  });
  
  //Test 12
  it('responds with false completed value when attempting to move in LOW_POWER mode', function (){
    let position = 100;
    let rover = new Rover(position);
    rover.mode = 'LOW_POWER';
    let commands = [new Command('MOVE', 200)];
    let message = new Message("Test Message", commands);
    let response = rover.receiveMessage(message);

    expect(response.results[0].completed).toBe(false);
    expect(rover.position).toBe(position);
  });

  //Test 13
  it('responds with position for move command', function() {
    let position = 100;
    let rover = new Rover(position);
    let newPosition = 200;
    let commands = [new Command('MOVE', newPosition)];
    let message = new Message("Test Message", commands);
    let response = rover.receiveMessage(message);

    expect(response.results[0].completed).toBe(true);
    expect(rover.position).toBe(newPosition);
  });

});

