import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'

function App() {

  const [output, setOutput] = useState();
  const [number, setNumber] = useState([]);
  const [prevNumber, setPrevNumber] = useState();
  const [mathOperation, setMathOperation] = useState();

  useEffect(() => {
    if ((number.join('').length > 16) || number.includes(NaN)) {
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
      <InputArea
        setNumber={setNumber}
        number={number}
        prevNumber={prevNumber}
        mathOperation={mathOperation}
        setPrevNumber={setPrevNumber}
        setMathOperation={setMathOperation}
      />
    </div>
  );
}

export default App;
