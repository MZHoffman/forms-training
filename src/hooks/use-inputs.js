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
  const inputClasses = hasError ? 'form-control invalid' : 'form-control '
  return {
    inputValue: inputValue,
    changeHandler,
    blurHandler,
    inputIsValid,
    hasError,
    reset,
    inputClasses,
  }
}

export default useInputs
