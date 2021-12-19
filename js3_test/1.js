let fNum;
let sNum;
let operation;

const checkIfNumber = (num) => num === null || Number.isNaN(Number.parseFloat(num));
const checkIfOperation = (op) => op === "+" || op === "-" || op === "*" || op === "/";

do{
  fNum = prompt("enter the first number", fNum);
  sNum = prompt("enter the second number", sNum);
  operation = prompt("choose math operation:  +, -, /, *");
  } 
  while (checkIfNumber(fNum) || checkIfNumber(sNum) || !checkIfOperation(operation));

function calc(a, b, opr){
  
  if(opr === '+'){
    return add(a,b)
  } else if(opr === '-') {
  return deduct(a,b);
  }else if(opr === '*') {
    return multiply(a,b);
  } else if(opr === '/'){
    return divide(a,b)

  }else {
    alert('✅ work completed.')

  }
 }

 console.log(calc(a,b,operation))



 function deduct(a,b){
  return Number(a)- Number(b);
}

function add(a,b){
  return Number(a) + Number(b) ;
  }

  function multiply(a,b){
    return Number(a)*(b);
  }

function divide(a,b){
return Number(a)/Number(b);
}
