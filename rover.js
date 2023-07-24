class Rover {
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }
 
   receiveMessage(message) {
     let res = {
       message: message.name,
       results: []
     }
 
     for (const command of message.commands) {
 
       if (command.commandType === 'STATUS_CHECK') {
         res.results.push({
           completed: true,
           roverStatus: {
             mode: this.mode,
             generatorWatts: this.generatorWatts,
             position: this.position
           }
         });
 
       }
 
       if (command.commandType === 'MODE_CHANGE') {
         this.mode = command.value;
         res.results.push({
           completed: true
         });
       } else if (command.commandType === 'MOVE') {
         if (this.mode === 'LOW_POWER') {
           res.results.push({
             completed: false
           });
         } else {
           this.position = command.value;
           res.results.push({
             completed: true
           });
         }
 
 
       }
 
     }
     return res
   }
 }
 
 module.exports = Rover;
 
 // set up my test data with different types of tests and messages and recieve the response from the method to see if I have the right structure. 
 
 // have to make sure you confirm the process of the item and provide the status of the property in the result array.
 
 // accessed the value in a complex object with the array. 