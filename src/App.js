import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'

function App() {

  const [output, setOutput] = useState(null);
  const [inputNum, setInputNum] = useState([]);
  const [memoryNum, setMemoryNum] = useState();
  const [mathFunc, setMathFunc] = useState('');
  const [numsDef, setNumsDef] = useState(false);
  const [isFloatNum, setIsFloatNum] = useState(false);

  useEffect(() => {
    if (isNaN(output)) {
      setOutput('ERROR');
    } else {
      if (inputNum.length > 15) {
        setOutput('TOO MUCH');
      } else {
        setOutput(Number(inputNum.join('')));
      }
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
        isFloatNum={isFloatNum}
        setIsFloatNum={setIsFloatNum}
        setOutput={setOutput}
        output={output}
        mathFunc={mathFunc}
        memoryNum={memoryNum}
        setMemoryNum={setMemoryNum}
        setMathFunc={setMathFunc}
        inputNum={inputNum}
        setInputNum={setInputNum}
        setNumsDef={setNumsDef}
        numsDef={numsDef}
      />
    </div>
  );
}

export default App;
