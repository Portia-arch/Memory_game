//Card 

const cards = document.querySelectorAll('.card');

 let flippedTrig = false;
 //the flipping of cards must be disabled if two sets of cards have been opened
 let lockBoard = false;
 let cardOne, cardTwo;

function flipTrigger() {
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
  }

  // //check if the flipped cards match
  //   console.log(cardOne.dataset.name);
  //   console.log(cardTwo.dataset.name);

  function cardmatch() {
    if (cardOne.dataset.name === cardTwo.dataset.name){

      cardOne.removeEventListener("click", flipTrigger);
      cardTwo.removeEventListener("click", flipTrigger);
    }

    else {
      cardOne.classList.remove('flip');
      cardTwo.classList.remove('flip');
    }
  }

}

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