import React from 'react';
import { Button } from './Button';

const EqualsButton = ({
  setNumber,
  number,
  mathOperation,
  prevNumber,
  setPrevNumber,
  ...props }) => {

  console.log(number)

  const buttClick = () => {
    switch (mathOperation) {
      case 'plus':
        setNumber([prevNumber + Number(number.join(''))]);
        setPrevNumber(number);
        break;
      case 'multiply':
        setNumber([prevNumber * Number(number.join(''))]);
        setPrevNumber(number);
        break;
      case 'minus':
        setNumber([prevNumber - Number(number.join(''))]);
        setPrevNumber(number);
        break;
      case 'divide':
        setNumber([prevNumber / Number(number.join(''))]);
        setPrevNumber(number);
        break;
      default: setNumber('');
    }
  }

  return (

    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>

  );
};

export default EqualsButton;