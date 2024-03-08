//call elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScores=document.querySelector("#compScore");
const userScores=document.querySelector("#userScore");

//make variables
let userScore = 0;
let compScore = 0;

//user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
      
        playGame(userChoice);



    })
})

//comp choice

const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}


// draw game

const drawGame = () => {

    msg.innerText = "Match is draw";
    console.log("draw");
    msg.style.backgroundColor="#081b31"
}

//play game

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
console.log(compChoice);
if(compChoice===userChoice){
 drawGame();
}else{
    let userWin=true;
    if(userChoice==="Rock"){
        userWin=compChoice==="Paper" ? false:true;
    }else if(userChoice==="Paper"){
        userWin= compChoice==="Scissors" ? false:true;
    }
    else if(userChoice==="Scissors"){
        userWin= compChoice==="Rock" ? false:true;
    }
    showWinner(userWin,compChoice,userChoice);
}
}
//showWInner function
const showWinner = (userWin,compChoice,userChoice) => {
    if (userWin) {
        msg.innerText = `You Win Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScores.innerText=userScore;
    }
    else {
        msg.innerText = `You lose Your ${userChoice} Cannot Beats ${compChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScores.innerText=compScore;
    }

}






