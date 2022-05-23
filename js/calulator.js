const operationsMap ={
    addition: function(previousValue, currentValue){
        return +previousValue + +currentValue;
    },
    subtraction: function(previousValue, currentValue){
        return +previousValue - +currentValue;
    },
    multiply: function(previousValue, currentValue){
        return +previousValue * +currentValue;
    },
    division: function(previousValue, currentValue){
        return previousValue == 0 || +currentValue == 0 ? "ERROR" : Number(Number(+previousValue / +currentValue).toFixed(3));
    },
    remainder: function(previousValue, currentValue){
        return (+previousValue % +currentValue + +currentValue) % +currentValue;
    },    
 }

function operationVerification(){
    if(currentValue && previousValue){
        currentValue = operationsMap[operator](previousValue, currentValue);
        displayCurrent.textContent = scientificNotation(currentValue);
    }else if(!currentValue && !previousValue){
        currentValue = '';
        displayCurrent.textContent = '';
        operator = '';
    }
    showNewValue = true;
}

function scientificNotation(currentValue){
    if(currentValue > 999999999){
        return Number.parseFloat(currentValue).toExponential(2);
    }else{
        return currentValue;
    }
}
function clearDisplayCurrent(){
    if(showNewValue == true){
        displayCurrent.textContent = '';
        showNewValue = false;
    }
}
function checkCurrentValue(){
    if(currentValue != ''){
        previousValue = currentValue;
        currentValue = '';
    };
}

function negative(currentValue){
   if(!currentValue){
        showNewValue = false;
        return "-";
   }else{
        return currentValue * -1;
   }
}   

const $buttons = document.querySelector('.buttons');
const displayNum = document.querySelector('#displayNum');
const displayCurrent = document.querySelector('#displayCurrent');
const displayPrevious = document.querySelector('#displayPrevious');

let currentValue = '';
let previousValue = '';
let operator = '';
let showNewValue = false;



let numButtonMap = {
    Period: function(e){
        let matchDot = currentValue.match(/\./);
        if(!matchDot){
        displayCurrent.textContent += '.';
        currentValue += '.';
        }
    },
    Digit1: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '1';
        currentValue += '1';
        
    },
    Digit2: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '2';
        currentValue += '2';
    },
    Digit3: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '3';
        currentValue += '3';
    },
    Digit4: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '4';
        currentValue += '4';
    },
    Digit5: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '5';
        currentValue += '5';
    },
    Digit6: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '6';
        currentValue += '6';
    },
    Digit7: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '7';
        currentValue += '7';
    },
    Digit8: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '8';
        currentValue += '8';
    },
    Digit9: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '9';
        currentValue += '9';
    },
    Digit0: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '0';
        currentValue += '0';
    },
    NumpadAdd: function(e){
        displayPrevious.textContent += displayCurrent.textContent + '+';
        clearDisplayCurrent();
        operationVerification();
        checkCurrentValue();
        operator = "addition";
    },
    NumpadSubtract: function(e){
        displayPrevious.textContent += displayCurrent.textContent + '-';
        clearDisplayCurrent();
        operationVerification();
        checkCurrentValue();
        operator = "subtraction";
    },
    NumpadMultiply: function(e){
        displayPrevious.textContent += displayCurrent.textContent + 'x';
        clearDisplayCurrent();
        operationVerification();
        checkCurrentValue();
        operator = "multiply";
        
    },
    Slash: function(e){
        displayPrevious.textContent += displayCurrent.textContent + '/';
        clearDisplayCurrent();
        operationVerification();
        checkCurrentValue();
        operator = "division";
        
    },
    b_negative: function(e){
        currentValue = negative(currentValue);
        displayCurrent.textContent = currentValue;
    },
    Equal: function(e){
        if(!previousValue){
            displayCurrent.textContent = currentValue;
        }
        operationVerification();
        previousValue = '';
        displayPrevious.textContent = '';
    },
    b_clear: function(e){
        currentValue = '';
        previousValue = '';
        operator = '';
        displayCurrent.textContent = '';
        displayPrevious.textContent = '';
    },
    Backspace: function(e){
        currentValue = '';
        displayCurrent.textContent = '';
    }
    
}

$buttons.addEventListener('click', (e) => {
    let target = e.target;
    let handler;
    if(target.nodeName == "BUTTON" && (handler = target.getAttribute('data-handler'))){
        numButtonMap[handler](e)
    }
});

window.addEventListener('keydown', (e) =>{
    numButtonMap[e.code](e);
});

