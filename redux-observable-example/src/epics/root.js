import { combineEpics } from 'redux-observable';
import { fetchWhiskiesEpic } from './index';

export const rootEpic = combineEpics(fetchWhiskiesEpic);