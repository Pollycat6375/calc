/* let a=5
console.log (a)
b=prompt( 'Сколько лет?')
// alert('Hi')
console.log(b)



function sun(a) {
    alert ('Hi')
}

sum ('Polly')
*/
const res = document.getElementById('res');
const first_vaule = document.getElementById('first-vaule');
const second_vaule = document.getElementById('second-vaule');
const calcBtn = document.getElementById('calc');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('division');

let action = '+'; 

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

multiplyBtn.onclick = function() {
    action = '*'
}

divisionBtn.onclick = function() {
    action = '/'
}

const printRes = function (result){
    if (result >= 0) {
        res.style.color='green'
    } else {
        res.style.color='red'
    }
    res.textContent=result
};

const calcResult = function () {
    const firstNumber = Number(first_vaule.value)
    const secondNumber = Number (second_vaule.value)
    if (action === '+'){
        return firstNumber + secondNumber
            } else if (action === "-") {
        return firstNumber -secondNumber  
        } else if (action === "*") {
            return firstNumber * secondNumber
        } else if (action === "/"){
            return firstNumber / secondNumber
        }
     
};
    
calcBtn.onclick = function(){
    const result = calcResult();
    printRes(result)
};
    

