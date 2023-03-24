import React from 'react';
import { Button } from './Button';
import equal from '../mathLogic/equal';
import classes from '../styles.module.css'

const EqualsButton = (props) => {



  const buttClick = () => {
    equal(
      props.mathFunc,
      props.output,
      props.isFloatNum,
      props.numsDef,
      props.setInputNum,
      props.memoryNum,
      props.setIsFloatNum,
      props.intergerPart,
      props.setMemoryNum,
      props.setNumsDef
    )
  }

  return (

    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>

  );
};

export default EqualsButton;