import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css';
import NumberButton from './NumberButton';
import MathButton from './MathButton';
import EqualsButton from './EqualsButton';
import ClearEverithing from './ClearEverithing';
import Dot from './Dot';
import Clear from './Clear';
import Backspace from './Backspace';
import Negative from './Negative';

const InputArea = ({
  output,
  mathFunc,
  memoryNum,
  setMemoryNum,
  setMathFunc,
  inputNum,
  setInputNum,
  setNumsDef,
  numsDef,
  setOutput,
  setIsFloatNum,
  isFloatNum,
  setIntergerPart,
  intergerPart,
  ...props }) => {

  return (
    <div onClick={props.onClick} className={classes.input}>
      <div className={classes.input_numbers}>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >7</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >8</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >9</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >4</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >5</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >6</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >1</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >2</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >3</NumberButton>
        <NumberButton setInputNum={setInputNum} inputNum={inputNum} >0</NumberButton>
        <Dot setInputNum={setInputNum} inputNum={inputNum} setIsFloatNum={setIsFloatNum} isFloatNum={isFloatNum}>.</Dot>
      </div>
      <div className={classes.input_operations}>


        <MathButton
          output={output}
          setMathFunc={setMathFunc}
          setMemoryNum={setMemoryNum}
          setInputNum={setInputNum}
          setNumsDef={setNumsDef}
          setIsFloatNum={setIsFloatNum}
        >/</MathButton>


        <Backspace
          inputNum={inputNum}
          setInputNum={setInputNum}
        >&#8592;</Backspace>


        <MathButton
          output={output}
          setMathFunc={setMathFunc}
          setMemoryNum={setMemoryNum}
          setInputNum={setInputNum}
          setNumsDef={setNumsDef}
          setIsFloatNum={setIsFloatNum}
        >*</MathButton>


        <Clear
          setInputNum={setInputNum}
        >C</Clear>


        <MathButton
          output={output}
          setMathFunc={setMathFunc}
          setMemoryNum={setMemoryNum}
          setInputNum={setInputNum}
          setNumsDef={setNumsDef}
          setIsFloatNum={setIsFloatNum}
        >-</MathButton>


        <ClearEverithing
          setMemoryNum={setMemoryNum}
          setMathFunc={setMathFunc}
          setInputNum={setInputNum}
          setNumsDef={setNumsDef}
          setOutput={setOutput}
          setIsFloatNum={setIsFloatNum}
          setIntergerPart={setIntergerPart}
        >CE</ClearEverithing>


        <MathButton
          output={output}
          setMathFunc={setMathFunc}
          setMemoryNum={setMemoryNum}
          setInputNum={setInputNum}
          setNumsDef={setNumsDef}
          setIsFloatNum={setIsFloatNum}
        >+</MathButton>


        <Negative
          output={output}
          inputNum={inputNum}
          setInputNum={setInputNum}
        >&#177;</Negative>


        <EqualsButton
          intergerPart={intergerPart}
          setInputNum={setInputNum}
          setMemoryNum={setMemoryNum}
          mathFunc={mathFunc}
          inputNum={inputNum}
          memoryNum={memoryNum}
          output={output}
          setNumsDef={setNumsDef}
          numsDef={numsDef}
          isFloatNum={isFloatNum}
          setIsFloatNum={setIsFloatNum}
        >=</EqualsButton>
      </div>
    </div>
  );
};

export default InputArea;