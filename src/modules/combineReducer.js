import { combineReducers } from 'redux';
import dongreducer from './dStore';
import gureducer from './guStore';

const rootReducer = combineReducers({
   dongreducer,
   gureducer,
});

export default rootReducer; 