import React from 'react';
import { Button } from './Button';

const Dot = ({
  inputNum,
  setInputNum,
  setIsFloatNum,
  isFloatNum,
  ...props }) => {

  const buttClick = () => {
    if (!isFloatNum) {
      setInputNum(
        [...inputNum, props.children]
      )
      setIsFloatNum(true);
    }
  }



  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Dot;