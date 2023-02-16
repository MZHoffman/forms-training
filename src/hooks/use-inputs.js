import { useState } from 'react'

const useInputs = () => {
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    setIsTouched(true)
  }
  return {
    inputValue: inputValue,
    setInputValue,
    isTouched,
    setIsTouched,
    changeHandler,
  }
}

export default useInputs
