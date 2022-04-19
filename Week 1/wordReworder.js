let word = "coin";

let firstLetter = word.charAt(0);
let lastLetter = word.slice(-1);

let middleMan = firstLetter != lastLetter;

console.log(firstLetter);
console.log(lastLetter);

if (firstLetter == lastLetter) {
    console.log(`It's A Perfect Match!!!`)
} else if (middleMan) {
    console.log("Letters Are Not The Same...");
}