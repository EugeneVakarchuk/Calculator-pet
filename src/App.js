import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'

function App() {

  const [output, setOutput] = useState();
  const [number, setNumber] = useState([0]);

  useEffect(() => {
    if (Number.isSafeInteger(Number(number.join(''))) === false) {
      setOutput('ERROR')
    } else {
      setOutput(Number(number.join('')));
    }
  })

  return (
    <div className="App">
      <div className="output">
        <p className={classes.output}>
          {output}
        </p>
      </div>
      <InputArea setNumber={setNumber} number={number} />
    </div>
  );
}

export default App;
