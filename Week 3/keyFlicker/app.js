const keypress = document.getElementById("main-keypress");
const code = document.getElementById("code-press");
const key = document.getElementById("key-press");
const which = document.getElementById("which-press");
const scroller = document.getElementById("scroller");


// EXTRA
document.getElementById("input").addEventListener('keyup', function(event) {

    document.getElementById("result").innerHTML+=(event.key);
    document.getElementById("result2").innerHTML+=(event.key+", ");

})

// KeyboardEvent.addEventListener("keypress", () => {
//     keypress.textContent = `${keypress.name}`;
//     code.textContent = `${keypress.name}`;
//     key.textContent = `${keypress.name}`;
//     which.textContent = `${keypress.name}`;
    
// })

// window.setTimeout((something) => {
//     alert(something);
// }, 1000, "Press Any Key To Begin..." )

document.addEventListener('keydown', logKey);

function logKey(event) {
  code.textContent = ` ${event.code}`;
  key.textContent = ` ${event.key}`;
  which.textContent = ` ${event.which}`;
  keypress.textContent = ` ${event.which}`;
}

