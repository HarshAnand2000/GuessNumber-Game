"use strict";
const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const wrapper = document.querySelector(".wrapper");
const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

//Generating secret number
function generateRandom() {
  return Math.ceil(Math.random() * 20);
}
//to change the text Content
function displayMessage(element, text) {
  element.textContent = text;
}
let secretNumber = generateRandom();

let score = 20; //called as state varaiable because this score is part of the so called application state, also secretNumber is a state varaiable.
let highscore = 0;

btnCheck.addEventListener("click", function () {
  //Guetting user's guess
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    // message.textContent = "⛔ No Number!";
    displayMessage(message, "⛔ No Number!");
  }

  //when guess is right
  else if (guess === secretNumber) {
    message.textContent = "🥳 Correct Number!";
    number.textContent = secretNumber;
    //highscore functionality
    if (score > highscore) {
      highscore = score;
      // highscoreEl.textContent = highscore;
      displayMessage(highscoreEl, highscore);
    }
    //winning css
    wrapper.classList.add("won-color");
    number.classList.add("won-padding");
  }

  //when guess is not right
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage(message, " 📈 Too High!")
        : displayMessage(message, " 📈 Too Low!");
      // message.textContent = " 📈 Too High!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
      //losing css
      wrapper.classList.add("lost");
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = " 📈 Too High!";
  //     score--;
  //     scoreEl.textContent = score;
  //   } else {
  //     message.textContent = "💥 You lost the game!";
  //     scoreEl.textContent = 0;
  //     //losing css
  //     wrapper.classList.add("lost");
  //   }
  // }
  //when guess is too low
  // else {
  //   if (score > 1) {
  //     message.textContent = " 📉 Too Low!";
  //     score--;
  //     scoreEl.textContent = score;
  //   } else {
  //     message.textContent = "💥 You lost the game!";
  //     scoreEl.textContent = 0;
  //     wrapper.classList.add("lost");
  //   }
  // }
});

btnAgain.addEventListener("click", function () {
  //restoring intial values of state variables
  score = 20;
  secretNumber = generateRandom();

  //inital condition of our content
  displayMessage(message, "Start guessing...");
  displayMessage(scoreEl, score);
  displayMessage(number, "?");
  // message.textContent = "Start guessing...";
  // scoreEl.textContent = score;
  // number.textContent = "?";

  //removing css
  wrapper.classList.remove("won-color");
  wrapper.classList.remove("lost");
  number.classList.remove("won-padding");

  document.querySelector(".guess").value = "";
});
