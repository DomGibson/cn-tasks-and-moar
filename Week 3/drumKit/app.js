const key7 = document.getElementById("key7");

// Keyboard Sounds //
const sound1 = new Audio();
sound1.src="https://www.myinstants.com/media/sounds/wrong_SriFgVc.mp3";

const sound7 = new Audio();
sound7.src="https://www.myinstants.com/media/sounds/super-mario-coin-sound.mp3";


key7.addEventListener("click", () => {
    key7.style.backgroundColor = "green"
    key7.style.boxShadow = "0px 9px 0px forestgreen"
    setTimeout(() => {
        alert("You Found A Coin!")
    }, 1000); 
})


