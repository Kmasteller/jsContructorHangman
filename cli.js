var inquirer = require("inquirer");
var Word =require("./word.js");

//guess this word - time permitting, will add multiple words, for loop and pick random
var gameWord = new Word("christmas");

//array for underscores
gameWord.holderArray();

//main function
function checkWordGuess(wordForGame){
	
	var userWordDisplayGuess = wordForGame.displayWord.join("");
	console.log(userWordDisplayGuess);
	
	if(userWordDisplayGuess === wordForGame.word){
		console.log("You win!")
		//console.log(true);
		return true
	}else{
		console.log("Keep guessing!")
		//question();
		return false

	}	
}

function question(){

	var count = 10;

inquirer.prompt([{
		type: "input",
		name: "modeSelect",
		message: "Guess a Letter! Guess the right word and you win!",
	}]).then( function (response) {
			
			console.log(response.modeSelect);
			gameWord.newLetter(response.modeSelect);
			console.log(gameWord.displayWord);
			
			var checking = checkWordGuess(gameWord);

			// console.log(checking);
			if(checking === false) {
				question()
			}
	})
	if (count === 0) {
		console.log("You are out of guesses, Game Over!!")
	}
}
question()