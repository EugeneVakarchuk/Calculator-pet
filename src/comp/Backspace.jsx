import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Backspace = ({
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    setInputNum(inputNum.slice(0, -1))
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Backspace;