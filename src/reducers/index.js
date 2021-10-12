import { combineReducers } from 'redux';
import healthCheckReducer from './healthCheckReducer';

const rootReducer = combineReducers({
  healthCheck: healthCheckReducer,
});

export default rootReducer;
