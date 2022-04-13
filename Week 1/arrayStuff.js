// let coffeeOrder = [
//     "Alex = Coffee",
//     "Ben = Coffee",
//     "Charlie = Biscuit",
// ];

// // coffeeOrder[1] = "Ann = Biscuit"

// // coffeeOrder.pop()

// // coffeeOrder.push("Donna = Biscuit")

// console.log(coffeeOrder);

// let myPlaylist = [
//     "Stay - Post Malone",
//     "Yellow - Coldplay",
//     "The Chain - Fleetwood Mac"
// ]

// myPlaylist[3] = "Thiago Silver - Dave";
// myPlaylist[4] = "Packs & Potions - Hazey";

// myPlaylist.pop()

// myPlaylist.splice(2, 0, "2MS - Nemmzz")

// console.log(myPlaylist);



// let myDrinks = [
//     "Coca-Cola",
//     "Fanta Orange",
//     "Fanta Fruit Twist",
//     "Pepsi",
//     "Red Bull"
// ];

// for (let i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks[i]);
// }

let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0){
        multiplesTwo.push(i)
    }
}

console.log(`Numbers Divisible By 2 Between 0 And 20 Are: ${multiplesTwo}`);