import React, { useState } from 'react'

const counter = () => {
  const [counter, setCounter] = useState(1)
  const increment = () => setCounter(counter + 1)

  return <div>
    <button onClick={increment}>{counter}</button>
  </div>
}

export {
  counter as Counter
}