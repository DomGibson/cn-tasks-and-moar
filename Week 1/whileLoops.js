// let age = 15;

// while (age < 18) {

//     console.log("You Are A Child!");
//     age++

// }

// console.log("You Are An Adult!");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);