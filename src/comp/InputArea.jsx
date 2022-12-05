import React from 'react';
import Button from './Button';
import classes from '../styles.module.css'

const InputArea = () => {
  return (
    <div className={classes.input}>
      <div className={classes.input_numbers}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>0</Button>
        <Button>,</Button>
      </div>
      <div className={classes.input_operations}>
        <Button>/</Button>
        <Button>&#8592;</Button>
        <Button>*</Button>
        <Button>C</Button>
        <Button>-</Button>
        <Button>CE</Button>
        <Button>+</Button>
        <Button>&#177;;</Button>
        <Button>=</Button>
      </div>
    </div>
  );
};

export default InputArea;