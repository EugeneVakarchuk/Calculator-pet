import React from 'react';
import classes from '../styles.module.css'

const OutputArea = () => {
  return (
    <textarea readOnly={true} className={classes.output}>
      OUTPUT
    </textarea>
  );
};

export default OutputArea;