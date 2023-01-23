import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './rootReducer'
import { rootSagas } from './rootSagas';


const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers(rootReducers);


export const store = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    )
})


sagaMiddleware.run(rootSagas);