export function plus(firstNum, secondNum) {
  return ((firstNum + secondNum)).toString().split('');
}

export function minus(firstNum, secondNum) {
  return ((secondNum - firstNum)).toString().split('');
}

export function multiply(firstNum, secondNum) {
  return ((firstNum * secondNum)).toString().split('');
}

export function divide(firstNum, secondNum) {
  return ((secondNum / firstNum)).toString().split('');
}

export function plusFloat(firstNum, secondNum, intPart) {
  return ((firstNum + secondNum).toFixed(13 - intPart)).toString().split('');
}

export function minusFloat(firstNum, secondNum, intPart) {
  return ((secondNum - firstNum).toFixed(13 - intPart)).toString().split('');
}

export function multiplyFloat(firstNum, secondNum, intPart) {
  return ((firstNum * secondNum).toFixed(13 - intPart)).toString().split('');
}

export function divideFloat(firstNum, secondNum, intPart) {
  return ((secondNum / firstNum).toFixed(13 - intPart)).toString().split('');
}