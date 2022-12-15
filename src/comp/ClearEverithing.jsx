import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const ClearEverithing = ({
  setMemoryNum,
  setMathFunc,
  setInputNum,
  setNumsDef,
  setOutput,
  setIsFloatNum,
  ...props }) => {

  const buttClick = () => {
    setMemoryNum()
    setMathFunc('')
    setInputNum([])
    setNumsDef(false)
    setOutput(null)
    setIsFloatNum(false)
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default ClearEverithing;