let palNum = 212
let palNumRev = palNum.toString().split("").reverse().join("")

if (palNum == palNumRev){
    console.log(`${palNum} Is A Palidrome`);
}
else if (palNum !== palNumRev){
    console.log(`${palNum} Is Not One Of These Thingys!!`);
}
else if (palNum ){
    console.error("Incorrect Format");
}
