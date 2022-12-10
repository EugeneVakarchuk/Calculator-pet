import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const InputArea = ({ setNumber, number, ...props }) => {



  return (
    <div onClick={props.onClick} className={classes.input}>
      <div className={classes.input_numbers}>
        <Button setNumber={setNumber} number={number} >7</Button>
        <Button setNumber={setNumber} number={number} >8</Button>
        <Button setNumber={setNumber} number={number} >9</Button>
        <Button setNumber={setNumber} number={number} >4</Button>
        <Button setNumber={setNumber} number={number} >5</Button>
        <Button setNumber={setNumber} number={number} >6</Button>
        <Button setNumber={setNumber} number={number} >1</Button>
        <Button setNumber={setNumber} number={number} >2</Button>
        <Button setNumber={setNumber} number={number} >3</Button>
        <Button setNumber={setNumber} number={number} >0</Button>
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