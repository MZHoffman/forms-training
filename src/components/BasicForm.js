import { useState } from 'react'
import useInputs from '../hooks/use-inputs'

const BasicForm = (props) => {
  const {
    inputValue: firstNameInputValue,
    setInputValue: setFirstNameInputValue,
    isTouched: firstNameIsTouched,
    setIsTouched: setFirstNameIsTouched,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
  } = useInputs()

  const [lastNameInputValue, setLastNameInputValue] = useState('')
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const lastNameChangeHandler = (event) => {
    setLastNameInputValue(event.target.value)
    setLastNameIsTouched(true)
  }
  const emailChangeHandler = (event) => {
    setEmailInputValue(event.target.value)
    setEmailIsTouched(true)
  }

  const lastNameBlurHandler = (event) => {
    setLastNameIsTouched(true)
  }
  const emailBlurHandler = (event) => {
    setEmailIsTouched(true)
  }
  const firstNameInputIsValid = firstNameInputValue.trim() !== ''
  const firstNameHasError = !firstNameInputIsValid && firstNameIsTouched
  const lastNameInputIsValid = lastNameInputValue.trim() !== ''
  const lastNameHasError = !lastNameInputIsValid && lastNameIsTouched
  const emailInputIsValid = emailInputValue.trim() !== ''
  const emailHasError = !emailInputIsValid && emailIsTouched

  const isFormInvalid =
    !firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid
  console.log(isFormInvalid)
  const submitHandler = (event) => {
    event.preventDefault()
    setFirstNameInputValue('')
    setFirstNameIsTouched(false)
    setLastNameInputValue('')
    setLastNameIsTouched(false)
    setEmailInputValue('')
    setEmailIsTouched(false)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='first-name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameInputValue}
          />
          {firstNameHasError && <p>First Name must not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInputValue}
          />
          {lastNameHasError && <p>Last Name must not be empty</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInputValue}
        />
        {emailHasError && <p>Email must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={isFormInvalid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
