import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'
import backspace from '../mathLogic/backspace';

const Backspace = ({
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    backspace(
      inputNum,
      setInputNum
    )
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Backspace;