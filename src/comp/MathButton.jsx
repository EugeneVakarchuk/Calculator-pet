import React, { useEffect } from 'react';
import { Button } from './Button';

const MathButton = ({
  setPrevNumber,
  number,
  setNumber,
  setMathOperation,
  mathOperation,
  ...props }) => {

  const buttClick = () => {
    setPrevNumber(Number(number.join('')));
    setNumber([]);
    switch (mathOperation) {
      case 'plus':
        setMathOperation('plus');
        break;
      case 'multiply':
        setMathOperation('multiply');
        break;
      case 'minus':
        setMathOperation('minus');
        break;
      case 'divide':
        setMathOperation('divide');
        break;
      default: setMathOperation('');
    }
  }

  return (

    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default MathButton;