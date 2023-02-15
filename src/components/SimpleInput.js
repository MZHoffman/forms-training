import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enternedName, setEnteredName] = useState('')

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    console.log(enternedName)
    const enterValue = nameInputRef.current.value
    console.log(enterValue)
    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enternedName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
