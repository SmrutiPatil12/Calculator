const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else if (value === "C") {
            currentInput = "";
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || "0";
    });
});
