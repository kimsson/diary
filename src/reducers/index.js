import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer
});

export default rootReducer;
