const setMath = (
  output,
  setMemoryNum,
  setInputNum,
  setNumsDef,
  setIsFloatNum,
  setMathFunc,
  input
) => {
  const rememberNumAndClearInput = (output) => {
    setMemoryNum(output);
    setInputNum([])
    setNumsDef(false);
    setIsFloatNum(false);
  }
  switch (true) {
    case (input === '+'):
      setMathFunc('plus');
      rememberNumAndClearInput(output);
      break;
    case (input === '-'):
      setMathFunc('minus');
      rememberNumAndClearInput(output);
      break;
    case (input === '*'):
      setMathFunc('multiply');
      rememberNumAndClearInput(output);
      break;
    case (input === '/'):
      setMathFunc('divide');
      rememberNumAndClearInput(output);
      break;
    default: setMathFunc('none');
  }
}

export default setMath;