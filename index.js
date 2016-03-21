var chalk = require('chalk');

module.exports = {
	log: function(text) {
		var final_text = formatDateTime() + String(text);
		console.log(final_text);
	},

    error: function(text) {
        var final_text = formatDateTime() + chalk.red(String(text));
        console.log(final_text);
    },

    debug: function(text) {
        var final_text = formatDateTime() + chalk.yellow(String(text));
        console.log(final_text);
    }	
};

function formatDateTime() {
	var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return "[" + year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec + "] : ";
}