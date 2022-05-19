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
        return (+previousValue == 0 || +currentValue == 0) ? "You cannot divide by 0" : +previousValue / +currentValue;
    },
    remainder: function(previousValue, currentValue){
        return (+previousValue % +currentValue + +currentValue) % +currentValue;
    }
}

function operationVerification(){
    if(currentValue && previousValue){
        currentValue = operationsMap[operator](previousValue, currentValue);
        displayCurrent.textContent = Number(Number(currentValue).toFixed(3));
    }else if(!currentValue && !previousValue){
        currentValue = '';
        displayCurrent.textContent = '';
        operator = '';
    }
    showNewValue = true;
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

const $buttons = document.querySelector('.buttons');
const displayNum = document.querySelector('#displayNum');
const displayCurrent = document.querySelector('#displayCurrent');
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
        displayCurrent.textContent += '1';
        currentValue += '1';
    },
    Digit2: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '2';
        currentValue += '2';
    },
    Digit3: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '3';
        currentValue += '3';
    },
    Digit4: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '4';
        currentValue += '4';
    },
    Digit5: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '5';
        currentValue += '5';
    },
    Digit6: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '6';
        currentValue += '6';
    },
    Digit7: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '7';
        currentValue += '7';
    },
    Digit8: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '8';
        currentValue += '8';
    },
    Digit9: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '9';
        currentValue += '9';
    },
    Digit0: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '0';
        currentValue += '0';
    },
    NumpadAdd: function(e){
        operationVerification();
        checkCurrentValue()
        operator = "addition";
    },
    NumpadSubtract: function(e){
        operationVerification();
        checkCurrentValue()
        operator = "subtraction";
        
    },
    NumpadMultiply: function(e){
        operationVerification();
        checkCurrentValue()
        operator = "multiply";
        
    },
    Slash: function(e){
        operationVerification();
        checkCurrentValue()
        operator = "division";
        
    },
    b_remainder: function(e){
        operationVerification();
        checkCurrentValue()
        operator = "remainder";
        
    },
    Equal: function(e){
        if(!previousValue){
            displayCurrent.textContent = currentValue;
        }
        operationVerification();
        previousValue = '';
        
    },
    b_clear: function(e){
        currentValue = '';
        previousValue = '';
        operator = '';
        displayCurrent.textContent = '';
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

