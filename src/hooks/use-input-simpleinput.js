import { useState } from 'react'

const useInput = (validateValue) => {
  const [enternedValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enternedValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }
  const inputBlurHandler = (event) => {
    setIsTouched(true)
  }
  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }
  return {
    value: enternedValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput
