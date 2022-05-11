// let parkingFee = "3.00"; // per hour

// let myCars = [
// {
//     numPlate: "DG12XOL",
//     make: "VAUXHALL",
//     model: "CORSA",
//     colour: "YELLOW",
//     parkingPaid: "3.00"
// },
// {
//     numPlate: "KA55LLM",
//     make: "RENAULT",
//     model: "MEGAN",
//     colour: "ORANGE",
//     parkingPaid: "6.00"
// },
// {
//     numPlate: "LS68MCC",
//     make: "BMW",
//     model: "1 SERIES",
//     colour: "BLACK",
//     parkingPaid: "9.00"
// }]

// class Cars {
//     constructor() {
//         this._numPlate = numPlate;
//         this._make = make;
//         this._model = model;
//         this._colour = colour;
//         this._parkingTime = parkingTime;
//     }
// }

// const car = new Cars("DG12XOL")

// console.log(car);




// NEW -- NEW -- NEW -- NEW -- NEW -- NEW -- NEW -- NEW

class Cars {
    constructor(reg, arrival) {
        this._reg = reg;
        this._arrival = arrival;
        this._departure;
        this._totalCost;
        this._amountPaid;
        this._costPerHour = 3;
        this._hasPaid = false;
        this._staff = false;
        this._staffCredits = 5;
    }
    departure(time) {
        this._departure = time;
        this._totalCost = this._departure - this._arrival * this._costPerHour;
    }
    payParking(payment) {
        if (this._amountPaid < this._totalCost) {
            this._amountPaid = this._amountPaid + payment;
        } else {
            this._hasPaid = true;
        }
    }
    staffCheck(card) {
        if (card == 1) {
            this._staff = true;
            this._staffCredits--;
            this._totalCost == 0;
            this._hasPaid = true;
        } else if (card == 0) {
            this._hasPaid = false;
            this._staff = false;
            this._staffCredits = 0;
        }
    }
    exit() {
        if (this._hasPaid) {
            console.log(`Thanks For Visiting!`);
        }
    }
}

const DG12XOL = new Cars("DG12XOL", 5);

console.log(DG12XOL);
DG12XOL.staffCheck(true)
DG12XOL.staffCheck(true)
console.log(DG12XOL);

