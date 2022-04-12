import {combineReducers} from 'redux';

import {appReducer} from './reducers/appReducer';

const reducers = combineReducers({
  appReducer: appReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
