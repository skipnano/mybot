/*Sprint Bot*/

/*
OPTION 2
Create an object constructor for three developers' sprint data (name, assigned, completed, inProgress)
Initialize hubot
Create a function to calculate the progress of the developer's sprint in the Developer object
If the user inputs a valid developer name, return that dev's sprint progress
*/

var Developer = function(name, assigned, completed, inProgress) {
	this.name = name;
	this.assigned = assigned;
	this.completed = completed;
	this.inProgress = inProgress;
	// this creates a new function inside of Devloper object
	this.progress = function () {
		var percent = (this.completed / this.assigned)*100;
		return percent;
	}
}

var ben = new Developer( 'Ben', 20, 16, 2 );
var julia = new Developer( 'Julia', 30, 25, 3 );
var charlie = new Developer( 'Charlie', 15, 5, 1 );
var anna = new Developer( 'Anna', 40, 19, 5);

// This allows the bot to match a user input
var developers = {
	ben: ben,
	julia: julia,
	charlie: charlie,
	anna: anna
};

module.exports = function(robot) {
	// this function calculates the percentage of stories completed
	robot.respond(/sprint progress for (.*)/i, function(msg) {
		var devName = msg.match[1];
		var developer = developers[devName];
		msg.send(developer.name + "'s sprint is " + developer.progress() + "% complete");
	});
	// this function shows the number of stories in progress
	robot.respond(/stories in progress for (.*)/i, function(msg) {
		var devName = msg.match[1];
		var developer = developers[devName];
		msg.send(developer.name + " is working on " + developer.inProgress + " stories");
	});
}
