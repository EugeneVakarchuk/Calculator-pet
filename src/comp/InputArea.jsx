import React from 'react';
import { Button } from './Button';
import classes from '../styles.module.css';
import NumberButton from './NumberButton';
import MathButton from './MathButton';
import EqualsButton from './EqualsButton';

const InputArea = ({
  setNumber,
  number,
  setPrevNumber,
  setMathOperation,
  mathOperation,
  prevNumber,
  ...props }) => {

  return (
    <div onClick={props.onClick} className={classes.input}>
      <div className={classes.input_numbers}>
        <NumberButton setNumber={setNumber} number={number} >7</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >8</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >9</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >4</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >5</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >6</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >1</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >2</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >3</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >0</NumberButton>
        <NumberButton setNumber={setNumber} number={number} >.</NumberButton>
      </div>
      <div className={classes.input_operations}>
        <MathButton
          setPrevNumber={setPrevNumber}
          number={number}
          setNumber={setNumber}
          setMathOperation={setMathOperation}
          mathOperation={'divide'}
        >/</MathButton>
        <Button>&#8592;</Button>
        <MathButton
          setPrevNumber={setPrevNumber}
          number={number}
          setNumber={setNumber}
          setMathOperation={setMathOperation}
          mathOperation={'multiply'}
        >*</MathButton>
        <Button>C</Button>
        <MathButton
          setPrevNumber={setPrevNumber}
          number={number}
          setNumber={setNumber}
          setMathOperation={setMathOperation}
          mathOperation={'minus'}
        >-</MathButton>
        <Button>CE</Button>
        <MathButton
          setPrevNumber={setPrevNumber}
          number={number}
          setNumber={setNumber}
          setMathOperation={setMathOperation}
          mathOperation={'plus'}
        >+</MathButton>
        <Button>&#177;;</Button>
        <EqualsButton
          setNumber={setNumber}
          number={number}
          mathOperation={mathOperation}
          prevNumber={prevNumber}
        >=</EqualsButton>
      </div>
    </div>
  );
};

export default InputArea;