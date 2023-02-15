import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enternedName, setEnteredName] = useState('')
  const [enternedNameIsValid, setEnteredNameIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
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

  const nameInputClasses = enternedNameIsValid
    ? 'form-control'
    : 'form-control invalid'

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
        {!enternedNameIsValid && (
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
