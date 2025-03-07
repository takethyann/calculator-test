document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButtons = document.querySelector(".clear");
    const equalsButtons = document.querySelector(".equals");

    let currentExpression = "";

    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            currentExpression += this.dataset.number;
            display.value = currentExpression;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (currentExpression === "") {
                currentExpression = "";
            }
            currentExpression += " " + this.dataset.operator + " ";
            display.value = currentExpression;
        });
    });

    equalsButtons.addEventListener("click", function () {
        if (currentExpression === "") {
            display.value = "undefined";
            return;
        }

        try {
            let result = eval(currentExpression);
        if (isNaN(result) || !isFinite(result)) {
            display.value = "infinity";
        } else {
            display.value = result;
            currentExpression = result.toString();
        }
        } catch (error) {
            display.value = "エラー";
            currentExpression = "";
        }
    });

    clearButtons.addEventListener("click", function () {
        currentExpression = "";
        display.value = "";
    });

});