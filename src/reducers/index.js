import { combineReducers } from 'redux';

import { peopleReducers } from './peopleReducers';
import reducer_users from './reducer_users';

const rootReducer = combineReducers({
  people: peopleReducers,
  users: reducer_users

});

export default rootReducer;