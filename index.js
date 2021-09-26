// Сложение
function add() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    let result = (Number(number1) + Number(number2));
    document.getElementById("out").innerHTML = result;
}

// Вычитание
function subtract() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    const result = (Number(number1) - Number(number2));
    document.getElementById("out").innerHTML = result;
}

// Умножение
function multiply() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    const result = (Number(number1) * Number(number2));
    document.getElementById("out").innerHTML = result;
}

// Деление
function divide() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    if (number2 == 0){
        alert('На ноль делить нельзя! Вы получите бесконечность');
    }

    const result = (Number(number1) / Number(number2));
    document.getElementById("out").innerHTML = result;
}
