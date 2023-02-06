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

  const firstIntMath = () => {
    setMemoryNum(output);
    setNumsDef(true);
    setIsFloatNum(false);
  }

  const intEqual = (mathFunc, numDef) => {
    switch (true) {
      case (mathFunc === 'plus' && numDef === false):
        firstIntMath()
        setInputNum(plus(output, memoryNum));
        break;
      case (mathFunc === 'minus' && numDef === false):
        firstIntMath()
        setInputNum(minus(output, memoryNum));
        break;
      case (mathFunc === 'divide' && numDef === false):
        firstIntMath()
        setInputNum(divide(output, memoryNum));
        break;
      case (mathFunc === 'multiply' && numDef === false):
        firstIntMath()
        setInputNum(multiply(output, memoryNum));
        break;
      case (mathFunc === 'plus' && numDef === true):
        setInputNum(plus(output, memoryNum));
        break;
      case (mathFunc === 'minus' && numDef === true):
        setInputNum(minus(memoryNum, output));
        break;
      case (mathFunc === 'divide' && numDef === true):
        setInputNum(divide(memoryNum, output));
        break;
      case (mathFunc === 'multiply' && numDef === true):
        setInputNum(multiply(output, memoryNum));
        break;
      default:
    }
  }


  const floatEqual = (mathFunc, numDef) => {
    switch (true) {
      case (mathFunc === 'plus' && numDef === false):
        firstMath()
        setInputNum(plusFloat(output, memoryNum, intergerPart));
        break;
      case (mathFunc === 'minus' && numDef === false):
        firstMath()
        setInputNum(minusFloat(output, memoryNum, intergerPart));
        break;
      case (mathFunc === 'divide' && numDef === false):
        firstMath()
        setInputNum(divideFloat(output, memoryNum, intergerPart));
        break;
      case (mathFunc === 'multiply' && numDef === false):
        firstMath()
        setInputNum(multiplyFloat(output, memoryNum, intergerPart));
        break;
      case (mathFunc === 'plus' && numDef === true):
        setInputNum(plusFloat(output, memoryNum, intergerPart));
        break;
      case (mathFunc === 'minus' && numDef === true):
        setInputNum(minusFloat(memoryNum, output, intergerPart));
        break;
      case (mathFunc === 'divide' && numDef === true):
        setInputNum(divideFloat(memoryNum, output, intergerPart));
        break;
      case (mathFunc === 'multiply' && numDef === true):
        setInputNum(multiplyFloat(output, memoryNum, intergerPart));
        break;
      default:
    }
  }


  if (!isFloatNum) {
    intEqual(mathFunc, numsDef);
  } else {
    floatEqual(mathFunc, numsDef);
  }
}

export default equal;