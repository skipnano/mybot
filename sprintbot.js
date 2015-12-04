/*Sprint Bot*/

/*
OPTION 1
Create an object with nested arrays with Sprint data for three developers (devName, assigned, completed, inProgress)
Initialize hubot
Create a function to calculate the percentage of action items completed
if(above 70% return msg "you're % complete! Great job!") 
else if(below 70% return msg "you're % complete! How can we help?")
else("Are you OK?")
*/

var SprintData = { [devName: 'Ben', assigned: 20, completed: 16] , [devName: 'Julia', assigned: 30, completed: 25], [devName: 'Charlie', assigned: 15, completed: 5]}

module.exports = function(robot) {
	robot.respond(/How's (.*)'s sprint?/i, function(msg) {

	})
}

function progress(ais) {
	var completedAI = this.assigned / this.completed;
	return completedAI;
}

/*
OPTION 2
Create an object constructor for three devs sprint data (assigned, completed, inProgress)
Initialize hubot
Create a function to calculate the percentage of action items completed
*/

var SprintData = function(assigned, completed, inProgress) {
	this.assigned = assigned;
	this.completed = completed;
	this.inProgress = inProgress;
}

var ben = new SprintData( assigned: 20, completed: 16, inProgress: 2 );
var julia = new SprintData( assigned: 30, completed: 25, inProgress: 3 );
var charlie = new SprintData( assigned: 15, completed: 5, inProgress: 1 );

module.exports = function(robot) {
	robot.respond(/progress for (.*)/i, function(msg) {

	})
}

function progress(ais) {
	var completedAI = this.assigned / this.completed;
	return completedAI; 
}