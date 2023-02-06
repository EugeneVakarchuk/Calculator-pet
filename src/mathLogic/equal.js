import { math } from '../mathLogic/mathOperations';

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
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      case (mathFunc === 'minus' && numDef === false):
        firstIntMath()
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      case (mathFunc === 'divide' && numDef === false):
        firstIntMath()
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      case (mathFunc === 'multiply' && numDef === false):
        firstIntMath()
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      case (mathFunc === 'plus' && numDef === true):
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      case (mathFunc === 'minus' && numDef === true):
        setInputNum(math(memoryNum, output, mathFunc));
        break;
      case (mathFunc === 'divide' && numDef === true):
        setInputNum(math(memoryNum, output, mathFunc));
        break;
      case (mathFunc === 'multiply' && numDef === true):
        setInputNum(math(output, memoryNum, mathFunc));
        break;
      default:
    }
  }


  const floatEqual = (mathFunc, numDef) => {
    switch (true) {
      case (mathFunc === 'plus' && numDef === false):
        firstMath()
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
        break;
      case (mathFunc === 'minus' && numDef === false):
        firstMath()
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
        break;
      case (mathFunc === 'divide' && numDef === false):
        firstMath()
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
        break;
      case (mathFunc === 'multiply' && numDef === false):
        firstMath()
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
        break;
      case (mathFunc === 'plus' && numDef === true):
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
        break;
      case (mathFunc === 'minus' && numDef === true):
        setInputNum(math(memoryNum, output, mathFunc, intergerPart));
        break;
      case (mathFunc === 'divide' && numDef === true):
        setInputNum(math(memoryNum, output, mathFunc, intergerPart));
        break;
      case (mathFunc === 'multiply' && numDef === true):
        setInputNum(math(output, memoryNum, mathFunc, intergerPart));
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