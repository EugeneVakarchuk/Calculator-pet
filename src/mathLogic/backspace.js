const backspace = (
  inputNum,
  setInputNum
) => {
  setInputNum(inputNum.slice(0, -1))
}

export default backspace;