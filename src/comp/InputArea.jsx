import React from 'react';
import classes from '../styles.module.css';
import NumberButton from './NumberButton';
import MathButton from './MathButton';
import EqualsButton from './EqualsButton';
import ClearEverithing from './ClearEverithing';
import Dot from './Dot';
import Clear from './Clear';
import Backspace from './Backspace';
import Negative from './Negative';

const InputArea = (props) => {

  const numberProps = {
    setInputNum: props.setInputNum,
    inputNum: props.inputNum,
  }

  const dotProps = {
    setInputNum: props.setInputNum,
    inputNum: props.inputNum,
    setIsFloatNum: props.setIsFloatNum,
    isFloatNum: props.isFloatNum,
  }

  const mathProps = {
    output: props.output,
    setMathFunc: props.setMathFunc,
    setMemoryNum: props.setMemoryNum,
    setInputNum: props.setInputNum,
    setNumsDef: props.setNumsDef,
    setIsFloatNum: props.setIsFloatNum,
  }

  const clearEverythingProps = {
    setMemoryNum: props.setMemoryNum,
    setMathFunc: props.setMathFunc,
    setInputNum: props.setInputNum,
    setNumsDef: props.setNumsDef,
    setOutput: props.setOutput,
    setIsFloatNum: props.setIsFloatNum,
    setIntergerPart: props.setIntergerPart,
  }

  const equalButtonProps = {
    intergerPart: props.intergerPart,
    setInputNum: props.setInputNum,
    setMemoryNum: props.setMemoryNum,
    mathFunc: props.mathFunc,
    inputNum: props.inputNum,
    memoryNum: props.memoryNum,
    output: props.output,
    setNumsDef: props.setNumsDef,
    numsDef: props.numsDef,
    isFloatNum: props.isFloatNum,
    setIsFloatNum: props.setIsFloatNum,
  }

  const negativeProps = {
    output: props.output,
    inputNum: props.inputNum,
    setInputNum: props.setInputNum,
  }

  const clearProps = {
    setInputNum: props.setInputNum
  }

  const backspaceProps = {
    inputNum: props.inputNum,
    setInputNum: props.setInputNum,
  }

  return (
    <div onClick={props.onClick} className={classes.input}>
      <div className={classes.input_numbers}>
        <NumberButton {...numberProps} >7</NumberButton>
        <NumberButton {...numberProps} >8</NumberButton>
        <NumberButton {...numberProps} >9</NumberButton>
        <NumberButton {...numberProps} >4</NumberButton>
        <NumberButton {...numberProps} >5</NumberButton>
        <NumberButton {...numberProps} >6</NumberButton>
        <NumberButton {...numberProps} >1</NumberButton>
        <NumberButton {...numberProps} >2</NumberButton>
        <NumberButton {...numberProps} >3</NumberButton>
        <NumberButton {...numberProps} >0</NumberButton>
        <Dot {...dotProps}>.</Dot>
      </div>
      <div className={classes.input_operations}>
        <MathButton {...mathProps}>/</MathButton>
        <Backspace {...backspaceProps}>&#8592;</Backspace>
        <MathButton {...mathProps}>*</MathButton>
        <Clear {...clearProps}>C</Clear>
        <MathButton {...mathProps} >-</MathButton>
        <ClearEverithing {...clearEverythingProps}>CE</ClearEverithing>
        <MathButton {...mathProps} >+</MathButton>
        <Negative {...negativeProps}>&#177;</Negative>
        <EqualsButton {...equalButtonProps}>=</EqualsButton>
      </div>
    </div>
  );
};

export default InputArea;