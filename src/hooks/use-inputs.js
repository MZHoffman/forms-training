import { useState } from 'react'

const useInputs = (validityCheck) => {
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    setIsTouched(true)
  }

  const blurHandler = (event) => {
    setIsTouched(true)
  }
  const reset = () => {
    setInputValue('')
    setIsTouched(false)
  }
  const inputIsValid = validityCheck(inputValue)
  const hasError = !inputIsValid && isTouched
  return {
    inputValue: inputValue,
    setInputValue,
    isTouched,
    setIsTouched,
    changeHandler,
    blurHandler,
    inputIsValid,
    hasError,
    reset,
  }
}

export default useInputs
