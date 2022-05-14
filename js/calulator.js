const suma = (numOne, numTwo) => {
    return +numOne + +numTwo;
};

const resta = (numOne, numTwo) => {
    return numOne - numTwo;
};

console.log(suma(1, 2));
console.log(resta(1, 2));


const $one = document.querySelector('#oneB');
const $two = document.querySelector('#twoB');
const $add = document.querySelector('#sumaB');
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

$equal.addEventListener('click', e => {
    equal(previousValue, currentValue, operant);
})

const equal = (previousValue, currentValue, operant) => {
    if (operant == 'suma'){
        return console.log(suma(previousValue, currentValue));
    }
}