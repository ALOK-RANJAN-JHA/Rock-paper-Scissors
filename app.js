let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const soundPlay=()=>{
    let mySound = new Audio('shooting-sound.mp3');
        mySound.play();
}


const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const gameDraw = () => {
    // console.log("match is draw");
    msg.innerText="Game was draw ! Play Again ."
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;

        let mySound = new Audio('wining-sound.mp3');
        mySound.play();
        
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice} .`
        msg.style.backgroundColor="green";
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost ! ${compChoice} beats Your ${userChoice} .`
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    // console.log("userChoice =", userChoice);
    // generate computer choices
    let compChoice = genCompChoice();
    // console.log("compChoice =", compChoice);

    if (userChoice === compChoice) {
        // game draw
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            // options available for comp is papper or scissors because draw conditions are already covered
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            // rock scissors
            userWin = compChoice === "Rock" ? true : false;
        }
        else {
            //rock paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        soundPlay();
        playGame(userChoice);
    });
});