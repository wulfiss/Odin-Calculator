const suma = (numOne, numTwo) => {
    return +numOne + +numTwo;
};

const resta = (numOne, numTwo) => {
    return numOne - numTwo;
};

const equal = (previousValue, currentValue, operant) => {
    let result = 0;
    switch (operant) {
            case 'suma':
            result = suma(previousValue, currentValue);
            break;
        case 'resta':
            result = resta(previousValue, currentValue);
            break;
    }
    return result;
};

console.log(suma(1, 2));
console.log(resta(1, 2));


const $one = document.querySelector('#oneB');
const $two = document.querySelector('#twoB');
const $add = document.querySelector('#sumaB');
const $subtraction = document.querySelector('#restaB');
const $equal = document.querySelector('#equalB');
const displayNum = document.querySelector('#displayNum');
let currentValue = '';
let previousValue = '';
let operant = '';

$one.addEventListener('click', e => {
    displayNum.textContent += '1';
    currentValue += "1";
})

$two.addEventListener('click', e => {
    displayNum.textContent += '2';
    currentValue += "2";
})

$add.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "suma";
})

$subtraction.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "resta";
})

$equal.addEventListener('click', e => {
    currentValue = equal(previousValue, currentValue, operant);
    displayNum.textContent = currentValue;
})

