import React from 'react';
import { Button } from './Button';

const Backspace = ({
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    setInputNum(inputNum.slice(0, -1))
  }

  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Backspace;