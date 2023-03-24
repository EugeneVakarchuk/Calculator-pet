export function math(firstNum, secondNum, mathOperation, intPart) {
  if (intPart === undefined) {
    switch (true) {
      case (mathOperation === 'plus'):
        return ((firstNum + secondNum)).toString().split('');
      case (mathOperation === 'minus'):
        return ((secondNum - firstNum)).toString().split('');
      case (mathOperation === 'multiply'):
        return ((firstNum * secondNum)).toString().split('');
      case (mathOperation === 'divide'):
        return ((secondNum / firstNum)).toString().split('');
      default:
    }
  } else {
    switch (true) {
      case (mathOperation === 'plus'):
        return ((firstNum + secondNum).toFixed(13 - intPart)).toString().split('');
      case (mathOperation === 'minus'):
        return ((secondNum - firstNum).toFixed(13 - intPart)).toString().split('');
      case (mathOperation === 'multiply'):
        return ((firstNum * secondNum).toFixed(13 - intPart)).toString().split('');
      case (mathOperation === 'divide'):
        return ((secondNum / firstNum).toFixed(13 - intPart)).toString().split('');
      default:
    }
  }
}