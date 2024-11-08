const emojis = [
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
    "🐷",
    "🐷",
    "🐸",
    "🐸",
    "🐼",
    "🐼",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));


for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
        
    } 
}

function playSound (audioName){
    let audio = new Audio(`./src/audios/${audioName}.mp3`);
    audio.volume = 0.4;
    audio.play();
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        playSound("check-match");
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        
    } else {
        playSound("check-error");
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        playSound("check-win");
        alert("Parabéns! Você acertou todos. :)");
    }
}
