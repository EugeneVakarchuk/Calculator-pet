import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Clear = ({
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    setInputNum([]);
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Clear;