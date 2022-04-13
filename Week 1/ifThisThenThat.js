// // Strict Equal
// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// // Equal To
// if (1 !== "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

let chocolate = "Dairy Milk"
let topping = "Caramel"

if (chocolate == "Mars" && topping == "Caramel") {
    console.log(`Mmm! Yummy ${chocolate} & ${topping}!`);
}
else if (chocolate == "Break" || topping == "Caramel") {
    console.log("Yuck");
}
else if (chocolate == "Crunch" && topping == "Crunchy") {
    console.log("Kinda Bad");
}
else {
    console.log("Wheres The Choc");
}