
const firstNameList = ['Jim', 'John', 'James', 'Adam', 'Dom', 'Callum', 'Harry'];
const lastNameList = ['Cross', 'Lawrence', 'Mathews', 'Armitt', 'Cr'];
const colourList = ['Orange', 'Yellow', 'Red', 'Green', 'Blue']

let randomFirstName = Math.floor(Math.random() * firstNameList.length);
let randomLastName = Math.floor(Math.random() * lastNameList.length);
let randomColour = Math.floor(Math.random() * colourList.length);

let nameFirst = firstNameList[Math.floor(Math.random() * firstNameList.length)];
let nameLast = lastNameList[Math.floor(Math.random() * lastNameList.length)];
let colourRandom = colourList[Math.floor(Math.random() * colourList.length)];

let myAge = Math.floor(Math.random() * 100);

console.log(`My Name Is ${nameFirst} ${nameLast}, I Am ${myAge} And My Favourite Colour Is ${colourRandom}`);