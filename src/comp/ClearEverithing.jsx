import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'
import clearAll from '../mathLogic/clearAll';

const ClearEverithing = (props) => {

  const buttClick = () => {
    clearAll(
      props.setMemoryNum,
      props.setMathFunc,
      props.setInputNum,
      props.setNumsDef,
      props.setOutput,
      props.setIsFloatNum,
      props.setIntergerPart
    )
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default ClearEverithing;