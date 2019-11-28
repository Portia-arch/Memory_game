//Card Data
const cards = document.querySelector(".card")

function flipcard(){
this.classList.toggle(flipcard)

  console.log("You just clicked me!");
  console.log(this);
}

cards.forEach(card => card.addEventListner("click", flipcard));
