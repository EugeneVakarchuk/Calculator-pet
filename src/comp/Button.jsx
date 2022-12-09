import React, { useEffect, useRef, useState } from 'react';
import classes from '../styles.module.css'

const Button = ({ getButtClick, ...props }) => {

  const buttRef = useRef();

  const buttClick = () => {
    getButtClick(props.children);
  }

  return (
    <button onClick={buttClick} ref={buttRef} className={classes.button}>
      {props.children}
    </button>
  );
};

export { Button };