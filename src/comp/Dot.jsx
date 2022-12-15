import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Dot = ({
  inputNum,
  setInputNum,
  setIsFloatNum,
  isFloatNum,
  ...props }) => {

  const buttClick = () => {
    if (!isFloatNum) {
      setInputNum(
        [...inputNum, props.children]
      )
      setIsFloatNum(true);
    }
  }



  return (
    <div className={classes.number_butt} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Dot;