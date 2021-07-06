// Code to be executed when the page has finished loading.
// Code to be executed when the user clicks a button.

document.addEventListener("DOMcontentLoaded", function) {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons);
        button.addEventListener("click", function) {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        }
}

runGame()
checkAnswer()
calculateCorrectAnswer()
incrementScore()
incrementWrongAnswer()
displayAdditionQuestion
displaySubtractQuestion()
displayMultiplyQuestion()