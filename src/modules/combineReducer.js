import { combineReducers } from 'redux';
import dongreducer from './dStore';
import gureducer from './guStore';
import timereducer from './timeStore';
import ticketreducer from './ticketStore';

const rootReducer = combineReducers({
   dongreducer,
   gureducer,
   timereducer,
   ticketreducer
});

export default rootReducer; 