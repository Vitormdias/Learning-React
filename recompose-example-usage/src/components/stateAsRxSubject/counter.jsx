import React from 'react';

const counter = ({ count, onIncrement, onDecrement, onReset, onLoad }) => {
  return <div>
    <p>Contador: {count}</p>
    <button onClick={onIncrement}>Adicionar</button>
    <button onClick={onDecrement}>Subtrair  </button>
    <button onClick={onReset}>Zerar</button>
    <button onClick={onLoad}>Load</button>
  </div>
}

export { counter }
