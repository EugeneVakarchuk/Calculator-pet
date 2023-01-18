import {
  plus,
  minus,
  multiply,
  divide,
  plusFloat,
  minusFloat,
  multiplyFloat,
  divideFloat
} from '../mathLogic/mathOperations';

const equal = (
  mathFunc,
  output,
  isFloatNum,
  numsDef,
  setInputNum,
  memoryNum,
  setIsFloatNum,
  intergerPart,
  setMemoryNum,
  setNumsDef
) => {

  const firstMath = () => {
    setMemoryNum(output);
    setNumsDef(true);
  }

  if (!isFloatNum) {
    if (numsDef === false) {
      switch (true) {
        case (mathFunc === 'plus'):
          firstMath()
          setInputNum(plus(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'minus'):
          firstMath()
          setInputNum(minus(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'divide'):
          firstMath()
          setInputNum(divide(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'multiply'):
          firstMath()
          setInputNum(multiply(output, memoryNum));
          setIsFloatNum(false)
          break;
        default:
      }
    } else {
      switch (true) {
        case (mathFunc === 'plus'):
          setInputNum(plus(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'minus'):
          setInputNum(minus(memoryNum, output));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'divide'):
          setInputNum(divide(memoryNum, output));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'multiply'):
          setInputNum(multiply(output, memoryNum));
          setIsFloatNum(false)
          break;
        default:
      }
    }
  } else {
    if (numsDef === false) {
      switch (true) {
        case (mathFunc === 'plus'):
          firstMath()
          setInputNum(plusFloat(output, memoryNum, intergerPart));
          break;
        case (mathFunc === 'minus'):
          firstMath()
          setInputNum(minusFloat(output, memoryNum, intergerPart));
          break;
        case (mathFunc === 'divide'):
          firstMath()
          setInputNum(divideFloat(output, memoryNum, intergerPart));
          break;
        case (mathFunc === 'multiply'):
          firstMath()
          setInputNum(multiplyFloat(output, memoryNum, intergerPart));
          break;
        default:
      }
    } else {
      switch (true) {
        case (mathFunc === 'plus'):
          setInputNum(plusFloat(output, memoryNum, intergerPart));
          break;
        case (mathFunc === 'minus'):
          setInputNum(minusFloat(memoryNum, output, intergerPart));
          break;
        case (mathFunc === 'divide'):
          setInputNum(divideFloat(memoryNum, output, intergerPart));
          break;
        case (mathFunc === 'multiply'):
          setInputNum(multiplyFloat(output, memoryNum, intergerPart));
          break;
        default:
      }
    }
  }
}

export default equal;