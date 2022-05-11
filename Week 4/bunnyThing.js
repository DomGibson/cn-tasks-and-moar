// let thing = {
//     this: "",
//     that: 1234,
//     other: true,
// }

// let myArray = [
//     "0720",
//     "1440",
//     "1920",
//     "2560"
// ];

// for (let i = 0; i < myArray.length; i++) {
//     let thingy = myArray[i];
//     console.log(thingy);
// }

// let rosie
// let drinks = {

//     // _name: "Rosie",
//     // _hopping: false,
//     // _thirst: 50,
    
//     // get name() {
//     //     return this._name;
//     // },
//     // get hopping() {
//     //     return this._hopping;
//     // },
//     // get thirst() {
//     //     return this._thirst;
//     // },

//     pepsi: {
//         stock: 30,
//         price: 2,
//     },
//     water: {
//         stock: 21,
//         price: 0.90,
//     },

// }

// console.log(drinks.water); 

class Bunny {
    constructor(name) {
        this._name = name;
        this._hopping = 0;
        this._thirst = 50;
    }
    // get name() {
    //     return this._name;
    // }
    // get hopping() {
    //     return this._hops;
    // }
    // get thirst() {
    //     return this._thirst;
    // }
}

const rosie = new Bunny("Rosie")
const john = new Bunny("John")


console.log(john)