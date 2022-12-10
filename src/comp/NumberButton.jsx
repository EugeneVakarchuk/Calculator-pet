import React from 'react';
import { Button } from './Button';

const NumberButton = ({
  setNumber,
  number,
  ...props }) => {

  const buttClick = () => {
    setNumber([...number, Number(props.children)])
  }

  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default NumberButton;