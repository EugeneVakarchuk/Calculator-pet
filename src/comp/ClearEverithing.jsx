import React from 'react';
import { Button } from './Button';

const ClearEverithing = ({
  setMemoryNum,
  setMathFunc,
  setInputNum,
  setNumsDef,
  setOutput,
  setIsFloatNum,
  ...props }) => {

  const buttClick = () => {
    setMemoryNum()
    setMathFunc('')
    setInputNum([])
    setNumsDef(false)
    setOutput(null)
    setIsFloatNum(false)
  }

  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default ClearEverithing;