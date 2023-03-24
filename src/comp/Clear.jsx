import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const Clear = (props) => {

  const buttClick = () => {
    props.setInputNum([]);
  }

  return (
    <div className={classes.input_operations_item} onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Clear;