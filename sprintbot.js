/*Sprint Bot*/

/*
OPTION 1
Create an object of sprint data for three Developers where each developer is a key
Initialize hubot
Create a function to calculate the progress for a developer (percent of stories completed)
*/

var devlopers = { 
	ben: {
		name: 'Ben',
		assigned: 20, 
		completed: 16
	},
	julia: {
		name: 'Julia', 
		assigned: 30, 
		completed: 25
	}, 
	charlie: {
		name: 'Charlie',
		assigned: 15, 
		completed: 5
	}
};

module.exports = function(robot) {
	robot.respond(/sprint progress for (.*)/i, function(msg) {
		 var devName = msg.match[1];
		 if(devName === 'Ben') {
		 	var progress = progressCalc(devName);
		 	return msg.send(devName + "/'s progress is " + progress);
		 } else {
		 	return msg.send("Stop making up names :sadface:");
		 }

	});
}

function progressCalc(ais) {
	var completedAI = (this.completed / this.assigned)*100;
	return completedAI;
}

/*
OPTION 2
Create an object constructor for three developers' sprint data (name, assigned, completed, inProgress)
Initialize hubot
Create a function to calculate the progress of the developer's sprint
If the user inputs a valid developer name, return that dev's sprint progress
*/

var Developer = function(name, assigned, completed, inProgress) {
	this.name = name;
	this.assigned = assigned;
	this.completed = completed;
	this.inProgress = inProgress;
}

function.prototype.progress = function() {
	return (this.completed / this.assigned)*100;
}

var ben = new Developer( 'Ben', 20, 16, 2 );
var julia = new Developer( 'Julia', 30, 25, 3 );
var charlie = new Developer( 'Charlie', 15, 5, 1 );

var developers = [
	ben: ben,
	julia: julia,
	charlie: charlie;
];

module.exports = function(robot) {
	robot.respond(/sprint progress for (.*)/i, function(msg) {

		var devName = msg.match[1];
		if(developers[0]){
			var progResult = developers['ben'].progress();
			return msg.send(devName + "/'s progress is " + progResult);
		} else if(developers[1]) {
			var progResult = developers['julia'].progress();
			return msg.send(devName + "/'s progress is " + progResult);
		} else if(developers[2]) {
			var progResult = developers['charlie'].progress();
			return msg.send(devName + "/'s progress is " + progResult);)
		} else {
			return ('Stop making up names :sadface;');
		}

	});
}
