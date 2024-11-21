let userscore = 0;
let compscore = 0;

const boxes = document.querySelectorAll(".box");
const msg=document.querySelector(".text");

const getcomputerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}

const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    const computerChoice = getcomputerchoice();
    console.log("computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        console.log("game is draw");
        msg.textContent = "Better Luck Next Time!  Its a draw";
        msg.style.backgroundColor = "#7e2323";

    } else if ((userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")) {
        userscore++;
        console.log("user wins");
        msg.textContent="HooRRay! You Win 😊";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        
    } else {
        compscore++;
        console.log("computer wins");
        msg.textContent="YOu lOOse! 😔  Computer Wins";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";

    }
    document.getElementById("user-score").textContent = userscore;
    document.getElementById("comp-score").textContent = compscore;

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.id;
        // console.log( "was clicked",userChoice);
        playgame(userChoice);
    });
    box.addEventListener("dblclick", () => {
        alert("Don't double click!");
    });
});