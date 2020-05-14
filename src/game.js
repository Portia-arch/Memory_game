//Cards 

const cards = document.querySelectorAll('.card');

let counter = document.getElementsByClassName('flips');
let flippedTrig = false;
let click = 0;
//the flipping of cards must be disabled if two sets of cards have been opened
let boardLocked = false;
let cardOne, cardTwo;


function flipTrigger() {

  counter.innerHTML = click++;

  if (boardLocked) return;
  // if (this === cardOne) return;
  this.classList.add('flip');

  //the first flip
  if (!flippedTrig) {
    flippedTrig = true;
    cardOne = this;

    return;

  }
  // the second flip
  flippedTrig = false;
  cardTwo = this;

  cardsMatch();
}


//check if the two flipped cards match and if they match they must remain opened. if not they must flip back and close

function cardsMatch() {
  if (cardOne.dataset.name === cardTwo.dataset.name) {
    return impairCards();
  }
  else {
    closeCards();
  }
}

//function that prevents flipped cards to be clicked
function impairCards() {
  cardOne.removeEventListener("click", flipTrigger);
  cardTwo.removeEventListener("click", flipTrigger);

}

//function that sets timeout for the unmatched cards to flip back and close
function closeCards() {

  setTimeout(() => {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');

    boardLocked = false;
  }, 500)

}

//should shuffle cards and display each card in the board
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


function gameStat() {

}

var seconds = 0; minutes = 0;
var timer = document.querySelector(".timer");
var interval;

function countTimer() {

  interval = setInterval(function () {
    timer.innerHTML = minute + "mins " + second + "secs ";
    ++totalSeconds;

    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);

}
function countMoves() {


  flips++;
  countTimer.innerHTML = flips;

  //start timer on first flip
  if (flips == 1) {
    second = 0;
    minute = 0;
    hour = 0;

    countTimer();
  }
}

cards.forEach(card => card.addEventListener('click', flipTrigger));

module.exports = {
  flipTrigger,
  impairCards,
}