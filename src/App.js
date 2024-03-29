import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'
import equal from './mathLogic/equal';
import setMath from './mathLogic/setMathOperation';
import backspace from './mathLogic/backspace';

function App() {

  const [output, setOutput] = useState(null);
  const [inputNum, setInputNum] = useState([]);
  const [memoryNum, setMemoryNum] = useState();
  const [mathFunc, setMathFunc] = useState('');
  const [numsDef, setNumsDef] = useState(false);
  const [isFloatNum, setIsFloatNum] = useState(false);
  const [intergerPart, setIntergerPart] = useState();

  useEffect(() => {
    if (!!isFloatNum) {
      setIntergerPart(inputNum.indexOf('.'))
    }
  })

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

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mathOperSymbols = ['+', '-', '*', '/'];

  const keyDown = (key) => {
    switch (true) {
      case (numbers.includes(Number(key.key))):
        setInputNum(
          [...inputNum, key.key]
        )
        break;
      case (mathOperSymbols.includes(key.key)):
        setMath(
          output,
          setMemoryNum,
          setInputNum,
          setNumsDef,
          setIsFloatNum,
          setMathFunc,
          key.key
        )
        break;
      case (key.key === '='):
        equal(
          mathFunc,
          output,
          isFloatNum,
          numsDef,
          setInputNum,
          memoryNum,
          setIsFloatNum,
          intergerPart,
          setMemoryNum,
          setNumsDef
        )
        break;
      case (key.key === 'Backspace'):
        backspace(
          inputNum,
          setInputNum
        )
        break;
      default:
    }
  }

  return (
    <div className={classes.keydownWrapper} onKeyDown={keyDown} tabIndex='-1'>
      <div className="App">

        <div className="output">
          <p className={classes.output}>
            {output}
          </p>
        </div>
        <InputArea
          intergerPart={intergerPart}
          setIntergerPart={setIntergerPart}
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
    </div>
  );
}

export default App;
