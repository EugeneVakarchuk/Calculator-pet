import React from 'react';
import classes from '../styles.module.css'

const Button = ({ ...props }) => {
  return (
    <button className={classes.button}>{props.children}</button>
  );
};

export default Button;