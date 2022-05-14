const suma = (numOne, numTwo) => {
    return numOne + numTwo;
};

const resta = (numOne, numTwo) => {
    return numOne - numTwo;
};

console.log(suma(1, 2));
console.log(resta(1, 2));


const $one = document.querySelector("#oneB");
const $two = document.querySelector("#twoB");
const displayNum = document.querySelector("#displayNum");
let numOne = "";
let numTwo = "";

$one.addEventListener('click', e=>{
    displayNum.textContent += '1';
    numOne += "1";
})

$two.addEventListener('click', e=>{
    displayNum.textContent += '2';
    numOne += "2";
})