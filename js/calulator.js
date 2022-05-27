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
        currentValue = '';
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

function operationChar(content){
    if(content.length > 26){
        displayPrevious.textContent = '...';
    }else{
        return content;
    }
}

function nowShowingMoreSign(sign){
    let x = displayPrevious.textContent.length;
    let str = '';
    if(displayCurrent.textContent != ''){
        if(displayPrevious.textContent[x-2] == sign && showNewSign == false){

        }else{
            displayPrevious.textContent += displayCurrent.textContent + " " + sign + " ";
            showNewSign = false;
        }
    }

    }


function replaceSign(sign){
    let x = displayPrevious.textContent.length;
    let str = '';
    if(displayPrevious.textContent[x-2] != sign && currentValue == ''){
       str = displayPrevious.textContent.split(' ');
       str[x-1] = sign;
       displayPrevious.textContent = '';
       displayPrevious.textContent = str.join(' '); 
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
let showNewSign = false;


let numButtonMap = {
    Period: function(e){
        let matchDot = currentValue.match(/\./);
        if(matchDot == null && currentValue != ''){
        displayCurrent.textContent += '.';
        currentValue += '.';
        }
    },
    Digit1: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '1';
        currentValue += '1';
        showNewSign = true;
    },
    Digit2: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '2';
        currentValue += '2';
        showNewSign = true;
    },
    Digit3: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '3';
        currentValue += '3';
        showNewSign = true;
    },
    Digit4: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '4';
        currentValue += '4';
        showNewSign = true;
    },
    Digit5: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '5';
        currentValue += '5';
        showNewSign = true;
    },
    Digit6: function(e){ 
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '6';
        currentValue += '6';
        showNewSign = true;
    },
    Digit7: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '7';
        currentValue += '7';
        showNewSign = true;
    },
    Digit8: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '8';
        currentValue += '8';
        showNewSign = true;
    },
    Digit9: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '9';
        currentValue += '9';
        showNewSign = true;
    },
    Digit0: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent = scientificNotation(currentValue) + '0';
        currentValue += '0';
        showNewSign = true;
    },
    NumpadAdd: function(e){
        nowShowingMoreSign('+');
        replaceSign('+');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "addition";
    },
    NumpadSubtract: function(e){
        nowShowingMoreSign('-');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "subtraction";
    },
    NumpadMultiply: function(e){
        nowShowingMoreSign('x');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "multiply";
        
    },
    Slash: function(e){
        nowShowingMoreSign('/');
        operationChar(displayPrevious.textContent);
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

