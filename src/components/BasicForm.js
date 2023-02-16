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
    inputIsValid: firstNameInputIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    inputClasses: firstNameInputClasses,
  } = useInputs((value) => value.trim() !== '')

  const {
    inputValue: lastNameInputValue,
    setInputValue: setLastNameInputValue,
    isTouched: lastNameIsTouched,
    setIsTouched: setLastNameIsTouched,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    inputIsValid: lastNameInputIsValid,
    hasError: lastNameHasError,
    reset: resetLastName,
    inputClasses: lastNameInputClasses,
  } = useInputs((value) => value.trim() !== '')

  const {
    inputValue: emailInputValue,
    setInputValue: setEmailInputValue,
    isTouched: emailIsTouched,
    setIsTouched: setEmailIsTouched,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    inputIsValid: emailInputIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    inputClasses: emailInputClasses,
  } = useInputs((value) => value.includes('@'))

  const isFormInvalid =
    !firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid
  const submitHandler = (event) => {
    event.preventDefault()
    resetFirstName()
    resetLastName()
    resetEmail()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
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
        <div className={lastNameInputClasses}>
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
      <div className={emailInputClasses}>
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
