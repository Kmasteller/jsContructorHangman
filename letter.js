//letter Constructor
function HangmanLetter(letter, correctGuess){
	this.letter = letter;
	this.correctGuess = correctGuess;
	this.display = function(){
		if(this.correctGuess){
			return this.letter
		} else {
			return '_'
		}
	}
}

module.exports = HangmanLetter;