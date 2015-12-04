/*OPTION ONE*/

var SprintData = { [devName: 'Ben', assigned: 20, completed: 16] , [devName: 'Julia', assigned: 30, completed: 25], [devName: 'Charlie', assigned: 15, completed: 5]};

module.exports = function(robot) {
	robot.respond(/How's (.*)'s sprint?/i, function(msg) {
	// stuff goes here
	});
}

function progress(ais) {
	var completedAI = this.assigned / this.completed;
	return completedAI;
}


/*OPTION TWO*/

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
	// stuff here
	});
}

function progress(ais) {
	var completedAI = this.assigned / this.completed;
	return completedAI; 
}