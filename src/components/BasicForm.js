import { useState } from 'react'

const BasicForm = (props) => {
  const [firstNameInputValue, setFirstNameInputValue] = useState('')
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false)
  const [lastNameInputValue, setLastNameInputValue] = useState('')
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const firstNameChangeHandler = (event) => {
    setFirstNameInputValue(event.target.value)
    setFirstNameIsTouched(true)
  }
  const lastNameChangeHandler = (event) => {
    setLastNameInputValue(event.target.value)
    setLastNameIsTouched(true)
  }
  const emailChangeHandler = (event) => {
    setEmailInputValue(event.target.value)
    setEmailIsTouched(true)
  }
  const firstNameBlurHandler = (event) => {
    setFirstNameIsTouched(true)
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
  const emailInputIsValid = firstNameInputValue.trim() !== ''
  const emailHasError = !emailInputIsValid && emailIsTouched

  return (
    <form>
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
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
