import { setObservableConfig, mapPropsStream } from 'recompose';
import React from 'react';
import { BehaviorSubject } from 'rxjs';
import rxjsConfig from 'recompose/rxjsObservableConfig'
setObservableConfig(rxjsConfig)

const state = {
  count: 0
}

const state$ = new BehaviorSubject(Object.assign({}, state))

const counter = ({ count, onIncrement }) => {
  return <div>
    <p>Contador: {count}</p>
    <button onClick={() => onIncrement(count)}>Adicionar</button>
  </div>
}

const CounterFromObservable = mapPropsStream(() => {
  const onIncrement = (value) => state$.next({
    count: value + 1
  });
  return state$.asObservable()
    .map(state => ({ ...state, onIncrement }))
    .do(console.log)
})(counter)

export { CounterFromObservable }
