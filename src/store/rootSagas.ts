import { all } from 'redux-saga/effects';
import { habitSagas } from './slices/habit/sagas';


export function* rootSagas() {
  yield all([habitSagas]);
}