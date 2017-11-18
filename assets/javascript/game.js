// •••••THIS IS MICHAEL CLAUTICE'S PSYCHIC GAME•••••
// -
// DECLARE SOME GLOBAL SCOPE VARIABLES
// -
// this Psychic Game app will select a random letter from...
// this array called twentySixLetters
// twentySixLetters IS A GLOBAL VARIABLE OF THE ARRAY DATA TYPE
var twentySixLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// -
// Setting these 6 GLOBAL varialbles to their pre-game values
// -
// this html element - winsCounter - displays number of player's wins
var winsCounter = 0;
// -
// this html element - lossesCounter - displays number of player's loses
var lossesCounter = 0;
// -
// this html element - guessesRemainingCounter - displays the number of player's...
// remaining available guesses - w/ ea guess it will decrement by 1
var guessesRemainingCounter = 9;
// -
// this html element - guessedLetters - displays the player's guessed alphabet letters
// it is assigned an empty array now, but will later be populated w/ the player's guessed alphabet letters
var guessedLetters = [];
// -
// the variable - letterToGuess - is not assigned a value here
// it will later recieve the value of a random letter from the array twentySixLetters
var letterToGuess = null;
// -
// create a var called computerGuess & assign it the value of...
// a random letter from the twentySixLetters array as represented by its index position
var computerGuess = twentySixLetters[Math.floor(Math.random() * twentySixLetters.length)];
// -
// create a var called updateGuessesRemainingCounter
// actually we are creating & defining a function
// WOW! - i just realized we are not assigning it the value of a function, but...
// DEFINING AS A FUNCTION!! w/ no args or params - updateGuessesRemainingCounter()
var updateGuessesRemainingCounter = function () { // <----------START A SCOPE @ curly brace
  // that will use the querySelector() function...
  // to grab the HTML element '#guessesRemainingCounter' and...
  // use the innerHTML method/function (?) on it & assign it the value of...
  // a string literal concatenated to the current value of guessesRemainingCounter
  // (i.e. guessesRemainingCounter will get displayed in HTML)
  // DISPLAY IN THE MARKUP! - DISPLAY IN THE MARKUP!
  document.querySelector('#guessesRemainingCounter').innerHTML = "Your Guesses Left: " + guessesRemainingCounter;
}; // <----------CLOSE A SCOPE @ curly brace
// -
// •••••THIS IS MICHAEL CLAUTICE'S PSYCHIC GAME•••••
// -
// DEFINE A VARIABLE & TURN IT INTO A FUNCTION!
var updateLetterToGuess = function () { // <----------START A SCOPE @ curly brace
  this.letterToGuess = this.twentySixLetters[Math.floor(Math.random() * this.twentySixLetters.length)];
}; // <----------CLOSE A SCOPE @ curly brace
// -
// DEFINE A VARIABLE & TURN IT INTO A FUNCTION!
var updateGuessesSoFar = function () { // <----------START A SCOPE @ curly brace
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  // DISPLAY IN THE MARKUP! - DISPLAY IN THE MARKUP!
  document.querySelector('#lettersChosenCounter').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
}; // <----------CLOSE A SCOPE @ curly brace
// -
// DEFINE A VARIABLE & TURN IT INTO A FUNCTION!
// Function will be called when we reset everything
var reset = function () { // <----------START A SCOPE @ curly brace
  totalGuesses = 9;
  guessesRemainingCounter = 9;
  guessedLetters = [];
  // CALLING THE updateLetterToGuess() FUNCTION!
  updateLetterToGuess();
  // CALLING THE updateGuessesRemainingCounter() FUNCTION!
  updateGuessesRemainingCounter();
  // CALLING THE updateGuessesSoFar() FUNCTION!
  updateGuessesSoFar();
} // <----------CLOSE A SCOPE @ curly brace
// -
// CALLING THE updateLetterToGuess() FUNCTION!
updateLetterToGuess();
// -
// CALLING THE updateGuessesRemainingCounter() FUNCTION!
updateGuessesRemainingCounter();
// -
// •••••THIS IS MICHAEL CLAUTICE'S PSYCHIC GAME•••••
// -
// HERE IS A DOCUMENT onkeyup EVENT!
//When key is released it becomes the users guess
document.onkeyup = function (event) { // <----------START A SCOPE @ curly brace
  guessesRemainingCounter--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // -
  // this line uses the push() function to "push" userGuess into...
  // the guessedLetters[] array
  guessedLetters.push(userGuess);
  // -
  // CALLING THE updateGuessesRemainingCounter() FUNCTION!
  updateGuessesRemainingCounter();
  // -
  // CALLING THE updateGuessesSoFar() FUNCTION!
  updateGuessesSoFar();
  // -
  // here are the innerHTML
  // DISPLAY IN THE MARKUP! - DISPLAY IN THE MARKUP!
  if (guessesRemainingCounter > 0) { // <----------START A SCOPE @ curly brace
    if (userGuess == letterToGuess) { // <----------START A SCOPE @ curly brace
      winsCounter++;
      document.querySelector('#winsCounter').innerHTML = "Your Total Wins: " + winsCounter;
      alert("Yes, you are psychic!");
      reset();
    } // <----------CLOSE A SCOPE @ curly brace
  } // <----------CLOSE A SCOPE @ curly brace
  else if (guessesRemainingCounter == 0) { // <----------START A SCOPE @ curly brace
    // Then we will loss and we'll update the html to display the loss
    lossesCounter++;
    document.querySelector('#lossesCounter').innerHTML = "Your Total Losses: " + lossesCounter;
    alert("Sorry, you're not psychic, maybe try again?");
    // Then we'll call the reset.
    reset();
  } // <----------CLOSE A SCOPE @ curly brace
}; // <----------CLOSE A SCOPE @ curly brace
// -
// •••••THIS IS MICHAEL CLAUTICE'S PSYCHIC GAME•••••
// -
// -