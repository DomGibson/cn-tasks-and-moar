const key7 = document.getElementById("key7");

// Keyboard Sounds //
const sound1 = new Audio();
sound1.src="SFX/wrong.mp3";

const sound7 = new Audio();
sound7.src="SFX/coin.mp3";


key7.addEventListener("click", () => {
    key7.style.backgroundColor = "green"
    key7.style.boxShadow = "0px 9px 0px forestgreen"
    setTimeout(() => {
        alert("You Found A Coin!")
    }, 1000); 
})


