const input = document.getElementById("input")
const button = document.getElementById("submit")
const list = document.getElementById("list")
const showHide = document.getElementById("showHide")
const remove = document.getElementById("remove")
const listItems = document.getElementsByTagName("li")


button.addEventListener("click", () => {
    let listItem = document.createElement("li")
    listItem.textContent = input.value
    list.appendChild(listItem)
    input.value = ""
   // console.log(listItem);
})

showHide.addEventListener("click", () => {
    if (list.style.display == "none") {
        list.style.display = "block"
        showHide.textContent = "hide"
    } else {
        list.style.display = "none"
        showHide.textContent = "show"
    }
})

remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child")
    list.removeChild(lastItem)
})

window.setTimeout((something) => {
    console.log(something);
}, 5000, "Hello..." )

window.setTimeout((something) => {
    console.log(something);
}, 7000, "Im Watching You..." )

window.setTimeout((something) => {
    console.log(something);
}, 10000, "Look Behind You..." )

window.setTimeout((something) => {
    console.log(something);
}, 12000, "Now Look Closely..." )

// for (let listItem of listItems) {
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent = listItem.textContent.toUpperCase()
//     })
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent = listItem.textContent.toLowerCase()
//     })
// }

list.addEventListener("mouseover", (event) => {
    event.target.textContent = event.target.textContent.toUpperCase()
})
list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase()
})

// document.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.target);
// })

let myParagraph = document.getElementById("myParagraph")
let parent = myParagraph.parentNode

parent.removeChild(myParagraph)

list.addEventListener("click", (event) => {
    const li = event.target
    const ul = li.parentNode
    ul.removeChild(li)
})