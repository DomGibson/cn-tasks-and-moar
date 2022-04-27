// const myHeading = document.getElementById("heading")
// const myInput = document.getElementById("inputBox")
// const myButton = document.getElementById("buttonThing")
// const drinks = document.getElementsByTagName("li")[0]

// myHeading.addEventListener("click", () => {
//     myHeading.style.color = "red";
// })

// myButton.addEventListener("click", () => {
//     myHeading.style.color = myInput.value
// })



// // myButton.addEventListener("click", () => {
// //     myHeading.textContent = myInput.value
// //     const list = document.getElementsByTagName("li")
// //     for (let index = 0; index < list.length; index++) {
// //     
// // }
// // })


// // console.log(list)
// // console.log(list.length);

// const listItems = document.querySelectorAll("li:nth-child(even)")

// for (let index = 0; index < listItems.length; index++) {
//     listItems[index].style.color = 'hotpink'
    
// }
// console.log(listItems);
// console.log(listItems.length);






// const placeholder = document.getElementById("placeholder");
// const input = document.getElementById("input");
// const submit = document.getElementById("submit");
// const list = document.getElementById("list");

// submit.addEventListener("click", () => {
// placeholder.style.color = "goldenrod";
// placeholder.textContent = `I Like ${input.value}`;

// list.innerHTML = `<li>${input.value}</li>`
// })


const input = document.getElementById("input")
const submit = document.getElementById("submit")
const image = document.getElementById("image")

// Doesnt Work RN addEventListener NOT WORKING
submit.addEventListener("click", () => {
    if(image.style.display == "none") {
        image.style.display = "block"
        submit.textContent = "hide"
    } else {
        image.style.display = "none"
        submit.textContent = "show"
    }
})