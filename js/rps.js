/* GhostViz
   Rock, Paper, Scissors Game using switch case and if statements
   4/20/2015
   http://www.nicholscomputing.com
*/

function rps(value) {
	// get the button the player clicked
	var playerThrow = value;
	// diplay the results 
	var results = document.getElementById('results');
	var output = document.getElementById('output');
	// random number 1 - 3 to get R P or S
	var compNum = Math.floor(Math.random() * 3) + 1;
	// variable for computer output
	var text;
	var compThrow;
	// let us know what the computer got
	switch (compNum) {
    case 1:
        text = "Computer: <img src='img/rock-icon.png'>";
        var compThrow = "Rock";
        break; 
    case 2:
        text = "Computer: <img src='img/paper-icon.png'>";
        var compThrow = "Paper";
        break; 
    case 3: 
        text = "Computer: <img src='img/scissors-icon.png'>";
        var compThrow = "Scissors";
        break;
	}

	// let us know what the player picked
	switch (playerThrow) {
    case "Rock":
        playertext = "You: <img src='img/rock-icon.png'>";
        break; 
    case "Paper":
        playertext = "You: <img src='img/paper-icon.png'>";
        break; 
    case "Scissors": 
        playertext = "You: <img src='img/scissors-icon.png'>";
        break;
	}

	// set a winner or see if it's a tie. 
	if(compThrow == "Scissors" && playerThrow == "Rock" || compThrow == "Rock" && playerThrow == "Paper" || compThrow == "Paper" && playerThrow == "Scissors") {
		output.innerHTML = playertext+ "<br />" + text;
		results.innerHTML = "Hooray! You won :)";
	} else if(playerThrow == "Scissors" && compThrow == "Rock" || playerThrow == "Rock" && compThrow == "Paper" || playerThrow == "Paper" && compThrow == "Scissors") {
		output.innerHTML = playertext + "<br />" + text;
		results.innerHTML = "Oh no! You lost :(";
	} else {
		output.innerHTML = playertext + "<br />" + text;
		results.innerHTML = "Yuck! Just like kissin' your sister :|";
	}
}