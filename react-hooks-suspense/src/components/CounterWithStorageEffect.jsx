import React, { useState, useEffect } from 'react'

const counter = () => {
  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  )
  const increment = () => setCount(count + 1)
  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count], //parameter to play effect only when this value changes
    //if empty will play only once
  )
  return <button onClick={increment}>{count}</button>
}

export {
  counter as CounterWithStorageEffect
}