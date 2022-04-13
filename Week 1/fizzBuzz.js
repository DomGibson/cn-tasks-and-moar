// const num = 60

// if (num % 3 === 0) {
//     console.log("Fizz")
// } else if (num % 5 === 0) {
//     console.log("Buzz")
// } if (num % 3 === 0 && 5 === 0); {
//     console.log("FizzBuzz")
// }

for ( let i = 0; i <= 100; i++ ) {
    if ( i% 3 === 0 && i%5 === 0 ) {
        console.log('FizzBuzz');
    } else if ( i % 3 === 0 ) {
        console.log('Fizz');
    } else if ( i % 5 === 0 ) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}