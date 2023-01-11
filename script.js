let operator = "";
let display = "";
let previousValue = "";
let currentValue = "";
let decimalCounter = 0;
let operatorCounter = 0;

function operate(operator,x,y){

}

function stringBuilder(x,buttonType){
    if (x=="."){
        if (decimalCounter == 0){
            currentValue = currentValue + x;
            decimalCounter+=1;
        }
    }
    else if (buttonType=="number") currentValue = currentValue + x;
    else if (buttonType=="operator"){
        if (operatorCounter == 0){
            operator = x;
            previousValue = currentValue;
            currentValue = "";
            operatorCounter+=1;
            decimalCounter=0;
        }
    }
    else if (buttonType=="equal"){
        console.log(calculate(operator,previousValue,currentValue));
    }
    changeDisplay();
}

function changeDisplay(){
    const output = document.querySelector('.Output');
    output.textContent = previousValue+operator+currentValue;
}

function parser(x){
    if (x.search(".") != -1){
        return parseFloat(x);
    }
    else {
        return parseInt(x);
    }
}
function calculate(operator,a,b){
    let x = parser(a);
    let y = parser(b);
    switch (operator){
        case "*":
            return x*y;
            break;
        case "/":
            return x/y;
            break;
        case "-":
            return x-y;
            break;
        case "+":
            return x+y;
            break;
    }
}


const buttons = document.querySelectorAll('.number');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=> {
        changeDisplay(button.textContent,"number");
        stringBuilder(button.textContent,"number");
        // console.log(display);
        
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        changeDisplay(operator.textContent,"operator");
        stringBuilder(operator.textContent,"operator");
        // console.log(operator);
    })

})

const equal = document.querySelector('.equal');
equal.addEventListener('click',()=>{
    changeDisplay(equal.textContent,"equal");
    stringBuilder(equal.textContent,"equal");
    // console.log(equal.textContent);
})