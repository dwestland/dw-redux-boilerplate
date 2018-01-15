import { GET_USERS } from '../actions/types';

export default function(state=[], action) {

  switch (action.type) {
    case GET_USERS:
      return action.payload;


  // case UPDATE_PERSON:
  //     return state.map(person => {
  //     if(person.name === action.payload.name) {
  //       return action.payload;
  //     }
  //       return person;
  // });

  default:
    return state;
  }
}
