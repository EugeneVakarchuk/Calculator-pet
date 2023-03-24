import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'
import setMath from '../mathLogic/setMathOperation';

const MathButton = (props) => {

  const buttClick = () => {
    setMath(
      props.output,
      props.setMemoryNum,
      props.setInputNum,
      props.setNumsDef,
      props.setIsFloatNum,
      props.setMathFunc,
      props.children
    )
  }

  return (

    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default MathButton;