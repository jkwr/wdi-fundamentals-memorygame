// var cardOne = 'Queen';
// var cardTwo = 'King';
// var cardThree = 'King';
// var cardFour = 'King';
// console.log("User flipped " + cardOne);

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
 
// if (cardsInPlay[0] === cardsInPlay[3] ) {
// 	alert('you found a match');
// } else {
// 	alert('sorry try again');
// }


function flipCard () {
var cardId = this.getAttribute("data-id");

var cardOne = cards[0];
 cardsInPlay.push(cardOne);
 // console.log("User flipped " + cardOne);

 var cardTwo = cards[2];
 cardsInPlay.push(cardTwo);
 // console.log("User flipped " + cardTwo);
 
 cardsInPlay.push(cards[cardId].rank);
 
 console.log("User flipped " + cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}

var createBoard = function () {
for ( var i = 0; i < cards.length; i++ ) {
 var cardElement = document.createElement("img");
 cardElement.setAttribute("src", "images/back.png");
 cardElement.setAttribute("data-", i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);	


	}
};

createBoard();


function checkForMatch () {
	
	this.setAttribute("src", cards[cardId].cardImage);

	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}





