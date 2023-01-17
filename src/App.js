import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'
import {
  plus,
  minus,
  multiply,
  divide,
  plusFloat,
  minusFloat,
  multiplyFloat,
  divideFloat
} from './mathLogic/mathOperations';

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

  const rememberNumAndClearInput = (output) => {
    setMemoryNum(output);
    setInputNum([])
    setNumsDef(false);
    setIsFloatNum(false);
  }

  const firstMath = () => {
    setMemoryNum(output);
    setNumsDef(true);
  }

  const keyDown = (key) => {
    if (numbers.includes(Number(key.key))) {
      setInputNum(
        [...inputNum, key.key]
      )
    } else {
      switch (true) {
        case (key.key === '+'):
          setMathFunc('plus');
          rememberNumAndClearInput(output);
          break;
        case (key.key === '-'):
          setMathFunc('minus');
          rememberNumAndClearInput(output);
          break;
        case (key.key === '*'):
          setMathFunc('multiply');
          rememberNumAndClearInput(output);
          break;
        case (key.key === '/'):
          setMathFunc('divide');
          rememberNumAndClearInput(output);
          break;
        case (key.key === '='):
          if (!isFloatNum) {
            if (numsDef === false) {
              switch (true) {
                case (mathFunc === 'plus'):
                  firstMath()
                  setInputNum(plus(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'minus'):
                  firstMath()
                  setInputNum(minus(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'divide'):
                  firstMath()
                  setInputNum(divide(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'multiply'):
                  firstMath()
                  setInputNum(multiply(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                default:
              }
            } else {
              switch (true) {
                case (mathFunc === 'plus'):
                  setInputNum(plus(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'minus'):
                  setInputNum(minus(memoryNum, output));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'divide'):
                  setInputNum(divide(memoryNum, output));
                  setIsFloatNum(false)
                  break;
                case (mathFunc === 'multiply'):
                  setInputNum(multiply(output, memoryNum));
                  setIsFloatNum(false)
                  break;
                default:
              }
            }
          } else {
            if (numsDef === false) {
              switch (true) {
                case (mathFunc === 'plus'):
                  firstMath()
                  setInputNum(plusFloat(output, memoryNum, intergerPart));
                  break;
                case (mathFunc === 'minus'):
                  firstMath()
                  setInputNum(minusFloat(output, memoryNum, intergerPart));
                  break;
                case (mathFunc === 'divide'):
                  firstMath()
                  setInputNum(divideFloat(output, memoryNum, intergerPart));
                  break;
                case (mathFunc === 'multiply'):
                  firstMath()
                  setInputNum(multiplyFloat(output, memoryNum, intergerPart));
                  break;
                default:
              }
            } else {
              switch (true) {
                case (mathFunc === 'plus'):
                  setInputNum(plusFloat(output, memoryNum, intergerPart));
                  break;
                case (mathFunc === 'minus'):
                  setInputNum(minusFloat(memoryNum, output, intergerPart));
                  break;
                case (mathFunc === 'divide'):
                  setInputNum(divideFloat(memoryNum, output, intergerPart));
                  break;
                case (mathFunc === 'multiply'):
                  setInputNum(multiplyFloat(output, memoryNum, intergerPart));
                  break;
                default:
              }
            }
          }
          break;
        default: setMathFunc('none');
      }
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
