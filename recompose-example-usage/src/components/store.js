import { Observable } from 'rxjs';
import { stateFactory } from '../stateFactory';

const initialState = {
  count: 0
}

const { state$, updateState } = stateFactory(initialState);

const onIncrement = () => {
  updateState(currentState => ({ count: currentState.count + 1 }));
};

const onDecrement = () => {
  updateState(currentState => ({ count: currentState.count - 1 }));
};

const onReset = () => {
  updateState({ count: 0 });
};

const onLoad = () => {
  Observable
    .of({ count: 20 })
    .delay(300)
    .subscribe((data) => updateState(data))
};

export { state$, onIncrement, onDecrement, onReset, onLoad }
