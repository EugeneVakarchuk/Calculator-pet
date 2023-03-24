import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Negative = (props) => {

  const buttClick = () => {
    if (props.output > 0) {
      props.setInputNum(
        ['-', ...props.inputNum]
      )
    } else {
      props.setInputNum(
        props.inputNum.filter(el => el !== '-')
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