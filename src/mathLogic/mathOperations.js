export function plus(firstNum, secondNum) {
  return ((firstNum + secondNum).toFixed(5)).toString().split('');
}

export function minus(firstNum, secondNum) {
  return ((secondNum - firstNum).toFixed(5)).toString().split('');
}

export function multiply(firstNum, secondNum) {
  return ((firstNum * secondNum).toFixed(5)).toString().split('');
}

export function divide(firstNum, secondNum) {
  return ((secondNum / firstNum).toFixed(5)).toString().split('');
}