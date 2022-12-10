import React, { useRef } from 'react';
import classes from '../styles.module.css'

const Button = ({ setNumber, number, ...props }) => {

  const buttRef = useRef();
  const buttClick = () => {
    setNumber([...number, props.children])
  }

  return (
    <button onClick={buttClick} ref={buttRef} className={classes.button}>
      {props.children}
    </button>
  );
};

export { Button };