

function rpsGame() {

    let index = Math.floor(Math.random() * 3);

    let arr = ["rock", "paper", "scissors"];
    let robotAnswer = arr[index];

    let myAnswer = prompt("Please enter rock, paper or scissors.");

    if (myAnswer.toLowerCase() == "rock" || myAnswer.toLowerCase() == "paper" || myAnswer.toLowerCase() == "scissors") {

        if ((myAnswer.toLowerCase() == "rock" && robotAnswer == "paper")
            || (myAnswer.toLowerCase() == "paper" && robotAnswer == "scissors")
            || (myAnswer.toLowerCase() == "scissors" && robotAnswer == "rock")
        ) {

            alert(`You Lose!. Your answer ${myAnswer} and robot answer ${robotAnswer} .`);

        } else if ((myAnswer.toLowerCase() == "rock" && robotAnswer == "scissors")
            || (myAnswer.toLowerCase() == "paper" && robotAnswer == "rock")
            || (myAnswer.toLowerCase() == "scissors" && robotAnswer == "paper")) {

            alert(`You Win!. Your answer ${myAnswer} and robot answer ${robotAnswer} .`);
            
        } else {

            alert(`A Draw!. Your answer ${myAnswer} and robot answer ${robotAnswer} .`);
        }

    } else {

        alert("Please enter correct variant.");
    }

}


