import React from 'react';
import { Button } from './Button';

const Negative = ({
  output,
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    if (output > 0) {
      setInputNum(
        ['-', ...inputNum]
      )
    } else {
      setInputNum(
        inputNum.filter(el => el !== '-')
      )
    }
  }

  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Negative;