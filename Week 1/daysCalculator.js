const birthday = new Date('February 07, 2002 00:00:00');
// Sunday - Saturday : 0 - 6
let someDate = birthday.getMonth()
someBigDate = someDate+1

console.log('You Were Born On: ');
console.log(birthday.getDate());
console.log(someBigDate);
console.log(birthday.getFullYear());

let endDate = new Date("February 07, 2023 00:00:00");
let now = new Date();

    let distance = endDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`it is ${days} days, ${hours} hours and ${minutes} minutes until your birthday`);