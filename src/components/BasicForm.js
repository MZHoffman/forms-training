import { useState } from 'react'
import useInputs from '../hooks/use-inputs'

const BasicForm = (props) => {
  const {
    inputValue: firstNameInputValue,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    inputIsValid: firstNameInputIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    inputClasses: firstNameInputClasses,
  } = useInputs((value) => value.trim() !== '')

  const {
    inputValue: lastNameInputValue,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    inputIsValid: lastNameInputIsValid,
    hasError: lastNameHasError,
    reset: resetLastName,
    inputClasses: lastNameInputClasses,
  } = useInputs((value) => value.trim() !== '')

  const {
    inputValue: emailInputValue,
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
          {firstNameHasError && (
            <p className='error-text'>First Name must not be empty</p>
          )}
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
          {lastNameHasError && (
            <p className='error-text'>Last Name must not be empty</p>
          )}
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
        {emailHasError && <p className='error-text'>Email must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={isFormInvalid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
