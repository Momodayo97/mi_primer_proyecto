import React, { useState } from 'react'

export default function Counter(props) {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')
  
  function handleClick() {
    setCounter(counter + 1)
  }

  function handleChangeText(e) {
    setText(e.target.value)
  }
  function cleanInput  () {
    setText("") 
  }
  
  return(
    <div>
      <button onClick={handleClick}>{counter}</button>
      {` `}
      <input type="text" onChange={handleChangeText} value={text}/>
      {` `}
      {text}
      <button onClick={cleanInput}>"Limpiar"</button>
    </div>
  )
}