import { state$, onIncrement, onReset, onLoad, onDecrement } from './store'
import { mapPropsStream } from 'recompose';
import { counter } from './counter'

const CounterFromObservable = mapPropsStream(() => {
  return state$.asObservable()
    .map(state => ({ count: state.count, onIncrement, onDecrement, onReset, onLoad }))
})(counter)

export { CounterFromObservable }
