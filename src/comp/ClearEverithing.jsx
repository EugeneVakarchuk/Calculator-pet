import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'
import clearAll from '../mathLogic/clearAll';

const ClearEverithing = ({
  setMemoryNum,
  setMathFunc,
  setInputNum,
  setNumsDef,
  setOutput,
  setIsFloatNum,
  setIntergerPart,
  ...props }) => {

  const buttClick = () => {
    clearAll(
      setMemoryNum,
      setMathFunc,
      setInputNum,
      setNumsDef,
      setOutput,
      setIsFloatNum,
      setIntergerPart
    )
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default ClearEverithing;