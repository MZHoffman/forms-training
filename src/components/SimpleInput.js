import { useState } from 'react'

const SimpleInput = (props) => {
  const [enternedName, setEnteredName] = useState('')
  const [enternedNameTouched, setEnteredNameTouched] = useState(false)

  const [enternedEmail, setEnteredEmail] = useState('')
  const [enternedEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enternedName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enternedNameTouched

  const enteredEmailIsValid = enternedEmail.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && enternedEmailTouched

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault()
    if (!enteredNameIsValid) {
      return
    }
    setEnteredName('')
    setEnteredNameTouched(false)
  }
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control '

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enternedName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Input must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enternedEmail}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Email must not be empty!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
