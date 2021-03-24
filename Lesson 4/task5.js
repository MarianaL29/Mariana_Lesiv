// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  

// 		var computerChoice = Math.random();
// 		alert(computerChoice);

//      Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить 
//      принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново

function game() {
    let userChoice = prompt("Please enter 'rock' or 'paper' or 'scissors' ")
    console.log("userChoice: ", userChoice);

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("computerChoice: ", computerChoice);

    if (computerChoice === userChoice) {
        console.log("Draw")
    } else if (computerChoice === "rock" && userChoice == "paper") {
        console.log("User win! Paper win!")
    } else if (computerChoice === "rock" && userChoice == "scissors") {
        console.log("Computer win! Rock  win!")
    } else if (computerChoice === "paper" && userChoice == "rock") {
        console.log("Computer win! Paper win!")
    } else if (computerChoice === "paper" && userChoice == "scissors") {
        console.log("User win! scissors win!")
    } else if (computerChoice === "scissors" && userChoice == "rock") {
        console.log("User win! rock win!")
    } else if (computerChoice === "scissors" && userChoice == "paper") {
        console.log("Cmputer win! Scissors win!")
    }
}

let oneMoreTimeQuestion = true;
while (oneMoreTimeQuestion == true) {
    game()
    oneMoreTimeQuestion = confirm("Do you want to play again?")
}