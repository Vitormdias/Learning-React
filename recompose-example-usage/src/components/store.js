import { BehaviorSubject, Observable } from 'rxjs';

//store
const initialState = {
  count: 0
}

const state$ = new BehaviorSubject(Object.assign({}, initialState))
const actions$ = new BehaviorSubject('RESET');

const actions = {
  'INCREMENT': (currentState) => {
    return { count: currentState.count + 1 }
  },

  'RESET': () => {
    return { count: 0 }
  },

  'LOAD': () => {
    return Observable.of({ count: 20 }).delay(500)
  }
}

const parseActionResult = (data) => {
  const isObservable = data instanceof Observable;
  return isObservable ? data : Observable.of(data);
}

actions$
  .asObservable()
  .switchMap(action => {
    const currentState = state$.getValue();
    const newState$ = parseActionResult(actions[action](currentState));
    return newState$;
  })
  .switchMap(newState => {
    const currentState = state$.getValue();
    return Observable.of(
      Object.assign({}, currentState, newState)
    );
  })
  .subscribe((data) => {
    state$.next(data)
  })

const dispatch = (action) => {
  actions$.next(action);
};

export { dispatch, state$ }
