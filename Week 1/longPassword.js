let pwd = "0kkdslkdljflkdjfkjf";
let pwdLength = pwd.length;
let pwdShort = ["1","2","3","4","5","6"]
let pwdNill = undefined

console.log(pwdLength);

if (pwdLength >= 12) {
    console.log("You Have A STRONG Password!")
} else if (pwdLength >= 6) {
    console.log("Password COULD Be Stronger...");
// } else if (pwdShort == 1 || pwdShort == 2 || pwdShort == 3 || pwdShort == 4 || pwdShort == 5 || pwdShort == 6) {
} else if (pwdShort) {
    console.log("Password Is VERY WEAK...");
}
