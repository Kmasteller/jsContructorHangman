var prompt = require("prompt")
var Word = require("./word.js")

game = {
  wordBank: ["Jersey", "Android", "Millionare"],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(word){
    word ();
  }
}