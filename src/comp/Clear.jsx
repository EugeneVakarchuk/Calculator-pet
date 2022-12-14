import React from 'react';
import { Button } from './Button';

const Clear = ({
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    setInputNum([]);
  }

  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default Clear;