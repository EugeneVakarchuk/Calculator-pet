import React from 'react';
import { Button } from './Button';
import { plus } from '../mathLogic/mathOperations';
import { minus } from '../mathLogic/mathOperations';
import { multiply } from '../mathLogic/mathOperations';
import { divide } from '../mathLogic/mathOperations';

const EqualsButton = ({
  output,
  inputNum,
  memoryNum,
  setInputNum,
  setMemoryNum,
  mathFunc,
  setNumsDef,
  numsDef,
  setIsFloatNum,
  ...props }) => {

  const firstMath = () => {
    setMemoryNum(output);
    setNumsDef(true);
  }

  const buttClick = () => {
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
          setInputNum(minus(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'divide'):
          setInputNum(divide(output, memoryNum));
          setIsFloatNum(false)
          break;
        case (mathFunc === 'multiply'):
          setInputNum(multiply(output, memoryNum));
          setIsFloatNum(false)
          break;
        default:
      }
    }
  }

  return (

    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>

  );
};

export default EqualsButton;