const clearAll = (
  setMemoryNum,
  setMathFunc,
  setInputNum,
  setNumsDef,
  setOutput,
  setIsFloatNum,
  setIntergerPart
) => {
  setMemoryNum()
  setMathFunc('')
  setInputNum([])
  setNumsDef(false)
  setOutput(null)
  setIsFloatNum(false)
  setIntergerPart()
}

export default clearAll;