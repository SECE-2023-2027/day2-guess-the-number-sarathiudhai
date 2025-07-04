const againButton = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const num= document.querySelector(".number");
const checkBtn = document.querySelector(".check");
let random=Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
console.log(random);

const checkfunc=()=>{
    const guessValue = Number(guess.value);
    if (!guessValue) {
        message.textContent = "Please enter a number!";
    } else if (guessValue === random) {
        highscore.textContent = scoreValue;
        document.querySelector("body").style.backgroundColor="green";
        num.textContent = random;
        message.textContent = "Correct Number!";
    } else if (guessValue > random) {
        message.textContent = "Too High!";
        scoreValue--;
    } else if (guessValue < random) {
        message.textContent = "Too Low!";
        scoreValue--;
    }
    score.textContent = scoreValue;
    
    if (scoreValue <= 0) {
        message.textContent = "You lost the game!";
        score.textContent = 0;
    }
}
checkBtn.addEventListener("click", checkfunc);
const againfunc = () => {
    scoreValue = 20;
    random = Math.trunc(Math.random() * 20) + 1;
    guess.value = "";
    message.textContent = "Start guessing...";
    score.textContent = scoreValue;
    num.textContent = "?";
    document.querySelector("body").style.backgroundColor = "black";
}