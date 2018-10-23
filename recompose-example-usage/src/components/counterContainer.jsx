import { dispatch, state$ } from './store'
import { mapPropsStream } from 'recompose';
import { counter } from './counter'

const onIncrement = () => dispatch('INCREMENT');

const onReset = () => dispatch('RESET');

const onLoad = () => dispatch('LOAD');

const CounterFromObservable = mapPropsStream(() => {
  return state$.asObservable()
    .map(state => ({ count: state.count, onIncrement, onReset, onLoad }))
})(counter)

export { CounterFromObservable }
