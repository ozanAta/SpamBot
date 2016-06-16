var exec = require('child_process').exec;

exec('node node_modules/nightwatch/bin/runner.js -t ./tests/spambot.js', function(error, stdout, stderr) {
	console.log(stdout);
});