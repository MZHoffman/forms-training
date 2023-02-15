import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enternedName, setEnteredName] = useState('')
  const [enternedNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enternedNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    if (!enternedName.trim()) {
      //
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log(enternedName)
    const enterValue = nameInputRef.current.value
    console.log(enterValue)
    setEnteredName('')
  }
  const nameInputIsInvalid = !enternedNameIsValid && enternedNameTouched
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enternedName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Input must not be empty!</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
