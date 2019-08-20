// Import stylesheets
import './style.css';

// Write Javascript code!

const now = new Date();
const firstRecycle = Date.parse("August 14, 2019");

//var timePassed = now.getTime() - firstRecycle;
var timePassed = Date.parse("August 20, 2019") - firstRecycle;
var weeksPassed = Math.floor( timePassed / (1000 * 3600 * 24 * 7) );

var message;

if(weeksPassed % 2 > 0) message = "Recycle on Tuesday!"
else message = "Don't recycle yet."

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${message}</h1>`;