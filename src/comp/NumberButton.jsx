import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const NumberButton = (props) => {

  console.log(props)

  const buttClick = () => {
    props.setInputNum(
      [...props.inputNum, props.children]
    )
  }


  return (
    <div className={classes.number_butt} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default NumberButton;