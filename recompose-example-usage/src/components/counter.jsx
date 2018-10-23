import React from 'react';

//component visual
const counter = ({ count, onIncrement, onReset, onLoad }) => {
  return <div>
    <p>Contador: {count}</p>
    <button onClick={onIncrement}>Adicionar</button>
    <button onClick={onReset}>Zerar</button>
    <button onClick={onLoad}>Load</button>
  </div>
}

export { counter }
