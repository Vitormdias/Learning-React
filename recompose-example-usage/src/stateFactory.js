import { BehaviorSubject } from 'rxjs';

function stateFactory(initialState) {
  const state$ = new BehaviorSubject(Object.assign({}, initialState))
  const updateState = (request) => {
    const isFunction = request instanceof Function;
    const currentState = state$.getValue();
    const newKeys = isFunction ? request(currentState) : request;

    state$.next({
      ...currentState,
      ...newKeys
    })
  }

  return {
    state$,
    updateState
  }
}

export { stateFactory }