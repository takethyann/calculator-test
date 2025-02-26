document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButtons = document.querySelector(".clear");
    const equalsButtons = document.querySelector(".equals");

    let currentInput = "";
    let firstOperand ="";
    let operator ="";

    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            currentInput += this.dataset.number;
            display.value += this.dataset.number;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (currentInput === "") return;

            if (firstOperand !== "") {
                calculate();
            }

            firstOperand = currentInput;
            operator = this.dataset.operator;
            display.value += "" + operator + "";
            currentInput = "";
        });
    });

    equalsButtons.addEventListener("click", function () {
        if (firstOperand ==="" || currentInput ==="" || operator ==="") return;
        display.value += " = ";
        calculate();
    });

    clearButtons.addEventListener("click", function () {
        currentInput = "";
        firstOperand = "";
        operator = "";
        display.value = "";
    });

    function calculate() {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(firstOperand) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(firstOperand) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(firstOperand) * parseFloat(currentInput);
                break;
            case "/":
                result = currentInput === "0" ? "エラー": parseFloat(firstOperand) / parseFloat(currentInput);
                break;
        }

        display.value = result;
        firstOperand = result.toString();
        currentInput = "";
        operator = "";
    }
});