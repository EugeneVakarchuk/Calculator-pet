import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Negative = ({
  output,
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    if (output > 0) {
      setInputNum(
        ['-', ...inputNum]
      )
    } else {
      setInputNum(
        inputNum.filter(el => el !== '-')
      )
    }
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Negative;