import './App.css';
import React, { useEffect, useState } from 'react';
import InputArea from './comp/InputArea';
import classes from './styles.module.css'

function App() {

  const [output, setOutput] = useState('0');
  const [nowClick, setNowClick] = useState();


  return (
    <div className="App">
      <div className="output">
        <p className={classes.output}>
          {output}
        </p>
      </div>
      <InputArea getNowClick={setNowClick} updateOut={setOutput} />
    </div>
  );
}

export default App;
