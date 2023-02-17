import { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value }
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' }
  }
  return initialInputState
}

const useInputReducer = (validityCheck) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )

  const changeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }
  const blurHandler = (event) => {
    dispatch({ type: 'BLUR' })
  }
  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  const inputIsValid = validityCheck(inputState.value)
  const hasError = !inputIsValid && inputState.isTouched
  const inputClasses = hasError ? 'form-control invalid' : 'form-control '
  return {
    inputValue: inputState.value,
    changeHandler,
    blurHandler,
    inputIsValid,
    hasError,
    reset,
    inputClasses,
  }
}

export default useInputReducer
