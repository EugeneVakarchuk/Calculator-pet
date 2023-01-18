import React from 'react';
import { Button } from './Button';
import equal from '../mathLogic/equal';
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



  const buttClick = () => {
    equal(
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
    )
  }

  return (

    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>

  );
};

export default EqualsButton;