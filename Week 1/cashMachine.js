
let bank = {
    bankProfiles: {
        dominikGibson: {
            id: 1,
            nameFirst: "DOMINIK",
            nameLast: "GIBSON",
            balance: "250",
            pin: "1234"
        },
        peterPan: {
            id: 2,
            nameFirst: "PETER",
            nameLast: "PAN",
            balance: "550",
            pin: "6666"
        },
    }
}


// let myAmount = 250;
let dGibson = bank.bankProfiles.dominikGibson
let pPan = bank.bankProfiles.peterPan

let myInput = 1
let myPin = "1234"

//DGIBSON
if (myInput === dGibson.id) {
    console.log(`PLEASE ENTER PIN FOR ACCOUNT: ${myInput}: ${myPin}`);
}
if (myInput != dGibson.id) {
    console.log(`INCORRECT ACCOUNT...`);
}
if (myInput === dGibson.id && myPin === dGibson.pin) {
    console.log(`THE PIN ${myPin} IS CORRECT`);
    console.log(`BALANCE: ${dGibson.balance}`);
} else if (myInput != dGibson.id && myPin != dGibson.pin) {
    console.log(`PIN *${myPin}* IS INCORRECT...`);
}


//PPAN
if (myInput === pPan.id) {
    console.log(`PLEASE ENTER PIN FOR ACCOUNT: ${myInput}: ${myPin}`);
} else if (myInput != pPan.id) {
    console.log(`INCORRECT ACCOUNT...`);
}

if (myInput === pPan.id && myPin === pPan.pin) {
    console.log(`THE PIN ${myPin} IS CORRECT`);
    console.log(`BALANCE: ${pPan.balance}`);
} else if (myInput != pPan.id && myPin != pPan.pin) {
    console.log(`PIN *${myPin}* IS INCORRECT...`);
}

