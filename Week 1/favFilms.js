
// LOOPER FILMS
// myArray = ["World War Z","Robots","Wall-E","Army Of Theives","The Dark Knight"]

// for (let i = 0; i < myArray.length; i++ ){
//     console.log(myArray[i]);
// }

// 6 NUMBERS
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*50))

// let rndInt1 = Math.floor(Math.random() * 50) + 1
// let rndInt2 = Math.floor(Math.random() * 50) + 1
// let rndInt3 = Math.floor(Math.random() * 50) + 1
// let rndInt4 = Math.floor(Math.random() * 50) + 1
// let rndInt5 = Math.floor(Math.random() * 50) + 1
// let rndInt6 = Math.floor(Math.random() * 50) + 1

// let num = [rndInt1, rndInt2, rndInt3, rndInt4, rndInt5, rndInt6];

// console.log(`${num}`);


// LOOP 0 > 9
// const myLoopTwo = (0, 10)

// for (let i = 0; i < myLoopTwo; i++ ){
//     console.log(i);
// }



// // FILMS 4 STORED IN ARRAY

// myArray = [
//     "World War Z",
//     "Robots",
//     "Ghostbusters",
//     "Army Of Theives",
// ]

// for (let i = 0; i < myArray; i++ ) {
//     if (myArray == "Ghostbusters") {
//     console.log("True")
//     } else {
//     console.log("False");
//     }
// }

// // INCOMPLETE





let rndInt1 = Math.floor(Math.random() * 30) + 1
let rndInt2 = Math.floor(Math.random() * 30) + 1
let rndInt3 = Math.floor(Math.random() * 30) + 1
let rndInt4 = Math.floor(Math.random() * 30) + 1
let rndInt5 = Math.floor(Math.random() * 30) + 1
let rndInt6 = Math.floor(Math.random() * 30) + 1

let num = `
${rndInt1}, 
${rndInt2}, 
${rndInt3}, 
${rndInt4}, 
${rndInt5}, 
${rndInt6}`

// console.log(`${num}`);

for ( let i = 0; i <= 1; i++ ) {
    if ( rndInt1 == i% 7 === 0 ) {
        console.log("FooBar");
    } else if ( rndInt2 == i% 7 === 0 ) {
        console.log("FooBar");
    } else if ( rndInt3 == i% 7 === 0 ) {
        console.log("FooBar");
    } else if ( rndInt4 == i% 7 === 0 ) {
        console.log("FooBar");
    } else if ( rndInt5 == i% 7 === 0 ) {
        console.log("Foobar");
    } else if ( rndInt6 == i% 7 === 0 ) {
        console.log("FooBar");
    }

}