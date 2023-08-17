
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess)) {
        document.getElementById("message").textContent = "Please enter a valid number.";
    } else {
        attempts++;

        if (guess === targetNumber) {
            document.getElementById("message").textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        } else if (guess < targetNumber) {
            document.getElementById("message").textContent = "Try a higher number.";
        } else {
            document.getElementById("message").textContent = "Try a lower number.";
        }
    }
}
