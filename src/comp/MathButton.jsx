import React, { useEffect } from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const MathButton = ({
  output,
  setMathFunc,
  setMemoryNum,
  setInputNum,
  setNumsDef,
  setIsFloatNum,
  ...props }) => {

  const rememberNumAndClearInput = (output) => {
    setMemoryNum(output);
    setInputNum([])
    setNumsDef(false);
    setIsFloatNum(false);
  }

  const buttClick = () => {
    switch (true) {
      case (props.children === '+'):
        setMathFunc('plus');
        rememberNumAndClearInput(output);
        break;
      case (props.children === '-'):
        setMathFunc('minus');
        rememberNumAndClearInput(output);
        break;
      case (props.children === '*'):
        setMathFunc('multiply');
        rememberNumAndClearInput(output);
        break;
      case (props.children === '/'):
        setMathFunc('divide');
        rememberNumAndClearInput(output);
        break;
      default: setMathFunc('none');
    }
  }

  return (

    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default MathButton;