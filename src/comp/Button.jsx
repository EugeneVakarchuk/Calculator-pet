import React, { useRef } from 'react';
import classes from '../styles.module.css'

const Button = ({
  ...props }) => {

  const buttRef = useRef();

  return (
    <button ref={buttRef} className={classes.button}>
      {props.children}
    </button>
  );
};

export { Button };