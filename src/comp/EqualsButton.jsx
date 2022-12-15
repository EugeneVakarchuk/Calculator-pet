import React from 'react';
import { Button } from './Button';
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
import classes from '../styles.module.css'

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
  isFloatNum,
  intergerPart,
  ...props }) => {

  const firstMath = () => {
    setMemoryNum(output);
    setNumsDef(true);
  }

  const buttClick = () => {
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

  return (

    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>

  );
};

export default EqualsButton;