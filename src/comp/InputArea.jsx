import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import classes from '../styles.module.css'

const InputArea = ({ getNowClick, updateOut, ...props }) => {

  const [buttChild, setButtChild] = useState();

  useEffect(() => {
    getNowClick(buttChild);
    updateOut(buttChild);
  })

  return (
    <div onClick={props.onClick} className={classes.input}>
      <div className={classes.input_numbers}>
        <Button getButtClick={setButtChild} >7</Button>
        <Button getButtClick={setButtChild} >8</Button>
        <Button getButtClick={setButtChild} >9</Button>
        <Button getButtClick={setButtChild} >4</Button>
        <Button getButtClick={setButtChild} >5</Button>
        <Button getButtClick={setButtChild} >6</Button>
        <Button getButtClick={setButtChild} >1</Button>
        <Button getButtClick={setButtChild} >2</Button>
        <Button getButtClick={setButtChild} >3</Button>
        <Button getButtClick={setButtChild} >0</Button>
        <Button getButtClick={setButtChild} >,</Button>
      </div>
      <div className={classes.input_operations}>
        <Button getButtClick={setButtChild} >/</Button>
        <Button getButtClick={setButtChild} >&#8592;</Button>
        <Button getButtClick={setButtChild} >*</Button>
        <Button getButtClick={setButtChild} >C</Button>
        <Button getButtClick={setButtChild} >-</Button>
        <Button getButtClick={setButtChild} >CE</Button>
        <Button getButtClick={setButtChild} >+</Button>
        <Button getButtClick={setButtChild} >&#177;;</Button>
        <Button getButtClick={setButtChild} >=</Button>
      </div>
    </div>
  );
};

export default InputArea;