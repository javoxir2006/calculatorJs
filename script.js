const numberShower = document.getElementById("numberShower");
const number0 = document.getElementById("number0");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

let calc = '';

number0.onclick = function() {
    calc += 0;

    numberShower.textContent= calc;
}

number1.onclick = function() {
    calc += 1;

    numberShower.textContent= calc;
}

number2.onclick = function() {
    calc += 2;

    numberShower.textContent= calc;
}

number3.onclick = function() {
    calc += 3;

    numberShower.textContent= calc;
}

number4.onclick = function() {
    calc += 4;

    numberShower.textContent= calc;
}

number5.onclick = function() {
    calc += 5;

    numberShower.textContent= calc;
}

number6.onclick = function() {
    calc += 6;

    numberShower.textContent= calc;
}

number7.onclick = function() {
    calc += 7;

    numberShower.textContent= calc;
}

number8.onclick = function() {
    calc += 8;

    numberShower.textContent= calc;
}

number9.onclick = function() {
    calc += 9;

    numberShower.textContent= calc;
}

symbol1.onclick = function() {
    calc += '+';

    numberShower.textContent= calc;
}

symbol2.onclick = function() {
    calc += '-';

    numberShower.textContent= calc;
}

symbol3.onclick = function() {
    calc += '*';

    numberShower.textContent= calc;
}

symbol4.onclick = function() {
    calc += '/';

    numberShower.textContent= calc;
}

symbol5.onclick = function() {
    calc = '';

    numberShower.textContent= calc;
}

symbol6.onclick = function() {
    calc = eval(calc);

    numberShower.textContent= calc;
}

symbol7.onclick = function() {
    calc += '.';

    numberShower.textContent= calc;
}


