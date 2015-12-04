/*Convert USD to BTC */

var btcRate = 300;

module.exports = function(robot) {
	robot.respond(/convert (.*) to btc/i, function(msg) {
		//conditionals, for loops can be written here
		var userUSD = msg.match[1];
		userUSD = parseFloat(userUSD);
		if(userUSD && userUSD > 0) {
			var btc = usdToBTC(userUSD);
			// how a messgase is sent back to slackbot
			return msg.send(btc + ' btc :moneybag:');
		} else {
			return msg.send('We can only convert numbers. :rage:');
		}
	});
	//this is where the next bot function would go - robot.respond()
};


function usdToBTC(usd) {
	var convertedBTC = usd / btcRate;
	return convertedBTC;
}