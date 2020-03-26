 const cards = [
 {
 	rank: 'queen',
 	suit: 'heart',
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
},
] ;
 const cardsInPlay = [] ; 
 function checkForMatch () {
 }
 function flipCard(cardId) {
 	console.log("User flipped a" + " " + cards[cardId].rank);
 	console.log(cards[cardId].suit);
 	console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
};

flipCard (0);
flipCard (2);

	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  alert("Sorry, try again.");
 };


