import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Dot = (props) => {

  const buttClick = () => {
    if (!props.isFloatNum) {
      props.setInputNum(
        [...props.inputNum, props.children]
      )
      props.setIsFloatNum(true);
    }
  }



  return (
    <div className={classes.number_butt} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Dot;