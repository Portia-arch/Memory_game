//Card Data

//Card array
const game = document.getElementById("game")
const grid = document.createElement("section");
grid.setAttribute('class', 'grid');

game.appendChild(grid)

const cards = document.querySelector(".card");

// Randomize game grid on each load
grid.sort(() => 0.5 - Math.random())

//Export cards
let unlockedCard = false;
let lockedBoard = false;
let card1, card2;

//shuffles cards every time the game starts or restarts
(function startGame() {
    shuffle();
});

// Event listener to grid
grid.addEventListener('click', function(event) {
    // The event target is our clicked item
    let clicked = event.target
  
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION') {
      return
    }
  
    // Add selected class
    clicked.classList.add('clicked')
  })



// const cardArray = [{
//     game.Grid
// }]