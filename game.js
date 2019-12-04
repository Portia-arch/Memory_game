//Card 

const cards = document.querySelectorAll('.card');

 let flippedTrig = false;
 //the flipping of cards must be disabled if two sets of cards have been opened
 let boardLocked = false;
 let cardOne, cardTwo;

function flipTrigger() {
  if (boardLocked) return;
  if (this === cardOne) return;


  this.classList.add('flip');
 
  //the first flip
  if (!flipTrigger) {
    flipTrigger = true;
    cardOne = this;

  } else
    {
      // the second flip
      flipTrigger = false;
      cardTwo = this;

      cardsMatch();
  }

}

//check if the two flipped cards match and if they match they must remain opened. if not they must flip back and close

function cardsMatch() {
if (cardOne.dataset.name === cardTwo.dataset.name) {
  return impairCards();}
else {
  closeCards();
}
}

//function that prevents flipped cards to be clicked
function impairCards(){
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
(function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() *12);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener('click', flipTrigger));



// function flippedCard() {
  

// };




// grid.addEventListener("click", function() {
//   let selected = event.target

//   if (selected.nodeName === "section") {
//     return
//   }

//   selected.classList.add("selected")
// })